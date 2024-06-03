import React from "react";

function Navbar() {
  return (
    <div className='flex justify-around h-8 bg-slate-900 top-0 text-white'>
      <Link className='block' href={"/home"}>
        Home
      </Link>
      <Link className='block' href={"/browse"}>
        Movies
      </Link>
      <Link className='block' href={"/profile"}>
        Profile
      </Link>
    </div>
  );
}

export default Navbar;
