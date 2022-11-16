import React, { useState } from "react";
import Date from "./Date";

const KirimUcapan = () => {
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [tanggal, setTanggal] = useState("jsonStr");
  const [pesan, setPesan] = useState("");
  const [validation, setValidation] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    const doadanucapan = { id, nama, alamat, email, pesan };

    // send data to json
    fetch("http://localhost:8000/kartuUcapan", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(doadanucapan),
    })
      .then((res) => {
        alert("Pesan telah tersimpan");
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
          <h1 className="font-titleFont text-titleColor text-4xl m-2">Doa dan Ucapan</h1>
        </div>

        <div>
          <h4>Tuliskan sesuatu ucapan berupa harapan ataupun doa untuk kedua mempelai.</h4>
        </div>

        <form className="container flex flex-col" onSubmit={handlesubmit}>
          {/* Input Id */}
          <input value={id} disabled="disabled" className="hidden"></input>

          {/* Input Nama */}
          <label>Nama</label>
          <div>
            <input maxLength={50} type="text" required value={nama} onMouseDown={(e) => setValidation(true)} onChange={(e) => setNama(e.target.value)} className="bg-white border-2" placeholder="Tulis nama lengkap"></input>
            <br />
            {nama.length == 0 && validation && <span className="text-red">Masukan nama</span>}
          </div>

          {/* Input Alamat */}
          <label>Alamat</label>
          <div>
            <input maxLength={50} type="text" required value={alamat} onMouseDown={(e) => setValidation(true)} onChange={(e) => setAlamat(e.target.value)} className="bg-white border-2" placeholder="Alamat anda"></input>
            <br />
            {alamat.length == 0 && validation && <span className="text-red">Masukan alamat</span>}
          </div>

          {/* Input Email */}
          <label>Email</label>
          <div>
            <input maxLength={50} type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white border-2" placeholder="Alamat email (optional)"></input>
          </div>

          {/* Input Tanggal */}
          <input value={tanggal} disabled="disabled" onChange={(e) => setTanggal(e.target.value)} className="hidden" />
          <Date />

          {/* Input Pesan */}
          <label>Pesan</label>
          <div>
            <input
              maxLength={250}
              type="text"
              required
              value={pesan}
              onMouseDown={(e) => setValidation(true)}
              onChange={(e) => setPesan(e.target.value)}
              className="bg-white border-2"
              placeholder="Tuliskan ucapan atau doa untuk kedua mempelai"
            ></input>
            <br />
            {pesan.length == 0 && validation && <span className="text-red">Masukan pesan</span>}
          </div>

          <div>
            <button type="submit">Kirim</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default KirimUcapan;
