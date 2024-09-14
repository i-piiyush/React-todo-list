import React from "react";
import Mainbtn from "./Mainbtn";


const Navbar = ({ openOverlay }) => {
  return (
    <nav className=" w-full h-[100px] flex items-center justify-between px-32 relative z-[5]">
      <h1 className="font-bold text-3xl text-zinc-600">
        To-do List by Piiyush
      </h1>
      

      <Mainbtn openOverlay={openOverlay} />
      
      
    </nav>
  );
};

export default Navbar;
