import Footer from "./Footer";
import "./Study.css";
export default function Study() {
  return (
    <>
      <div className="main">
        <div className="study-main">
          <h1>Study</h1>
          <p>
            The team went onsite to a local middle school to conduct the study
            with 20 participants, ages 12-13. Participants received an iPad with
            our app installed on it. The app took them through a museum exhibit
            about Leland Stanford Jr., the son of the founder of Stanford
            University, who had collected many interesting trinkets before his
            early death.
          </p>
          <p>
            During the session, we collected logs through the app by recording
            the screen. We also took notes and video-recorded the entire
            session. The team acted as “moderators” who did not provide any
            guidance unless a participant was completely stuck and could not
            move forward with the study in the allotted time. Afterward, we
            administered a post-survey that gauged app enjoyment and engagement.
            Finally, we released a follow-up assessment two days after the
            session to assess knowledge retention. Both types of participants
            had the same assessment on all of the artifacts—it included a mix of
            multiple-choice and written-response questions that covered all six
            artifacts.
          </p>
        </div>
        <div className="background"></div>
        <div className="finding-section">
          <div className="finding">
            <h1>Here's what we found</h1>
            <h2>Students are enthusiastic about AR technology</h2>
            <p>
              Overall, the data suggests students are enthusiastic about using
              AR technology for learning, as interactive 3D visualizations make
              complex ideas and artifacts more accessible (Figure 1).
            </p>
            <div className="study-content">
              <div className="study-content-container">
                <img src="favorite.png"></img>
                <label>Figure 1</label>
              </div>
              <div className="study-content-container">
                <img src="preference.png"></img>
                <label>Figure 2</label>
              </div>
            </div>
            <p>
              The strong preference for AR apps over textbooks correlates to the
              desire to keep using MITC (Figure 2). This demonstrates clear
              student engagement with the interactive and immersive nature of AR
              for history learning specifically.
            </p>
          </div>
          <div className="finding">
            <h2>Museum experience is irreplaceable</h2>
            <p>
              It is important to acknowledge that while AR applications cannot
              fully substitute the experience of physically visiting museums,
              they significantly augment engagement levels, bolster knowledge
              retention, and stimulate a heightened interest in various
              subjects.
            </p>
            <div className="study-content">
              <div>
                <p>
                  Consequently, there exists a compelling rationale for
                  educational applications to aspire towards emulating
                  experiential interactivity on a broader scale. By leveraging
                  AR technology to create dynamic and immersive learning
                  experiences, educators can effectively bridge the gap between
                  traditional classroom instruction and real-world engagement,
                  fostering deeper understanding and appreciation among
                  students.
                </p>
                <h2>Next Steps</h2>
                <p>
                  While we have finished most of the study and building the app,
                  the MITC team could benefit the most from research support, as
                  we are interested in writing an official report/article to
                  publish in a conference or journal. We would also like
                  assistance in building a personalized website that highlights
                  all the accomplishments MITC has been doing so accessing web
                  designers would be helpful. Overall, we want the MITC project
                  to gain more visibility so we can further develop this idea
                  and hear new perspectives. Additionally, we would like to
                  build a website to share our findings with the greater edtech
                  community so others can learn from our idea and are hopefully
                  inspired to implement generative AI and AR into classrooms.
                </p>
              </div>
              <div className="study-content-container">
                <img src="museum.png"></img>
                <label>Figure 3</label>
              </div>
            </div>
          </div>
        </div>
        <button>
          <a href="./Final_Report.pdf" style={{ textDecoration: "none" }}>
            <b>View Report</b>
          </a>
        </button>
        <Footer />
      </div>
    </>
  );
}
