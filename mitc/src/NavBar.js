import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="title">
          <img className="logo" src="mitc.png"></img>
          <h1 className="mitc-title">Museum In the Classroom</h1>
        </div>
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/process" className="link">
            Process
          </Link>
          <Link to="/study" className="link">
            Study
          </Link>
        </div>
      </div>
    </>
  );
}
