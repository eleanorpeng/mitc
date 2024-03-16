import "./Person.css";

export default function Person(props) {
  return (
    <>
      <div className="member">
        <img src={props.image} className="headshot"></img>
        <p className="name">{props.name}</p>
        <p>{props.role}</p>
      </div>
    </>
  );
}
