// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import uselocalstorage from "use-local-storage";

import AnimatedSection from "./utils/animatedSection";
import AnimatedStats from "./components/XPCounter/animatedStats";
import WorkTimeline from "./components/timeline/worktimeline";
import EduTimeline from "./components/timeline/eduTimeline";
import SkillGrid from "./components/SkillGrid/skillGrid";
import ProjectGrid from "./components/prgjectGrid/projectGrid";

import "./App.css";

function App() {
  const [theme] = uselocalstorage("theme", "light");
  return (
    <div className="app" data-theme={theme}>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <section className="hero-section" id="home">
        <div className="hey">
          Hey there <span className="waving-hand">👋</span>
        </div>
        <AnimatedSection>
          <div className="hero-content">
            <div className="hero-Tittle">
              <h2 className="hero-subTittle">I'm</h2>
              <svg width="100%">
                <text x="50%" y="50%">
                  MANISH BORAH
                </text>
              </svg>
            </div>
            <h2 className="hero-subTittle">
              A design-minded <span>Front-End Developer</span>
              <br /> focused on building beautiful interfaces & experiences.
            </h2>
          </div>
        </AnimatedSection>
      </section>
      <section className="about-section">
        <AnimatedSection>
          <div className="animateLineBox">
            <h2 className="section-title  ">About Me</h2>
            <div className="animated-line aboutLine"></div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div class="grid">
            <div className="box " style={{gridArea: "box-1"}}>
              <h3>1 Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, quidem fugit voluptates maxime ab adipisci doloribus
                itaque placeat facilis repellat aperiam. Saepe nesciunt ex
                laborum quo nihil officiis? Recusandae, velit!
              </p>
            </div>
            <div className="box " style={{gridArea: "box-2"}}>
              <h1>LOCATION</h1>
            </div>
            <div className="box " style={{gridArea: "box-3"}}>
              <AnimatedStats />
            </div>
            <div className="box " style={{gridArea: "box-4"}}>
              <div className="tabs">
                <div className="tab-2">
                  <label htmlFor="tab2-1">One</label>
                  <input
                    id="tab2-1"
                    name="tabs-two"
                    type="radio"
                    defaultChecked
                  />
                  <div className="tab-containt work">
                    <WorkTimeline />
                  </div>
                </div>
                <div className="tab-2">
                  <label htmlFor="tab2-2">Two</label>
                  <input id="tab2-2" name="tabs-two" type="radio" />
                  <div className="tab-containt education">
                    <EduTimeline />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="box "
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
      </section>
    </div>
  );
}

export default App;
