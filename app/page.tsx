import Link from "next/link";
import Posts from "./components/Posts";


export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="mb-5 flex justify-between items-center pb-3 border-b border-gray-200">
          <h1 className=" capitalize text-3xl font-bold text-white">technology </h1>
          <h3>
            <Link href='' className=" text-blue-500 font-medium text-sm"> View More Posts </Link>
          </h3>
        </div>
        {/*  */}
        <Posts />
    </main>
  )
}
