import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Home.css";
import Person from "./Person";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowDimensions from "./useWindowDimensions";

export default function Home() {
  const { height, width } = useWindowDimensions();

  const [onTeacherView, setOnTeacherView] = useState(true);
  const teacherDescription = `Based on students’ age, teachers can select from different museum experiences with artifacts that can be easily linked to items commonly found in a classroom. Teachers can customize artifact descriptions, as well as reinforcement questions, with the help of AI. We believe that this can accelerate classroom curriculum without the need for additional resources or extensive planning, which can be beneficial for teachers as they may have little time to curate custom learning material. 
  `;
  const studentDescription = `When students open MITC, the artifacts appear right in front of them. Each artifact will be accompanied with a description, personalized chatbot and trivia-type question, where they can make observations and learn about the artifact in-depth.`;
  const handleClick = () => {
    setOnTeacherView(!onTeacherView);
  };

  const [processIsHovering, setProcessIsHovering] = useState(false);
  const [studyIsHovering, setStudyIsHovering] = useState(false);

  const people = [
    {
      id: 0,
      name: "Carina Ly",
      role: "Principal Investigator",
      img: "carina.jpg",
      link: "https://www.linkedin.com/in/lycarina/",
    },
    {
      id: 1,
      name: "Eleanor Peng",
      role: "Research Assistant",
      img: "eleanor.JPEG",
      link: "https://www.linkedin.com/in/eleanorpeng/",
    },
    {
      id: 2,
      name: "Grace Howe",
      role: "Research Assistant",
      img: "grace.jpg",
      link: "https://www.linkedin.com/in/grace-howe-9900a8239/",
    },
    {
      id: 3,
      name: "Anthony Qin",
      role: "Research Assistant",
      img: "anthony.jpg",
      link: "https://www.linkedin.com/in/anthony-qin/",
    },
    {
      id: 4,
      name: "Katie Liu",
      role: "Research Assistant",
      img: "katie.jpg",
      link: "https://www.linkedin.com/in/kliu25/",
    },
    {
      id: 5,
      name: "Andrea Cuadra",
      role: "Postdoctoral Mentor",
      img: "andrea.png",
      link: "https://www.linkedin.com/in/apcuad/",
    },
    {
      id: 6,
      name: "Alan Cheng",
      role: "PhD Mentor",
      img: "alan.png",
      link: "https://studentlearning.stanford.edu/alan-cheng",
    },
    {
      id: 7,
      name: "James Landay",
      role: "Advisor",
      img: "james.png",
      link: "https://www.linkedin.com/in/landay/",
    },
  ];
  return (
    <>
      <div className="main">
        <div className="top">
          <div>
            <h1>
              Turning Classrooms into <span className="yellow">Museums</span>
            </h1>
            <p>
              In today’s digital-oriented world, the need for innovative and
              interactive educational tools has become more prevalent than ever
              before. Augmented reality (AR) technology and generative
              artificial intelligence (AI) have the potential to revolutionize
              the way students learn and retain information regardless of what
              classroom setting they are in. However, there currently is a lack
              of educational apps that leverage AR technology and AI-generated
              artifacts to enhance classroom engagement, as existing educational
              apps often do not have interactive or immersive aspects
              implemented into the app experience. Therefore, there is a need to
              develop an educational app that leverages AR technology and
              AI-generated artifacts to create an interactive learning
              experience that stimulates students' curiosity.
            </p>
          </div>
          <div>
            <img className="ipad" src="AR.png"></img>
          </div>
        </div>

        <div className="how-it-works">
          <h2>How it Works</h2>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="swiper"
          >
            <SwiperSlide>
              <div className="home-slide">
                <div>
                  <h2>For Teachers</h2>
                  <p>
                    Based on students’ age, teachers can select from different
                    museum experiences with artifacts that can be easily linked
                    to items commonly found in a classroom. Teachers can
                    customize artifact descriptions, as well as reinforcement
                    questions, with the help of AI. We believe that this can
                    accelerate classroom curriculum without the need for
                    additional resources or extensive planning, which can be
                    beneficial for teachers as they may have little time to
                    curate custom learning material.
                  </p>
                </div>
                <div>
                  <img
                    style={{ width: "450px" }}
                    src="teacher_cropped.gif"
                  ></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-slide">
                <div>
                  <h2>For Students</h2>
                  <p>
                    When students open MITC, the artifacts appear right in front
                    of them. Each artifact will be accompanied by a description,
                    personalized chatbot, and trivia-type questions, where they
                    can make observations and learn about the artifact in-depth.
                    By providing additional information about these virtual
                    artifacts and generating comprehension questions related to
                    them, the app will help students visualize new history
                    concepts in a way that is more memorable than traditional
                    teaching methods.
                  </p>
                </div>
                <div>
                  <img
                    style={{ width: "450px" }}
                    src="student_cropped.gif"
                  ></img>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="card">
            <div className="card-content">
              <h2>{onTeacherView ? "For Teachers" : "For Students"}</h2>
              <p style={{ fontSize: 22 }}>
                {onTeacherView ? teacherDescription : studentDescription}
              </p>
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
          </div> */}
        </div>
        <div className="background"></div>
        <div className="process">
          <h2>Our Process</h2>
          <div className="process-body">
            <div className="process-individual">
              <div className="process-div">
                <img className="process-div-img" src="process.png"></img>
              </div>
              <h3 style={{ fontSize: 22 }}>Our Process</h3>
              <p style={{ fontSize: 19 }}>
                Ideating, designing, building, and testing MITC
              </p>
              <div
                className="process-button-container"
                onMouseOver={() => setProcessIsHovering(true)}
                onMouseOut={() => setProcessIsHovering(false)}
              >
                <img className="process-img" src="research.jpg"></img>
                {/* {processIsHovering && (
                  <button className="process-button">
                    <Link to="/process">
                      <img src="right-arrow.png"></img>
                    </Link>
                  </button>
                )} */}
                <button className="process-button">
                  <Link
                    to="/process"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src="right-arrow.png"></img>
                  </Link>
                </button>
              </div>
            </div>
            <div className="process-individual">
              <div className="process-div">
                <img className="process-div-img" src="study.png"></img>
              </div>
              <h3 style={{ fontSize: 22 }}>Study</h3>

              <p style={{ fontSize: 18 }}>
                Testing MITC on middle schoolers to gauge effectiveness
              </p>
              <div
                className="process-button-container"
                onMouseOver={() => setStudyIsHovering(true)}
                onMouseOut={() => setStudyIsHovering(false)}
              >
                <img className="process-img" src="jls-study.png"></img>
                <button className="process-button">
                  <Link
                    to="/study"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src="right-arrow.png"></img>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="team">
          <h2>Team</h2>
          <div className="team-body">
            {people.map((person) => {
              return (
                <Person
                  image={person.img}
                  name={person.name}
                  role={person.role}
                  link={person.link}
                />
              );
            })}
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
      <Footer />
    </>
  );
}
