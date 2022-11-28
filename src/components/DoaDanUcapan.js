import React, { useEffect, useState } from "react";
import PaginationJsonSvr from "./PaginationJsonSvr";
import PaginationGSApi from "./PaginationGSApi";

const DoaDanUcapan = () => {
  return (
    <section id="doadanucapan" className="p-2">
      <div>
        <h1 className="font-titleFont text-titleColor text-4xl mx-0 xl:mx-2 mt-0 sm:mt-4 xl:mt-8 ml-16 sm:ml-0">Doa dan Ucapan</h1>
      </div>

      {/* Card Ucapan */}
      <div>
        {/* <PaginationJsonSvr />  */}
        <PaginationGSApi />
      </div>

      <div className="sm:flex sm:justify-center lg:m-4 ml-12 sm:ml-0 lg:mr-28 xl:mr-0">
        <button className="bg-[#8CA4B9] py-4 px-6 flex gap-2 rounded-lg text-white m-6 hover:bg-[#1a4c77]">
          <a href="#kirimdoadanucapan">Kirim Do'a dan Ucapan</a>
        </button>
      </div>
    </section>
  );
};

export default DoaDanUcapan;
