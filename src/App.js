import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Mempelai from "./components/Mempelai";
import CeritaCinta from "./components/CeritaCinta";
import Undangan from "./components/Undangan";
import Lokasi from "./components/Lokasi";

function App() {
  return (
    <div className="flex">
      <div className="bg-bgSidebar w-2/12 fixed">
        <Sidebar />
      </div>
      <div className="flex flex-col w-10/12 flex-grow ">
        <Home />
        <Mempelai />
        <CeritaCinta />
        <Undangan />
        <Lokasi />
      </div>
    </div>
  );
}

export default App;
