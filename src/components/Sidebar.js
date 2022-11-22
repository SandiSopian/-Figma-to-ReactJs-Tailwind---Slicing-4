import React, { useState } from "react";
import arrow from "../assets/arrow.png";
import logo from "../assets/logo-butterfly.png";
import line from "../assets/Line 1.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className="p-0 ">
      <div className={`${open ? "left-0 w-[250px] " : "-left-full hidden lg:block "} scale-100 lg:left-0 duration-700 `}>
        <div className="w-[250px] flex flex-col text-center items-center justify-center m-auto bg-white lg:gap-0">
          <img src={logo} alt="logo-butterfly" className="w-[40%] mt-10" />
          <h1 className="font-titleFont text-4xl text-titleColor mt-4">Rika & Yuuta</h1>
          <h4 className="text-sm my-6">02.12.2022</h4>

          <div className="flex flex-col text-sm m-2 gap-2 ">
            <a className="" href="#home">
              HOME
            </a>
            <a className="" href="#mempelai">
              MEMPELAI
            </a>
            <a className="" href="#ceritacinta">
              CERITA CINTA
            </a>
            <a className="" href="#undangan">
              UNDANGAN
            </a>
            <a className="" href="#lokasi">
              LOKASI
            </a>
            <a className="" href="#photogaleri">
              PHOTO GALERI
            </a>
            <a className="" href="#doadanucapan">
              DOA DAN UCAPAN
            </a>
          </div>

          <img src={line} alt="" className="w-[0.8%] m-2" />

          <div className="font-mono text-sm opacity-70 leading-loose mt-2 mb-4">
            <h4>Rika & Yuuta wedding</h4>
            <h4>02 Desember 2022, Bandung</h4>
          </div>
        </div>
      </div>

      <div>
        <img src={arrow} className={`lg:hidden absolute cursor-pointer sm:left-6 left-6 top-9 w-7 rounded-full z-20 opacity-50 ${!open && "rotate-180 duration-300 visible"}`} onClick={() => setOpen(!open)} />
      </div>
    </nav>
  );
};

export default Sidebar;
