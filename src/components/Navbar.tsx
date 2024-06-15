import React from "react";

function Navbar() {
  return (
    <div className=" w-full h-[80px] rounded-t-3xl relative flex">
      <div className=" bg-black w-[65%] h-full"></div>
      <div className=" bg-black z-10 h-full w-[6%] rounded-br-[56px] absolute top-0 left-[821px] "></div>
      <div className=" bg-[#C5FB67] w-[57px] h-full "></div>
      <div className=" bg-[#C5FB67] w-[35%] h-full rounded-tl-[24px] rounded-tr-[24px] "></div>
    </div>
  );
}

export default Navbar;
