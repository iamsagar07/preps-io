import React from "react";
import logo from "/new_logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-48 min-h-screen md:flex lg:flex flex-col xl:flex hidden sm:hidden">
      <div className="flex justify-start -mt-10">
        <img src={logo} alt="logo" />
      </div>

      <div className="text-xl text-white flex flex-col items-center gap-12 ">
        <Link to={'/adopt'} className="custom-border">Adopt</Link>
        <Link to={'/donate'} className="custom-border">Donate</Link>
        <Link to={'/contact'} className="custom-border">Contact</Link>
        <Link to={'/find-us'} className="custom-border">Socials</Link>
      </div>
    </div>
  );
};

export default Sidebar;
