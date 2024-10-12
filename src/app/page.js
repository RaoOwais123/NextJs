import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <div className="font-bold text-5xl my-5 uppercase">Hello Next Js</div>

      <Link href={"/blogs"}>
      <button className="p-2 px-4 bg-orange-500 rounded">See All Blogs</button>
      </Link>

      <Link href={"/contactus"}>
      <button className="p-2 px-4 bg-orange-500 rounded">Contact Us</button>
      </Link>

      <Link href={"/aboutus"}>
      <button className="p-2 px-4 bg-orange-500 rounded">About Us</button>
      </Link>

      <Link href={"/dashboard"}>
      <button className="p-2 px-4 bg-orange-500 rounded">Dashboard</button>
      </Link>
    </div>
  );
}
