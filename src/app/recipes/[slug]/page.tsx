import React from 'react'
import Markdown from 'markdown-to-jsx'
import getPostMetaData from '../../../../utils/getPostMetaData'
import fs from 'fs'
import matter from 'gray-matter'
import '../../noTailwind.css'
import { IoReturnUpBack } from "react-icons/io5";
import Link from 'next/link'

// interface Params{
//     slug: string
// }

// for getting post content
export async function getPostContent(slug: string){
    const folder = 'recipes/';
    const file = folder + slug + '.md';
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult
}

export async function generateStaticParams(){
    const posts = getPostMetaData('recipes');
    return posts.map((post)=>{
        slug: post.slug
    })
}

export async function generateMetaData({params,searchParams}:{params:any,searchParams:string}){
 const id = params?.slug?" . "+params?.slug:"" // if params.slug exists, add a dot before the slug
 return {
    title: `RecipeBlog ${id.replaceAll('_',' ')}`,
 }
}

const RecipePage = async ({params}:{params:{slug:string}}) => {
    const post = await getPostContent(params.slug)
    console.log(post)
  return (
    <main className='w-[80%] m-auto'>
        <div className='mt-10'>
            <Link href='/' className='flex items-center gap-2'><IoReturnUpBack/>Back</Link>
        </div>
        <div className='reset-all'> 
    
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
    </main>
  )
}

export default RecipePage
