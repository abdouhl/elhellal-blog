import { Header } from '../components/header';


import Welcome, {title, summary, publishedAt } from '../posts/spaces-vs-tabs.mdx'
import { AspectRatio, Heading, Badge } from '@radix-ui/themes';
import imm from '../posts/spaces-vs-tabs.jpg'
import Moment from 'moment'
import 'moment/locale/ar'
import { MDXContent } from 'mdx/types';

import {globby} from 'globby';



export async function generateStaticParams() {

  const posts = await globby('src/app/posts/', {
    expandDirectories: {
      extensions: ['mdx']
    }
  });

  return posts.map((post) => ({
    slug: post.replace('src/app/posts/','').replace('.mdx',''),
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  Moment.locale('ar') 


  console.log(params.slug)
  
  
  return <main className="flex min-h-screen flex-col items-center">
  <Header isHome={true} />
  <div className="flex flex-row flex-wrap w-full max-w-screen-lg gap-3 lg:gap-4 p-3 lg:p-4">
  <AspectRatio ratio={16 / 8} className="relative" >
  <img
    src={imm.src}
    alt="A house in a forest"
    className='brightness-50'
    style={{
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-2)',
    }}
  />
  <div className='w-full absolute bottom-5 mx-4'>
  <div className="flex flex-row flex-wrap gap-2 w-full pb-3 lg:pb-4">
  <Badge variant='solid' >الفترة</Badge>
  <Badge variant='solid' >نفس, ما تونس وترك</Badge>
  </div>
  <Heading className="text-white" >{title}</Heading>
  <p className="text-white" >{Moment(publishedAt, "YYYY-MM-DD").format('d MMM YYYY')}</p>
  </div>
  
</AspectRatio>
  <Welcome />
  </div>
  </main>
}