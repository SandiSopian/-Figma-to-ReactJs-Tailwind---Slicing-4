import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Mempelai from "./components/Mempelai";

function App() {
  return (
    <div className="flex">
      <div className="bg-bgSidebar w-2/12 fixed">
        <Sidebar />
      </div>
      <div className="flex flex-col w-10/12 flex-grow ">
        <Home />
        <Mempelai />
      </div>
    </div>
  );
}

export default App;
