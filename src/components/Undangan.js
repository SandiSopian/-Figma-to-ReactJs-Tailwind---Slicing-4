import React from "react";

const Undangan = () => {
  return (
    <section id="undangan" className="bg-bgDefault h-screen p-2">
      <div className="ml-[250px]">
        <div>
          <h1 className="font-titleFont text-titleColor text-4xl m-2">Undangan dan Acara</h1>
        </div>

        <div className="grid grid-cols-2 gap-6 mr-32 mt-6">
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
      </div>
    </section>
  );
};

export default Undangan;
