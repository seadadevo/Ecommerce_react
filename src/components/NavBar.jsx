import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapIcon, MapPin } from "lucide-react";
import React  from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import HeaderLink from "./UI/HeaderLink";

const NavBar = ({ location, getLocation,openDropDown , setOpenDropDown }) => {
  
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo part */}
        <div className="flex items-center gap-7">
          {/* 1 Logo  */}
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">S</span>eada
              <span className="text-red-500 font-serif">M</span>art
            </h1>
          </Link>
          {/* 2 Location */}
          <div
            onClick={() => setOpenDropDown(!openDropDown)}
            className="flex gap-1 cursor-pointer text-gray-700 items-center"
          >
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? (
                <div className="space-y-1">
                  <p>{location.state}</p>
                  <p>{location.country}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown />
          </div>
          {openDropDown ? (
            <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="font-semibold mb-4 text-xl flex justify-between items-center">
                Change Location
                <span>
                  <CgClose className="cursor-pointer" onClick={() => setOpenDropDown(!openDropDown)} />
                </span>
              </h1>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400 " onClick={getLocation}>Detect my Location</button>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* menu part */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-xl font-semibold">
            <HeaderLink path = {'/'} text = "Home"/>
            <HeaderLink path = {'/products'} text = {'Products'}/>
            <HeaderLink path = {'/about'} text = {'About'}/>
            <HeaderLink path = {'/contact'} text = {'Contact'}/>
          </ul>

          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>

          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
