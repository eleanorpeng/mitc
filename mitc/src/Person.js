import "./Person.css";

export default function Person(props) {
  return (
    <>
      <div className="member">
        <img src={props.image} className="headshot"></img>
        <p className="name">
          <a href={props.link}>{props.name}</a>
        </p>
        <p>{props.role}</p>
      </div>
    </>
  );
}
