import "./Home.css";
import Person from "./Person";
import { useState } from "react";
import Polygon from "./Polygon";

export default function Home() {
  const [onTeacherView, setOnTeacherView] = useState(true);
  const teacherDescription = `Based on students’ age, teachers can select from different
  museum experiences with artifacts that can be easily linked to
  items commonly found in a classroom. Teachers can customize
  artifact descriptions, as well as reinforcement questions, with
  the help of AI.`;
  const studentDescription = `When students open MITC, the artifacts appear right in front of them. Each artifact will be accompanied with a description, personalized chatbot and trivia-type question, where they can make observations and learn about the artifact in-depth.`;
  const handleClick = () => {
    setOnTeacherView(!onTeacherView);
  };
  return (
    <>
      <div className="main">
        <div className="top">
          <div>
            <h1>
              Turning Classrooms into <span className="yellow">Museums</span>
            </h1>
            <p>
              In today’s digital-oriented world, the traditional classroom setup
              often fails to capture students' attention and stimulate their
              curiosity. We aim to leverage augmented reality (AR) and
              artificial intelligence (AI) to turn museums to increase classroom
              engagement.
            </p>
          </div>
          <div>
            <img className="ipad" src="AR.png"></img>
          </div>
        </div>

        <div className="how-it-works">
          <h2>How it Works</h2>
          <div className="card">
            <div className="card-content">
              <h2>{onTeacherView ? "For Teachers" : "For Students"}</h2>
              <p>{onTeacherView ? teacherDescription : studentDescription}</p>
            </div>

            <div className="card-right">
              <img
                className="ipad"
                src={onTeacherView ? "teacher.png" : "student.png"}
              ></img>
              <div className="arrows">
                <button
                  onClick={handleClick}
                  disabled={onTeacherView}
                  hidden={onTeacherView}
                >
                  <img src="left-arrow.png"></img>
                </button>
                <button
                  onClick={handleClick}
                  disabled={!onTeacherView}
                  hidden={!onTeacherView}
                >
                  <img src="right-arrow.png"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="background"></div>
        <div className="process">
          <h2>Our Process</h2>
          <div className="process-body">
            <div className="process-individual">
              <div className="process-div">
                <img className="process-div-img" src="process.png"></img>
              </div>
              <h3>Our Process</h3>
              <p>Ideating, designing, building, and testing MITC</p>
              <img className="process-img" src="research.jpg"></img>
            </div>
            <div className="process-individual">
              <div className="process-div">
                <img className="process-div-img" src="study.png"></img>
              </div>
              <h3>Study</h3>

              <p>Testing MITC on middle schoolers to gauge effectiveness</p>

              <img className="process-img" src="jls-study.png"></img>
            </div>
          </div>
        </div>

        <div className="team">
          <h2>Team</h2>
          <div className="team-body">
            <Person
              image="carina.jpg"
              name="Carina Ly"
              role="Principal Investigator"
            />
            <Person
              image="eleanor.JPEG"
              name="Eleanor Peng"
              role="Research Assistant"
            />
            <Person
              image="grace.jpg"
              name="Grace Howe"
              role="Research Assistant"
            />
            <Person
              image="anthony.jpg"
              name="Anthony Qin"
              role="Research Assistant"
            />
            <Person
              image="katie.jpg"
              name="Katie Liu"
              role="Research Assistant"
            />
            <Person
              image="andrea.png"
              name="Andrea Cuadra"
              role="Postdoctoral Mentor"
            />
            <Person image="alan.png" name="Alan Cheng" role="PhD Mentor" />
            <Person image="james.png" name="James Landay" role="Advisor" />
          </div>
        </div>
        <div className="acknowledgement">
          <h2>Acknowledgements</h2>
          <div className="acknowledgement-body">
            <img className="logos" src="accelerator.png"></img>
            <img className="logos" src="HAI.png"></img>
            <img className="logos" src="HCI.png"></img>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>© 2024 Museum In the Classroom. All Rights Reserved. </p>
      </div>
    </>
  );
}
