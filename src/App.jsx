// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
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
import "./App.css";

function App() {
  const [theme] = uselocalstorage("theme", "light");
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <HelloLoader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="app" data-theme={theme}>
          {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
          <NavBar />

          <section className="hero-section" id="home">
            <svg width="100%" height="24vh" position="absolute">
              <text x="50%" y="50%">
                MANISH BORAH
              </text>
            </svg>
            <AnimatedSection>
              <div className="hero-content">
                <h2 className="hero-subTittle">
                  A design-minded <span>Front-End Developer</span>
                  <br /> focused on building beautiful interfaces & experiences.
                </h2>
              </div>
            </AnimatedSection>
          </section>
          <section className="about-section">
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
                  <h3></h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, quidem fugit voluptates maxime ab adipisci
                    doloribus
                  </p>
                </div>
                <div className="box box-2" style={{gridArea: "box-2"}}>
                  <h1>LOCATION</h1>
                </div>
                <div className="box box-3" style={{gridArea: "box-3"}}>
                  <AnimatedStats />
                </div>
                <div className="box box-4" style={{gridArea: "box-4"}}>
                  {/* -----------TABS---------- */}
                  <TabSwitch />
                  {/* -----------TABS---------- */}
                </div>
                <div
                  className="box box-5 "
                  style={{
                    gridArea: "box-5",
                    overflow: "hidden",
                  }}
                >
                  <SkillGrid />
                </div>
              </div>
            </AnimatedSection>
          </section>
          {/*
      <section className="project-section">
        <AnimatedSection>
          <h2 className="section-title">PROJECTS</h2>
        </AnimatedSection>
        <AnimatedSection>
          <ProjectGrid />
        </AnimatedSection>
      </section>
      <section className="contact-section">
        <AnimatedSection></AnimatedSection>
      </section> */}
        </div>
      )}
    </>
  );
}

export default App;
