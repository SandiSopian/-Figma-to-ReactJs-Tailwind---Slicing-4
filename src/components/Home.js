import React, { useEffect } from "react";
import logoMail from "../assets/mail.svg";

const Home = () => {
  return (
    <section id="home">
      <div className="h-screen overflow-hidden bg-img bg-cover flex flex-col">
        <div className="flex flex-col justify-center text-center items-center mt-36 ml-36">
          <h1 className="text-8xl lg:text-9xl font-titleFont opacity-70">Rika & Yuuta</h1>
          <h4 className="font-textFont text-xl mt-7 lg:text-white">Akan segera melaksanakan pernikahan</h4>
          <h4 className="font-textFont text-[#5A4424] lg:text-white text-2xl font-bold">Sabtu, 02 Desember 2022</h4>
        </div>

        <div className="flex justify-center text-center items-center ml-36 -mt-12">
          <Countdown />
        </div>

        <div className="flex justify-center ml-36 mt-8">
          <span className="bg-[#8CA4B9] flex justify-center text-center items-center gap-2 py-3 px-4 border-2 rounded-lg border-white text-white font-textFont italic">
            <img src={logoMail} alt="logo" />
            <span>Buka Undangan</span>
          </span>
        </div>
      </div>
    </section>
  );

  // Function untuk menghitung waktu mundur
  function Countdown() {
    useEffect(() => {
      (function () {
        const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
        let birthday = "Dec 02, 2022 00:00:00",
          countDown = new Date(birthday).getTime(),
          x = setInterval(function () {
            let now = new Date().getTime(),
              distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / day);
            document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
            document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
            document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

            //do something later when date is reached
            if (distance < 0) {
              let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");

              headline.innerText = "It's our wedding!";
              countdown.style.display = "none";
              content.style.display = "block";

              clearInterval(x);
            }
            //seconds
          }, 0);
        return null;
      })();
    }, []);
    return (
      <div>
        <div className="row">
          <ul className="flex gap-10 mt-24">
            <li className="bg-white py-4 px-6  rounded-md shadow-lg opacity-50 font-bold">
              <span id="days"></span>
              <p>Hari</p>
            </li>
            <li className="bg-white py-4 px-6 rounded-md shadow-lg opacity-50 font-bold">
              <span id="hours"></span>
              <p>Jam</p>
            </li>
            <li className="bg-white py-4 px-6 rounded-md shadow-lg opacity-50 font-bold">
              <span id="minutes"></span>
              <p>Menit</p>
            </li>
            <li className="bg-white py-4 px-6 rounded-md shadow-lg opacity-50 font-bold">
              <span id="seconds"></span>
              <p>Detik</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Home;
