import { NavLink } from "react-router-dom";

import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navItems = (
    <>
      <NavLink>Home</NavLink>

      <NavLink>About</NavLink>

      <NavLink>Contact</NavLink>
    </>
  );

  return (
    <>
      <div className="flex justify-around md:items-center ">
        <div className="">
          <h2 className="text-3xl font-semibold">Career Hub</h2>
        </div>

        <div className="hidden md:block">
          <div className="flex gap-5">{navItems}</div>
        </div>

        <button className="btn btn-neutral">Login</button>
      </div>

      <div className="md:hidden -mt-9 ml-5">
        {isOpen ? (
          <div onClick={toggleNav}>
            <FaTimes className="text-2xl cursor-pointer" />
          </div>
        ) : (
          <div onClick={toggleNav}>
            <FaAlignJustify className="text-2xl cursor-pointer" />
          </div>
        )}
      </div>

      <div className="">
        {isOpen && (
          <div className="flex flex-col gap-5 h-[20vh] py-8 ml-5">
            {navItems}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
