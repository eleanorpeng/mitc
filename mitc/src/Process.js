import { React } from "react";
import "./Process.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useWindowDimensions from "./useWindowDimensions";
import "swiper/css/scrollbar";
import Footer from "./Footer";
import ProgressContent from "./Content";

export default function Process() {
  const { height, width } = useWindowDimensions();
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="swiper"
      >
        {/* <SwiperSlide>
          <div
            className="slide"
            style={{ height: height - 155, backgroundColor: "white" }}
          >
            <h1>Our Process</h1>
            <p>
              Within the Stanford HCI Group, research efforts have centered
              around Collaborative AR Learning. Through an extensive literature
              review, the team gained insights from notable papers, recognizing
              the potential of AR technology in creating engaging educational
              experiences. We took this a step further when introduced to the
              possibilities of generative AI and its applications in education.
            </p>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="slide" style={{ height: height - 155 }}>
            <div
              className="slide-content"
              style={{ height: height - 10, width: width - 300 }}
            >
              <div className="slide-content-left">
                <div className="slide-title">
                  <h1>Our Process</h1>
                </div>

                <p style={{ fontSize: "20px" }}>
                  Within the Stanford HCI Group, research efforts have centered
                  around Collaborative AR Learning. Through an extensive
                  literature review, the team gained insights from notable
                  papers, recognizing the potential of AR technology in creating
                  engaging educational experiences. We took this a step further
                  when introduced to the possibilities of generative AI and its
                  applications in education.
                </p>
              </div>
              <div className="slide-content-right">
                <img src="our-process.gif"></img>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <ProgressContent
            number="1"
            title="Objective"
            description="With a major shift to remote learning in recent years, the need for innovative and interactive educational tools has become more prevalent than ever before. Augmented reality (AR) technology and generative artificial intelligence (AI) can revolutionize the way students learn and retain information regardless of their classroom setting. AR technology can make learning more interactive, immersive, and fun for students. It provides a unique solution to enhance classroom engagement by superimposing virtual objects into the classroom - this feature could help bridge the gap between classroom curriculum concepts and real-world applications, allowing students to visualize these concepts in a way that is more memorable than traditional teaching methods. 
"
            img="objective.gif"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProgressContent
            number="2"
            title="Solution"
            description="To address this challenge, we have built Museum in the Classroom (MITC), an educational app that leverages both AI and AR to increase classroom engagement. Educators can list what topics they are currently teaching in the classroom and the app will use these new technologies to display an exhibit filled with artifacts that are related to the inputted topic and can be represented through common classroom items. The app will guide teachers to lightly rearrange the classroom, hoping to emulate a museum experience for students. Then, students will use an iPad to scan the classroom items, which will be associated with the artifacts—students will receive information about them and generative AI-related reinforcement questions to test their understanding."
            img="solution.gif"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProgressContent
            number="3"
            title="Testing"
            description="To start, to test the validity of the project idea, we ran two studies. In our initial pilot study, we worked with three middle school/high school history teachers, two middle school students in the Bay Area, and two high schoolers in Seattle. Once we gathered their feedback, we began designing a mockup on Figma that would eventually be developed into an app. We completed the mockup in July 2023. "
            description2="During this phase, a major challenge we encountered was training ChatGPT to generate relevant artifacts about a subject. When we gave ChatGPT free rein and no constraints, it suggested unrealistic artifacts that could not necessarily be associated with common classroom items. To address this concern, for our classroom study, the team decided to curate our own exhibit based on one in the Cantor Arts Museum on Stanford’s campus. We worked with the museum to find artifacts with similar dimensions and purposes to common items. The beta version was released in September 2023. Since August 2023, we have been closely working with a 7th-grade history classroom in Palo Alto and officially conducted a controlled study with our complete app in November to compare the effectiveness MITC app versus traditional classroom methods."
            img="testing.gif"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProgressContent
            number="4"
            title="Procedure"
            description="The team went onsite to a local middle school to conduct the study with 20 participants, ages 12-13. Participants received an iPad with our app installed on it. The app took them through a museum exhibit about Leland Stanford Jr., the son of the founder of Stanford University, who had collected many interesting trinkets before his early death. Over the course of the study, the participant learned about and engaged with the different historical objects collected by Stanford Jr."
            description2="We first asked participants to complete a pre-survey measuring previous knowledge and general sentiment towards augmented reality and generative artificial intelligence, as well as other metrics. All participants experienced the same condition, in which they learned about half of Leland Stanford Jr.’s artifact collection through the modern condition, which required participants to learn about Stanford Jr. through the app, and the other half through the traditional condition, where students learned about the museum topic through written papers. "
            img="research.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
}
