import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCallOutline, IoCart, IoClose, IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
// Assuming you have a CSS file for styles
function Header() {
  const [isOpen, setisopen] = useState(false);
  return (
    <nav>
      <div className="bg-blue-950 px-3 lg:px-0 py-1">
        <div className="container flex mx-auto justify-between text-white">
          <div className="flex items-center">
            <IoCallOutline className="me-1" />
            <span>+855 88 982 5021</span>
          </div>
          <div className="hidden lg:flex">
            <span>Get 50% Off on Selected Items &emsp; | &emsp; Shop Now</span>
          </div>
          <div className="">
            <select name="" id="" className="outline-0 me-4">
              <option value="" className="text-black">
                EN
              </option>
              <option value="" className="text-black">
                KH
              </option>
            </select>
            <select name="" id="" className="outline-0">
              <option value="" className="text-black">
                Cambodia
              </option>
              <option value="" className="text-black">
                Thailand
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="py-4 px-3 lg:px-0 shadow-lg">
        <div className="container flex mx-auto justify-between">
          <div className="w-[20%]">
            <h1 className="text-3xl font-bold">Logo</h1>
          </div>

          <div className="hidden lg:w-[60%] lg:flex items-center justify-between ">
            <ul className="flex">
              <li className="mx-6 text-xl">
                <NavLink to={"./"}>Home</NavLink>
              </li>
              <li className="mx-6 text-xl">
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="mx-6 text-xl">
                <NavLink to={"/service"}>Service</NavLink>
              </li>
              <li className="mx-6 text-xl">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
            <form
              action=""
              className="flex items-center border border-gray-300 rounded-full p-2 pe-3"
            >
              <input
                placeholder="Search..."
                className=" border-0 outline-0 px-3"
                type="text"
                name=""
                id=""
              />
              <button>
                <IoSearch />
              </button>
            </form>
          </div>
          <div className="hidden lg:w-[20%] lg:flex items-center justify-end">
            <div className="flex items-center me-4">
              <FaUser className="me-2" />
              <NavLink >Account</NavLink>
            </div>
            <div className="flex items-center">
              <IoCart className="me-2 text-xl" />
              <NavLink>Cart</NavLink>
            </div>
          </div>

          <div className="block lg:hidden" onClick={() => setisopen(!isOpen)}>
            {isOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoIosMenu className="text-2xl" />
            )}
          </div>
        </div>

        <div
          className={` ${
            isOpen
              ? "opacity-100 translate-y-2 pointer-events-auto"
              : "opacity-0 -transtate-y-4 pointer-events-none "
          }
         w-[90%] lg:hidden bg-white border rounded-lg mt-6 absolute left-1/2 transform -translate-x-1/2 p-4`}
        >
          <ul>
            <li className="text-xl border-b-1 pb-3 mb-3">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="text-xl border-b-1 pb-3 mb-3">
              <NavLink to={"/about"}>About</NavLink>
            </li>

            <li className="text-xl border-b-1 pb-3 mb-3">
              <NavLink to={"/service"}>Service</NavLink>
            </li>
            <li className="text-xl border-b-1 pb-3 mb-3">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
          <form
            action=""
            className="flex items-center border border-gray-300 rounded-full p-2 pe-3 mt-5"
          >
            <input
              placeholder="Search..."
              className="w-full border-0 outline-0 px-3"
              type="text"
              name=""
              id=""
            />
            <button>
              <IoSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Header;
