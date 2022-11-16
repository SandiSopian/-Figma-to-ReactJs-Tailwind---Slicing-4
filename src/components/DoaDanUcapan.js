import React, { useEffect, useState } from "react";

const DoaDanUcapan = () => {
  const [ucapan, setUcapan] = useState(null);

  // geet data from json
  useEffect(() => {
    fetch("http://localhost:8000/kartuUcapan")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setUcapan(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section id="doadanucapan" className="p-2 h-screen">
      <div className="ml-[250px]">
        <div>
          <h1 className="font-titleFont text-titleColor text-4xl m-2">Doa dan Ucapan</h1>
        </div>

        {/* Card Ucapan */}
        <div className="grid grid-cols-2 gap-12">
          {ucapan &&
            ucapan.map((item) => (
              <div key={item.id} className="bg-bgDefault pl-12 pr-24 pt-12 pb-24 mx-auto border shadow-lg rounded-md leading-relaxed">
                <div className="font-bold text-xl">{item.nama}</div>
                <div className="text-titleColor">
                  <span className="text-black">di</span> {item.lokasi}
                </div>
                <div className="italic">{item.tanggal}</div>
                <div className="font-semibold mt-4">"{item.pesan}"</div>
              </div>
            ))}
        </div>

        <div className="flex justify-center m-12">
          <button className="bg-[#8CA4B9] py-4 px-6 flex gap-2 rounded-lg text-white m-6 hover:opacity-50">
            <a href="#kirimdoadanucapan">Kirim Do'a dan Ucapan</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoaDanUcapan;
