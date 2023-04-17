"use client";
import Link from "next/link";

const Header = () => {
  const authToken = localStorage.getItem("authToken");
  return (
    <header className='w-full px-4 py-4 border-b border-b-slate-200'>
      <div className='flex justify-between max-w-7xl mx-auto'>
        <strong className=''>
          {" "}
          <Link href={"/"}>
            <h1 className='font-bold text-4xl '>
              Books<span className=' text-cyan-400'>API</span>
            </h1>
          </Link>
        </strong>

        <nav>
          <ul className='flex justify-between items-center gap-5 font-medium'>
            <li>
              {" "}
              <Link href={"/"}>BooksAPI</Link>
            </li>
            <li>
              {authToken && (
                <Link href='/' className='px-6 py-2 bg-cyan-500 rounded-md'>
                  Orders
                </Link>
              )}
            </li>
            <li className='px-6 py-2 bg-cyan-500 rounded-md'>
              {" "}
              <Link href={"/register"}>Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
