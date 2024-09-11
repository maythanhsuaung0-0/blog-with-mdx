import Image from "next/image";
import getPostMetaData from "../../utils/getPostMetaData";
import Card from "../../components/Card";

export default function Home() {

  const postMetaData = getPostMetaData('recipes');
  console.log(postMetaData);
  return (
    <div className="w-[80%] m-auto grid gap-5 lg:grid-cols-3 py-10">
      {
        postMetaData.map((post,postIndex)=>{
          return (<Card key={postIndex} prop={post}/>)
        })
      }
    </div>
  );
}
