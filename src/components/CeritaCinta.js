import React from "react";
import ceritaimg from "../assets/ceritacinta.png";

const CeritaCinta = () => {
  return (
    <section id="ceritacinta" className="ml-[250px] p-2 h-screen">
      <h1 className="font-titleFont text-titleColor text-4xl m-2">Cerita Cinta</h1>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-bgDefault shadow-md rounded p-4">
          <p className="font-semibold text-lg">Pertama Kali Berjumpa</p>
          <p className="text-titleColor mb-4">Kamis, 16 Oktober 2020</p>
          <p>Pertama kali berjumpa kedua mempelai yaitu saat kuliah di salah satu perguruan tinggi di Bandung, satu fakultas dan sering mengikuti organisasi yang sama dan akhirnya nyaman dan memutuskan untuk membuat suatu hubungan.</p>
        </div>

        <div>
          <div>
            <img src={ceritaimg} alt="cerita cinta image" className="w-[60%] border-b-8 border-r-8 border-[#BD945A] ml-6 pb-2 pr-2" />
          </div>
        </div>

        <div>{/* Empty String */}</div>

        <div className="bg-bgDefault shadow-md rounded p-4">
          <p className="font-semibold text-lg">Prosesi Lamaran</p>
          <p className="text-titleColor mb-4">Minggu, 15 Oktober 2022</p>
          <p>Mempelai pria datang bersama keluarga nya untuk melanjutkan hubungan ketahap lebih serius yaitu pernikahan dengan membawa satu buah cincin penanda prosesi khitbah.</p>
        </div>

        <div className="bg-bgDefault shadow-md rounded p-4">
          <p className="font-semibold text-lg">Kami Dipingit Satu Sama Lain</p>
          <p className="text-titleColor mb-4">Kamis, 11 November 2022</p>
          <p>Kedua mempelai dipingit agar mempersiapkan bagi dari segi mental atau keperluan penting lainnya untuk kelancaran prosesi pernikahan</p>
        </div>
      </div>
    </section>
  );
};

export default CeritaCinta;
