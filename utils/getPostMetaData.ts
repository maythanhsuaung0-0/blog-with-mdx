import fs from 'fs';
import matter from 'gray-matter';

export default function getPostMetaData(basePath:string) {
    const folder = basePath+'/';
    const files = fs.readdirSync(folder); // get all files in the folder
    const markdownfiles = files.filter((fn) => fn.endsWith('.md')); // filter markdown files

    //get the file data
    const post = markdownfiles.map((file)=>{
        const fileContent = fs.readFileSync(`${basePath}/${file}`,'utf8') // read the file based on the file name
        const matterResult = matter(fileContent); // get the matter data 
        return {
            title: matterResult.data.title,
            prep_time: matterResult.data.prep_time,
            cook_time: matterResult.data.cook_time,
            description:matterResult.data.description,
            slug: file.replace('.md','') // remove the .md extension from the file name to get the slug
        }
    })
    return post
}