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
    <div className="h-[650px] overflow-hidden">
      <div className="flex fixed">
        <div className="lg:bg-bgSidebar">
          <Sidebar />
        </div>

        <div className="overflow-y-scroll h-screen">
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
    </div>
  );
}

export default App;
