import React from "react";
import IconLoc from "../assets/map-pin.svg";
import LeafletMap from "./LeafletMap";

const Lokasi = () => {
  return (
    <section id="lokasi" className="lg:ml-[250px] p-2">
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
          <button className="bg-[#8CA4B9] py-4 px-6 flex gap-2 rounded-lg text-white mt-2 mb-4">
            <img src={IconLoc} alt="Icon Location" />
            <a href="https://goo.gl/maps/dszEfSoRaczBvbEK7">Buka Lokasi</a>
          </button>
        </div>
      </div>

      <div className="mt-4">
        <LeafletMap />
      </div>
    </section>
  );
};

export default Lokasi;
