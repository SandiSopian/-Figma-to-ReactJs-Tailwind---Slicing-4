import React, { useEffect } from "react";
import bgHome from "../assets/home-img.jpg";
import logoMail from "../assets/mail.svg";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="fixed">
        <img src={bgHome} alt="Background Home" className="relative" />
      </div>

      <div className="w-[772px] h-[772px] absolute flex flex-col justify-center text-center items-center leading-loose">
        <h1 className="text-8xl font-titleFont opacity-70">Rika & Yuuta</h1>
        <h4 className="font-textFont text-xl mt-7">Akan segera melaksanakan pernikahan</h4>
        <h4 className="font-textFont text-[#5A4424] text-2xl font-bold">Sabtu, 02 Desember 2022</h4>
      </div>

      <div className="fixed">
        <div className="w-[772px] h-[1172px] absolute flex justify-center text-center items-center leading-loose">
          <Countdown />
        </div>
      </div>

      <div className="fixed">
        <div className="w-[772px] h-[1372px] absolute flex justify-center text-center items-center">
          <span className="bg-[#8CA4B9] flex justify-center text-center items-center leading-loose gap-2 py-3 px-4 border-2 rounded-lg border-white text-white font-textFont italic">
            <img src={logoMail} alt="logo" />
            <span>Kirim Undangan</span>
          </span>
        </div>
      </div>
    </div>
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
      <div id="countdown" className="section-padding bg-img bg-fixed" data-background="images/banner-1.jpg">
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-12">
              <ul className="flex gap-10">
                <li className="bg-white py-4 px-6 rounded-md shadow-lg opacity-50 font-bold">
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
        </div>
      </div>
    );
  }
};

export default Home;
