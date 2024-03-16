import "./Polygon.css";
export default function Polygon() {
  return (
    <svg
      className="polygon-background"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon className="polygon-shape" points="0,0 100,0 100,100" />
      {/* <polygon className="polygon-shape" points="0,50 50,100 100,50" /> */}
    </svg>
  );
}
