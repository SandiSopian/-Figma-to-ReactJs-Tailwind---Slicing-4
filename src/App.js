import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Mempelai from "./components/Mempelai";
import CeritaCinta from "./components/CeritaCinta";
import Undangan from "./components/Undangan";
import Lokasi from "./components/Lokasi";
import PhotoGaleri from "./components/PhotoGaleri";
import DoaDanUcapan from "./components/DoaDanUcapan";
import KirimUcapan from "./components/KirimUcapan";

function App() {
  return (
    <div className="bg-bgSidebar flex p-0">
      <div className="lg:w-4/12 fixed ">
        <Sidebar />
      </div>
      <div className="lg:w-8/12 flex-grow lg:ml-96">
        <Home />
        <Mempelai />
        <CeritaCinta />
        <Undangan />
        <Lokasi />
        <PhotoGaleri />
        <DoaDanUcapan />
        <KirimUcapan />
      </div>
    </div>
  );
}

export default App;
