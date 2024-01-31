import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <div className="h-16 flex justify-between bg-slate-900 text-white lg:py-5 px-20">
          <div className="flex items-center">
            <span className="text-3xl font-bold">Logo</span>
          </div>

          <div className="lg:flex items-center md:flex hidden">
            <ul className="flex gap-9">
              <li className="hover:border-b">Home</li>
              <li className="hover:border-b">About</li>
              <li className="hover:border-b">Services</li>
              <li className="hover:border-b">Contact</li>
              <li className="hover:border-b">Projects</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
