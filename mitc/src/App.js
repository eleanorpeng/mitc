import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Process from "./Process";
import Study from "./Study";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/process" element={<Process />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </div>
  );
}

export default App;
