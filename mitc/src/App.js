import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Polygon from "./Polygon";

function App() {
  return (
    <div className="App">
      {/* <Polygon></Polygon> */}
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
