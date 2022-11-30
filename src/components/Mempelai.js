import React from "react";
import bismillah from "../assets/bismillah-img.png";
import profile1 from "../assets/Ellipse1.png";
import profile2 from "../assets/Ellipse2.png";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import "animate.css";

const Mempelai = () => {
  return (
    <section id="mempelai" className="bg-bgDefault sm:pb-10 md:p-16 lg:py-20 lg:-ml-8 xl:ml-0">
      <div className="flex flex-col justify-center text-center items-center">
        <div>
          <img src={bismillah} alt="logo bismillah" className="w-[80%] md:w-[70%] xl:w-[60%] -mt-6 md:-mt-16 lg:-mt-24 xl:-mt-28 ml-8 sm:ml-16 md:ml-24 xl:ml-48" />
        </div>

        <div className=" justify-center leading-loose text-md lg:text-xl -mt-6 sm:mt-0 xl:mt-2">
          <p className="xl:-mt-12">Assalamualaikum Warahmatullah Wabarakatuh</p>
          <p className="lg:mt-2">Dengan Rahmat Allah yang Maha Kuasa </p>
          <p>InsyaAllah kami akan melangsungkan pernikahan</p>
          <p>pada: </p>
          <p className="text-[#5A4424] font-bold lg:m-2">Sabtu, 02 Desember 2022</p>
        </div>
      </div>

      <div className="lg:ml-6 xl:ml-12 md:gap-6 sm:mt-2 flex flex-col sm:flex-row flex-shrink items-center justify-evenly">
        <div className="animate__animated animate__fadeInLeft">
          <div className="flex border my-2 bg-white shadow-md rounded-sm pr-6 py-2 ">
            <div className="w-8/12 flex flex-col m-2 text-end">
              <p className="font-semibold font-mono text-xl">Rika Takanashi S.E</p>
              <p className="font-titleFont text-titleColor text-2xl">Rika</p>
              <div className="font-mono">
                <p>Sarjana Ekonomi yang</p>
                <p>berprofesi di bidang property</p>
              </div>
              <div className="flex justify-end gap-6 mt-6">
                <a href="https://www.twitter.com">
                  <img src={twitter} alt="" />
                </a>
                <a href="https://www.instagram.com">
                  <img src={instagram} alt="" />
                </a>
              </div>
            </div>
            <div className="w-4/12">
              <img src={profile1} alt="" />
            </div>
          </div>{" "}
        </div>

        <div className="animate__animated animate__fadeInRight">
          <div className="flex border my-2 bg-white shadow-md rounded-sm pl-6 py-2">
            <div className="w-4/12">
              <img src={profile2} alt="" />
            </div>
            <div className="w-8/12 flex flex-col m-2 text-start">
              <p className="font-semibold font-mono text-xl">Yuuta Hoshi S.E</p>
              <p className="font-titleFont text-titleColor text-2xl">Yuuta</p>
              <div className="font-mono">
                <p>Sarjana Ekonomi yang</p>
                <p>berprofesi di bidang property</p>
              </div>
              <div className="flex justify-start gap-6 mt-6">
                <a href="https://www.instagram.com">
                  <img src={instagram} alt="" />
                </a>
                <a href="https://www.twitter.com">
                  <img src={twitter} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mempelai;
