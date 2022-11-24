import React from "react";
import IconLoc from "../assets/map-pin.svg";
import LeafletMap from "./LeafletMap";

const Lokasi = () => {
  return (
    <section id="lokasi" className="p-2 lg:pb-20">
      <div>
        <div>
          <h1 className="font-titleFont text-titleColor text-4xl mx-0 xl:mx-2 mt-0 sm:mt-4 xl:mt-8 ml-20 sm:ml-0 sm:flex lg:flex-none sm:justify-center lg:justify-start">Peta Lokasi</h1>
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
          <button className="bg-[#8CA4B9] py-4 px-6 flex gap-2 rounded-lg text-white mt-2 mb-4">
            <img src={IconLoc} alt="Icon Location" />
            <a href="https://goo.gl/maps/dszEfSoRaczBvbEK7">Buka Lokasi</a>
          </button>
        </div>
      </div>

      <div className="mt-4 mb-16 ml-3 sm:ml-0 ">
        <LeafletMap />
      </div>
    </section>
  );
};

export default Lokasi;
