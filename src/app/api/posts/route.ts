import type { NextApiRequest, NextApiResponse } from 'next'
import { formatDate, getBlogPosts } from '@/app/utils'

//let allBlogs = getBlogPosts()


type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}