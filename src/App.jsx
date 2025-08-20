// import reactLogo from "./assets/react.svg";
import Locationicon from "./assets/icons/location.gif";
import uselocalstorage from "use-local-storage";
import React, {useState} from "react";
import HelloLoader from "./components/pageLoader/HelloLoader";
import NavBar from "./components/navbar/navBar";
import AnimatedSection from "./utils/animatedSection";
import AnimatedStats from "./components/XPCounter/animatedStats";
import WorkTimeline from "./components/timeline/worktimeline";
import EduTimeline from "./components/timeline/eduTimeline";
import SkillGrid from "./components/SkillGrid/skillGrid";
import ProjectGrid from "./components/prgjectGrid/projectGrid";
import TabSwitch from "./components/TabSwitch/tabSwitch";
import BlobComponent from "./components/VantaBackground/BlobBackground";
import "./App.css";

function App() {
  const [theme] = uselocalstorage("theme", "light");
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <HelloLoader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="app" data-theme={theme}>
          <BlobComponent />
          {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
          <NavBar />
          <section className="hero-section" id="Home">
            <svg width="100%" height="24vh" position="absolute">
              <text x="50%" y="50%">
                MANISH BORAH
              </text>
            </svg>
            <AnimatedSection>
              <div className="hero-content">
                <h2 className="hero-subTittle">
                  A creative <span>Front-End Developer</span> with{" "}
                  <span>3+ years</span> of experience in
                  <br /> building beautiful interfaces & experiences.
                </h2>
              </div>
            </AnimatedSection>
            <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
          </section>
          <section className="about-section" id="About">
            <AnimatedSection>
              <div class="grid">
                <div
                  className="box box-1"
                  style={{
                    gridArea: "box-1",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p>
                    Specialized in creating seamless and intuitive user
                    experiences.
                  </p>
                </div>
                <div className="box box-2" style={{gridArea: "box-2"}}>
                  <i className="icon"><img src={Locationicon} alt="location" /></i>
                  <h1>Delhi NCR, India</h1>
                </div>
                <div className="box box-3" style={{gridArea: "box-3"}}>
                  <AnimatedStats />
                </div>

                <div
                  className="box box-4 "
                  style={{
                    gridArea: "box-4",
                    overflow: "hidden",
                  }}
                >
                  <SkillGrid />
                </div>
              </div>
            </AnimatedSection>
          </section> 
          <section className="project-section">
            <AnimatedSection>
              <h2 className="section-title">PROJECTS</h2>
            </AnimatedSection>
            <AnimatedSection>
              <ProjectGrid />
            </AnimatedSection>
          </section>
        
      <section className="contact-section">
        <AnimatedSection> 
          <h2 className="contact-Tittle">CONTACT ME</h2>
          <div className="contact-description">
            <i> <a href="" className="contctBtn " >manishborah151@gmail.com</a></i>
            <i> <a href="" className="contctBtn ">+91 6001419617</a></i>
          
          </div>
        </AnimatedSection>

      </section> 
        </div>
      )}
    </>
  );
}

export default App;
