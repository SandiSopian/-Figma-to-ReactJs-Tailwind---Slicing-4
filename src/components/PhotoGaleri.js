import React from "react";
import galleri1 from "../assets/photogaleri1.png";
import galleri2 from "../assets/photogaleri2.png";
import galleri3 from "../assets/photogaleri3.png";
import galleri4 from "../assets/photogaleri4.png";

const PhotoGaleri = () => {
  return (
    <section id="photogaleri" className="bg-bgDefault p-2">
      <div className="lg:ml-[250px]">
        <div>
          <h1 className="font-titleFont text-titleColor text-4xl m-2">Photo Galeri</h1>
        </div>

        <div>
          <h4>Sebagian kenangan kami yang diabadikan dalam photo-photo penuh kebahagiaan</h4>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-2 justify-center">
          <img src={galleri1} alt="" className="w-[60%] " />
          <img src={galleri2} alt="" className="w-[60%] -ml-52" />
          <img src={galleri3} alt="" className="w-[60%] " />
          <img src={galleri4} alt="" className="w-[60%] -ml-52" />
        </div>
      </div>
    </section>
  );
};

export default PhotoGaleri;
