import Link from "next/link";
import React from "react";

interface MyProps {
  title: string;
  prep_time: string;
  cook_time: string;
  description: string;
  slug: string;
}
const Card = ({ prop }: { prop: MyProps }) => {
  return (
    <Link href={`/recipes/${prop.slug}`}>
      <div className="cursor-pointer max-h-[200px] h-full shadow-sm rounded-md py-4 px-4 border border-solid border-gray-200 grid gap-2">
        <h3 className="font-semibold">{prop.title}</h3>
        <div className="flex flex-row justify-between text-sm">
          <div>
            <span className="text-xs">Preparation Time:</span>{" "}
            <span className="block">{prop.prep_time}</span>
          </div>
          <div>
            <span className="text-xs">Cook Time: </span>
            <span className="block">{prop.cook_time}</span>
          </div>
        </div>
        <p>{prop.description}</p>
      </div>
    </Link>
  );
};

export default Card;
