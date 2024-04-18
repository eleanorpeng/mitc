import "./Content.css";
import useWindowDimensions from "./useWindowDimensions";

export default function ProgressContent(props) {
  const { height, width } = useWindowDimensions();
  return (
    <div className="slide" style={{ height: height - 155 }}>
      <div
        className="slide-content"
        style={{ height: height - 10, width: width - 300 }}
      >
        <div className="slide-content-left">
          <div className="slide-title">
            <div className="circle">
              <h1>{props.number}</h1>
            </div>
            <h1>{props.title}</h1>
          </div>

          <p>{props.description}</p>
          <p>{props.description2}</p>
          <p>{props.description3}</p>
        </div>
        <div className="slide-content-right">
          <img src={props.img}></img>
        </div>
      </div>
    </div>
  );
}
