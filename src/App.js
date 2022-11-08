import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex">
      <div className="bg-bgSidebar">
        <Sidebar />
      </div>
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
