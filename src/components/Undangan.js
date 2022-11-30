import React from "react";

const Undangan = () => {
  return (
    <section id="undangan" className="bg-bgDefault p-2 md:pt-8 lg:pt-4 sm:pb-20">
      <div>
        <h1 className="font-titleFont text-titleColor text-4xl xl:mx-2 mt-0 sm:mt-4 xl:mt-8 ml-6 sm:ml-0 sm:flex lg:flex-none sm:justify-center lg:justify-start">Undangan dan Acara</h1>
      </div>

      <div className="grid sm:grid-cols-2 gap-2 lg:gap-6 xl:gap-8 mt-2 sm:mt-6 pb-6 mb-6">
        <div className="flex flex-col py-6 bg-white shadow-md justify-evenly text-center leading-relaxed ">
          <h4 className="underline font-bold mb-4">Akad Nikah</h4>
          <h4 className="font-bold">08:00 - selesai</h4>
          <h4 className="mb-4"> Jum'at, 01 Desember 2022</h4>
          <h4>
            Aula Masjid ABRI Cimahi -
            <br />
            Jalan Gatot Subroto Kota Cimahi
          </h4>
        </div>

        <div className="flex flex-col py-6 bg-white shadow-md justify-evenly text-center leading-relaxed ">
          <h4 className="underline font-bold mb-4">Resespsi</h4>
          <h4 className="font-bold">09:00 - selesai</h4>
          <h4 className="mb-4"> Sabtu, 02 Desember 2022</h4>
          <h4>
            Jl. Sumatera No.52 - 54, Citarum -
            <br />
            Kec. Bandung Wetan, Kota Bandung,
            <br />
            Jawa Barat 40115•(022) 4203009
          </h4>
        </div>

        <div className="flex flex-col pt-6 pb-16 bg-white shadow-md justify-evenly text-center leading-relaxed ">
          <h4 className="underline font-bold mb-4">Turut Mengundang</h4>

          <h4>
            Turut mengundang keluarga besar dari
            <br />
            mempelai laki-laki dan mempelai perempuan
            <br />
            untuk berkenan hadir di acara pernikahan kami.
          </h4>
        </div>

        <div className="flex flex-col pt-6 pb-16 bg-white shadow-md justify-evenly text-center leading-relaxed ">
          <h4 className="underline font-bold mb-4">Catatan</h4>
          <h4>
            Merupakan suatu kebahagiaan dan
            <br />
            kehormatan bagi kami
            <br />
            jika Bapak/Ibu/Saudara/i dapat turut hadir.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Undangan;
