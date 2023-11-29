import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import useAuth from "../../hooks/useAuth";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
  const { user, logOut } = useAuth();
  // const history = useHistory();
  const location = useLocation();

  const handleSignOut = () => {
    logOut()
      .then(alert("Logged Out Sucessfully!"))
      .catch((err) => {
        console.error(err);
      });
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/appliedjobs">Applied Jobs</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
    </>
  );

  return (
    <>
      <div className="flex justify-around items-center relative py-4 md:py-6">
        <div className="">
          <h2 className="text-3xl font-semibold">Career Hub</h2>
        </div>

        <div className="hidden md:block">
          <div className="flex gap-5">{navItems}</div>
        </div>

        {user && user?.email ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul className="mt-4 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>

              <div onClick={handleSignOut}>
                <li>
                  <Link>Logout</Link>
                </li>
              </div>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-gray-600 px-5 py-3 rounded-lg">Login</button>
          </Link>
        )}
      </div>

      <div className="md:hidden absolute top-8 ml-5">
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
          <div className="flex flex-col gap-5 h-[20vh] py-3 ml-5 md:hidden">
            {navItems}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
