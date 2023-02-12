import React from "react";
import { Link } from "react-router-dom";
import menuIcons from "../../assets/icons/menu.png";
function Navbar() {
  return (
    <nav className="container mx-auto bg-slate-800 text-white p-4 md:flex md:justify-between">
      <div className="flex justify-between">
        <h1 className="font-bold">Flashindo Computer</h1>
        <button className="md:hidden">
          <img className="menu" src={menuIcons} alt="" />
        </button>
      </div>
      <ul className="hidden md:flex gap-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>Browse</Link>
        </li>
        <li>
          <Link to={"/"}>Services</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
