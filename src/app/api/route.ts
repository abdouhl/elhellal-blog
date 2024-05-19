import { globby } from 'globby';



import { readFileSync } from 'node:fs'








export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('_limit') || '0'
  const page = searchParams.get('_page') || '1'
  console.log(page, limit)
  let posts: any[] = []

  const posts0 = await globby('src/app/posts/', {
    expandDirectories: {
      extensions: ['mdx']
    }
  }).then((posts)=> {
    return posts.slice(parseInt(page),parseInt(page)+parseInt(limit))
  })

  posts = await posts0.map(  (post) => {

        let contents =   readFileSync(post)
        //console.log('post', contents.toString().length)
        //console.log('-----', posts.length)
        return { title: contents.toString().split("'")[1],
         publishedAt: contents.toString().split("'")[3],
         summary: contents.toString().split("'")[5],
          post: post.toString() }
      })

  //await console.log('---22--', posts)
  return await Response.json( posts )
}