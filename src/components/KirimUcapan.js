import React, { useState } from "react";
import moment from "moment/moment";

const KirimUcapan = () => {
  // -------state using Google Sheet API-------
  const [data, setData] = useState({
    id: "",
    nama: "",
    alamat: "",
    email: "",
    tanggal: moment().format("MMMM Do YYYY, h:mm:ss a"),
    pesan: "",
    kehadiran: "hadir",
  });
  const [validation, setValidation] = useState(false);

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const API_KEY = process.env.REACT_APP_GOOGLESHEET_API;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://sheet.best/api/sheets/${API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        alert("Pesan telah tersimpan");
        window.location.href = "#doadanucapan";
        window.location.reload(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // -----state using JSON-SERVER-----
  // const [id, setId] = useState("");
  // const [nama, setNama] = useState("");
  // const [alamat, setAlamat] = useState("");
  // const [email, setEmail] = useState("");
  // const [tanggal, setTanggal] = useState("jsonStr");
  // const [pesan, setPesan] = useState("");
  // const [kehadiran, setKehadiran] = useState("hadir");
  // const [validation, setValidation] = useState(false);

  // -----handlesubmit using JSON-SERVER-----
  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   const doadanucapan = { id, nama, alamat, email, pesan, kehadiran };

  //   // send data to json using JSON-SERVER
  //   fetch("http://localhost:8000/kartuUcapan", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(doadanucapan),
  //   })
  //     .then((res) => {
  //       alert("Pesan telah tersimpan");
  //       <div></div>;
  //       window.location.href = "#doadanucapan";
  //       window.location.reload(false);
  //     })
  //     .catch((err) => {
  //       console.log("err.message");
  //     });
  // };

  return (
    <section id="kirimdoadanucapan" className="bg-bgDefault h-screen px-2 pt-2 pb-0 md:pt-8 lg:pt-4">
      <div>
        <h1 className="font-titleFont text-titleColor text-4xl xl:mx-2 mt-2 sm:mt-4 xl:mt-8 sm:mb-2 md:mb-2 lg:mb-0 ml-4 sm:ml-0 sm:flex lg:flex-none sm:justify-center lg:justify-start">Kirim Do'a dan Ucapan</h1>
      </div>

      <div className="mb-1 md:px-6 lg:px-0">
        <h4>Tuliskan sesuatu ucapan berupa harapan ataupun doa untuk kedua mempelai.</h4>
      </div>

      {/*  -----Form input using Google Sheet API----- */}
      <form className="container flex flex-col md:mt-10 lg:mt-0 xl:mt-8 md:px-6 lg:px-0" onSubmit={handleSubmit}>
        {/* Input Nama */}
        <label>Nama</label>
        <div>
          <input maxLength={50} type="text" required name="nama" value={data.nama} onMouseDown={(e) => setValidation(true)} onChange={handleChange} className="bg-white border-2 p-2 w-[300px]" placeholder="Tulis nama lengkap"></input>
        </div>
        {/* Input Alamat */}
        <label>Alamat</label>
        <div>
          <input maxLength={25} type="text" required name="alamat" value={data.alamat} onMouseDown={(e) => setValidation(true)} onChange={handleChange} className="bg-white border-2 p-2 w-[300px]" placeholder="Alamat anda"></input>
        </div>
        {/* Input Email */}
        <label>Email</label>
        <div>
          <input maxLength={100} type="email" name="email" value={data.email} onChange={handleChange} className="bg-white border-2 p-2 w-[300px]" placeholder="Alamat email (optional)"></input>
        </div>

        {/* Input Pesan */}
        <label>Pesan</label>
        <div>
          <textarea
            maxLength={350}
            type="text"
            name="pesan"
            required
            value={data.pesan}
            onMouseDown={(e) => setValidation(true)}
            onChange={handleChange}
            className="bg-white border-2 p-2 w-[300px] sm:w-[600px] h-full"
            placeholder="Tuliskan ucapan atau doa untuk kedua mempelai"
          ></textarea>
        </div>
        {/* Input Kehadiran */}
        <div className="mt-2 leading-loose">
          <label>Apakah anda akan hadir memenuhi undangan saya?</label>
          <div className="flex gap-24">
            <div>
              <input type="radio" id="hadir" name="kehadiran" value={data.kehadiran === "hadir"} onChange={handleChange} />
              <label htmlFor="hadir"> Saya akan hadir</label>
            </div>
            <div>
              <input type="radio" id="tidakhadir" name="kehadiran" value={data.kehadiran === "tidak hadir"} onChange={handleChange} />
              <label htmlFor="tidakhadir"> Belum bisa hadir</label>
            </div>
          </div>
        </div>
        <div className="-ml-6 mb-8 lg:mb-0">
          <button type="submit" className="bg-[#8CA4B9] py-4 px-16 flex gap-2 rounded-lg text-white m-6 hover:opacity-50">
            Kirim
          </button>
        </div>
      </form>

      {/* -----Form input using JSON-SERVER----- */}
      {/* <form className="container flex flex-col md:scale-110 lg:scale-100 xl:scale-110 md:ml-12 lg:ml-0 xl:ml-16 md:mt-10 lg:mt-0 xl:mt-8" onSubmit={handlesubmit}>
        {/* Input Id */}
      {/* <input value={id} disabled="disabled" className="hidden"></input> */}
      {/* Input Nama */}
      {/* <label>Nama</label>
      <div>
        <input maxLength={50} type="text" required value={nama} onMouseDown={(e) => setValidation(true)} onChange={(e) => setNama(e.target.value)} className="bg-white border-2 p-2 w-[300px]" placeholder="Tulis nama lengkap"></input>
      </div> */}
      {/* Input Alamat */}
      {/* <label>Alamat</label>
      <div>
        <input maxLength={25} type="text" required value={alamat} onMouseDown={(e) => setValidation(true)} onChange={(e) => setAlamat(e.target.value)} className="bg-white border-2 p-2 w-[300px]" placeholder="Alamat anda"></input>
      </div> */}
      {/* Input Email */}
      {/* <label>Email</label>
      <div>
        <input maxLength={100} type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white border-2 p-2 w-[300px]" placeholder="Alamat email (optional)"></input>
      </div> */}
      {/* Input Tanggal */}
      {/* <input value={tanggal} disabled="disabled" onChange={(e) => setTanggal(e.target.value)} className="hidden"></input> */}
      {/* Input Pesan */}
      {/* <label>Pesan</label>
      <div>
        <textarea
          maxLength={350}
          type="text"
          required
          value={pesan}
          onMouseDown={(e) => setValidation(true)}
          onChange={(e) => setPesan(e.target.value)}
          className="bg-white border-2 p-2 w-[300px] sm:w-[600px] h-full"
          placeholder="Tuliskan ucapan atau doa untuk kedua mempelai"
        ></textarea>
      </div> */}
      {/* Input Kehadiran */}
      {/* <div className="mt-2 leading-loose">
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
      </div> */}
      {/* </form> */}
    </section>
  );
};

export default KirimUcapan;
