import React from "react";
import galleri1 from "../assets/photogaleri1.png";
import galleri2 from "../assets/photogaleri2.png";
import galleri3 from "../assets/photogaleri3.png";
import galleri4 from "../assets/photogaleri4.png";

const PhotoGaleri = () => {
  return (
    <section id="photogaleri" className="bg-bgDefault p-2 md:pt-2 lg:pt-4 ">
      <div>
        <h1 className="font-titleFont text-titleColor text-4xl mx-0 xl:mx-2 mt-0 sm:mt-4 xl:mt-8 sm:mb-2 md:mb-0 ml-24 sm:ml-0 sm:flex lg:flex-none sm:justify-center lg:justify-start">Photo Galeri</h1>
      </div>

      <div className="sm:px-6 lg:px-0">
        <h4>Sebagian kenangan kami yang diabadikan dalam photo-photo penuh kebahagiaan</h4>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 lg:gap-2 xl:gap-4 mt-2 sm:mb-24 sm:p-6 lg:w-[90%] xl:w-full">
        <img src={galleri1} alt="galeri1" className="xl:w-[60%] rounded-lg shadow-md xl:ml-24" />
        <img src={galleri2} alt="galeri2" className="xl:w-[60%] rounded-lg shadow-md" />
        <img src={galleri3} alt="galeri3" className="xl:w-[60%] rounded-lg shadow-md xl:ml-24 " />
        <img src={galleri4} alt="galeri4" className="xl:w-[60%] rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default PhotoGaleri;
