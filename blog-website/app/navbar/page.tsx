import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="top-0 bg-blue-950 border-b border-b-white shadow-md p-2 px-5
        font-serif text-white flex items-center justify-between"
    >
      <Link href="/">
        <h1 className="font-bold text-3xl">Blogverse</h1>
      </Link>
      <div className="flex justify-end mr-5 space-x-5 items-center">
        <Link href="/content">
          <p className="text-xl hover:text-cyan-500 "> Blogs</p>
        </Link>
        <Link href="/about">
          <p className="text-xl hover:text-cyan-500 "> About</p>
        </Link>
      </div>
    </nav>
  );
}
