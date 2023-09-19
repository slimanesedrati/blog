
type Props = {
    post : BlogPost 
}

import getFormattedDate from "@/lib/getFormattedDate"
import Link from "next/link"
import Image from "next/image"

export default function ListItem({post} : Props) {
    const {id, title, date} = post
    const formattedDate = getFormattedDate(date,'dd MMM yyyy')
  return (
    <div className="bg-gray-200 hover:shadow-sm p-5 rounded-lg fle flex-col">
            <div className="flex items-center space-x-2">
                <Image 
                  src='/images/ProfilePic.jpg'
                  width={50}
                  height={50}
                  alt="slimane seedrati"
                  priority={true}
                  className=" rounded-full border-2 border-emerald-500"        
                />
                <div className="">
                  <h5 className=" font-medium"> Slimane Sedrati</h5>
                  <p className="text-xs font-bold text-gray-400">{formattedDate}</p>
                </div>
            </div>
            <div className="py-4 text-gray-700">
                <h3 className="text-lg font-semibold mb-2">
                    <Link href={`posts/${id}`}>{title}</Link>
                </h3>
            </div>
            <div className="flex space-x-1 items-end">
              <span className=" text-xs bg-cyan-700 p-1 px-2 rounded-md text-white">Tech</span>
              <span className=" text-xs bg-slate-400 p-1 px-2 rounded-md text-white">Apple</span>
            </div>
    </div>
  )
}
