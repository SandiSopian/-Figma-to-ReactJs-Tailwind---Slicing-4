import React from "react";
import ceritaimg from "../assets/ceritacinta.png";

const CeritaCinta = () => {
  return (
    <section id="ceritacinta" className="p-2 sm:pt-8 sm:pb-24 lg:pt-4 xl:px-4 xl:py-2">
      <h1 className="font-titleFont text-titleColor text-4xl xl:mx-2 mt-0 md:mt-4 xl:mt-8 sm:mb-4 md:mb-0 ml-20 sm:ml-0 sm:flex lg:flex-none sm:justify-center lg:justify-start">Cerita Cinta</h1>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-8 lg:gap-0 xl:gap-2 p-2 lg:w-[90%] xl:w-full md:mt-10 lg:mt-0 md:mb-28 lg:mb-0">
        <div className="bg-bgDefault shadow-md rounded p-4 xl:text-base">
          <p className="font-semibold text-lg">Pertama Kali Berjumpa</p>
          <p className="text-titleColor mb-4">Kamis, 16 Oktober 2020</p>
          <p>Pertama kali berjumpa kedua mempelai yaitu saat kuliah di salah satu perguruan tinggi di Bandung, satu fakultas dan sering mengikuti organisasi yang sama dan akhirnya nyaman dan memutuskan untuk membuat suatu hubungan.</p>
        </div>

        <div className="order-first lg:order-none">
          <div>
            <img
              src={ceritaimg}
              alt="cerita cinta image"
              className="w-[90%] lg:w-[80%] xl:w-[40%] xl:ml-48
             border-b-8 border-r-8 border-[#BD945A] ml-4 lg:ml-6 pb-2 pr-2"
            />
          </div>
        </div>

        <div className="hidden lg:block">{/* Empty String */}</div>

        <div className="bg-bgDefault shadow-md rounded p-4 xl:text-lg">
          <p className="font-semibold text-lg">Prosesi Lamaran</p>
          <p className="text-titleColor mb-4">Minggu, 15 Oktober 2022</p>
          <p>Mempelai pria datang bersama keluarga nya untuk melanjutkan hubungan ketahap lebih serius yaitu pernikahan dengan membawa satu buah cincin penanda prosesi khitbah.</p>
        </div>

        <div className="bg-bgDefault shadow-md rounded p-4 xl:text-lg">
          <p className="font-semibold text-lg">Kami Dipingit Satu Sama Lain</p>
          <p className="text-titleColor mb-4">Kamis, 11 November 2022</p>
          <p>Kedua mempelai dipingit agar mempersiapkan bagi dari segi mental atau keperluan penting lainnya untuk kelancaran prosesi pernikahan</p>
        </div>
      </div>
    </section>
  );
};

export default CeritaCinta;
