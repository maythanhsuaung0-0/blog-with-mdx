import Link from "next/link";

export default function Navbar() {
  return (
   <div className="w-full">
    <ul className="flex flex-row justify-between gap-2 w-[80%] m-auto py-6">
      <li className="text-purple-900 font-bold text-xl">
        <Link href="/">RecipesHouse</Link>
      </li>
    </ul>
   </div>
  );
}
