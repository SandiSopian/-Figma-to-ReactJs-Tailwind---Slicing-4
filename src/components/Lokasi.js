import React from "react";
import IconLoc from "../assets/map-pin.svg";

const Lokasi = () => {
  return (
    <section id="lokasi" className="ml-[250px] p-2 h-screen">
      <div>
        <div>
          <h1 className="font-titleFont text-titleColor text-4xl m-2">Peta Lokasi</h1>
        </div>

        <div>
          <h4>
            Bertempat di Jl. Sumatera No.52 - 54, Citarum, Kec. Bandung Wetan,
            <br />
            Kota Bandung, Jawa Barat 40115•(022) 4203009
          </h4>

          <h4>
            Anda dapat juga menuju lokasi berdasarkan peta yang ada di bawah ini.
            <br />
            Anda bisa tekan tombol disini:
          </h4>
        </div>

        <div>
          <button className="bg-[#8CA4B9] py-4 px-6 flex gap-2 rounded-lg text-white">
            <img src={IconLoc} alt="Icon Location" />
            Buka Lokasi
          </button>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Lokasi;
