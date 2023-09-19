
import Link from "next/link"

// import bmcImg from '/images/Buy-Me-a-Coffee.svg'

export default function Navbar() {
  return (
    <nav className="drop-shadow-xl sticky top-0 z-10 bg-slate-700 py-4 mb-5">
        <div className="flex justify-between items-center mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <h1 className="relative text-3xl font-bold text-white">
                <Link href="/">
                    Gattar
                </Link>
                <span className="absolute text-xs bottom-0 text-gray-400">
                    blog
                </span>
            </h1>
            <Link href="">
                <img src="/images/Buy-Me-a-Coffee.svg" className="w-16" alt="" />
            </Link>
        </div>
    </nav>
  )
}
