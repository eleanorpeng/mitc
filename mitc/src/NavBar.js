import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="title">
          <img className="logo" src="mitc.png"></img>
          <h1 className="mitc-title">Museum In the Classroom</h1>
        </div>
        <div className="links">
          <button className="btn">Home</button>
          <button className="btn">Process</button>
          <button className="btn">Study</button>
        </div>
      </div>
    </>
  );
}
