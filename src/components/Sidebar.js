import React, { useState } from "react";
import arrow from "../assets/arrow.png";
import logo from "../assets/logo-butterfly.png";
import line from "../assets/Line 1.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`${open ? "w-72" : "w-10 -left-10"} scale-100 lg:left-0 p-2 lg:w-64 duration-700 h-screen relative bg-bgSidebar`}>
      <img src={arrow} className={`lg:hidden absolute cursor-pointer -right-3 top-9 w-7 bg-white rounded-full ${!open && "rotate-180 -right-10 duration-700 "}`} onClick={() => setOpen(!open)} />

      <div className={`${!open && "hidden"} flex flex-col text-center items-center`}>
        <img src={logo} alt="logo-butterfly" className="w-[40%] mt-10" />
        <h1 className="font-titleFont text-4xl text-titleColor mt-4 ">Rika & Yuuta</h1>
        <h4 className="font-textFont text-sm my-6">02.12.2022</h4>

        <div className="flex flex-col text-sm mb-12 gap-4 ">
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

        <img src={line} alt="" className="w-[0.8%] mb-12" />

        <div className="font-subtextFont text-sm opacity-70 leading-loose">
          <h4>Rika & Yuuta wedding</h4>
          <h4>02 Desember 2022, Bandung</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
