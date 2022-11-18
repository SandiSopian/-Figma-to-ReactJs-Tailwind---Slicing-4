import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Date from "./Date";

const KirimUcapan = () => {
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [tanggal, setTanggal] = useState("jsonStr");
  const [pesan, setPesan] = useState("");
  const [kehadiran, setKehadiran] = useState("hadir");
  const [validation, setValidation] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    const doadanucapan = { id, nama, alamat, email, pesan, kehadiran };

    // send data to json
    fetch("http://localhost:8000/kartuUcapan", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(doadanucapan),
    })
      .then((res) => {
        alert("Pesan telah tersimpan");
        <div></div>;
        window.location.href = "#doadanucapan";
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("err.message");
      });
  };

  return (
    <section id="kirimdoadanucapan" className="bg-bgDefault h-screen p-2">
      <div className="ml-[250px]">
        <div>
          <h1 className="font-titleFont text-titleColor text-4xl m-2">Kirim Do'a dan Ucapan</h1>
        </div>

        <div className="mb-1">
          <h4>Tuliskan sesuatu ucapan berupa harapan ataupun doa untuk kedua mempelai.</h4>
        </div>

        <form className="container flex flex-col" onSubmit={handlesubmit}>
          {/* Input Id */}
          <input value={id} disabled="disabled" className="hidden"></input>
          {/* Input Nama */}
          <label>Nama</label>
          <div>
            <input maxLength={50} type="text" required value={nama} onMouseDown={(e) => setValidation(true)} onChange={(e) => setNama(e.target.value)} className="bg-white border-2 p-2 w-[300px]" placeholder="Tulis nama lengkap"></input>
          </div>
          {/* Input Alamat */}
          <label>Alamat</label>
          <div>
            <input maxLength={25} type="text" required value={alamat} onMouseDown={(e) => setValidation(true)} onChange={(e) => setAlamat(e.target.value)} className="bg-white border-2 p-2 w-[300px]" placeholder="Alamat anda"></input>
          </div>
          {/* Input Email */}
          <label>Email</label>
          <div>
            <input maxLength={100} type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white border-2 p-2 w-[300px]" placeholder="Alamat email (optional)"></input>
          </div>
          {/* Input Tanggal */}
          <input value={tanggal} disabled="disabled" onChange={(e) => setTanggal(e.target.value)} className="hidden"></input>
          {/* Input Pesan */}
          <label>Pesan</label>
          <div>
            <textarea
              maxLength={350}
              type="text"
              required
              value={pesan}
              onMouseDown={(e) => setValidation(true)}
              onChange={(e) => setPesan(e.target.value)}
              className="bg-white border-2 p-2 w-[600px] h-full"
              placeholder="Tuliskan ucapan atau doa untuk kedua mempelai"
            ></textarea>
          </div>
          {/* Input Kehadiran */}
          <div className="mt-2 leading-loose">
            <label>Apakah anda akan hadir memenuhi undangan saya?</label>
            <div className="flex gap-24">
              <div>
                <input type="radio" id="hadir" name="radioGroup" value={kehadiran === "hadir"} onChange={(e) => setKehadiran(e.target.value)} />
                <label for="hadir"> Saya akan hadir</label>
              </div>
              <div>
                <input type="radio" id="tidakhadir" name="radioGroup" value={kehadiran === "tidak hadir"} onChange={(e) => setKehadiran(e.target.value)} />
                <label for="tidakhadir"> Belum bisa hadir</label>
              </div>
            </div>
          </div>
          <div className="-ml-6 mb-8">
            <button type="submit" className="bg-[#8CA4B9] py-4 px-16 flex gap-2 rounded-lg text-white m-6 hover:opacity-50">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default KirimUcapan;
