import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const DoaDanUcapan = () => {
  return (
    <section id="doadanucapan" className="p-2 h-full">
      <div className="ml-[250px]">
        <div>
          <h1 className="font-titleFont text-titleColor text-4xl m-2">Doa dan Ucapan</h1>
        </div>

        {/* Card Ucapan */}
        <div>
          <Pagination />
        </div>

        <div className="flex justify-center m-4">
          <button className="bg-[#8CA4B9] py-4 px-6 flex gap-2 rounded-lg text-white m-6 hover:opacity-50">
            <a href="#kirimdoadanucapan">Kirim Do'a dan Ucapan</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoaDanUcapan;
