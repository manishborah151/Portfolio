import React from "react";
import "./workTimeline.css";

const workTimeline = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline">
            <div className="timeline">
              <a className="timeline-content ">
                <div className="timeline-icon">
                  <i className="fa fa-globe"></i>
                </div>
                <h3 className="timeline-content-title">FullStack Developer</h3>
                <i className="timeline-content-Subtitle">
                  The Clan, Noida | May,2024-Present
                </i>
                <p className="timeline-content-description">
                  • Developed and managed web application using ReactJs,
                  ExpressJs,MangoDB,NodeJs to ensure improved code quality and
                  long-term maintainability.
                  <br /> <br />• Developed the frontend code base to vite.
                  <br /> <br /> • Implemented React router to establish
                  protected routes for login pages and admin dashboards, for
                  industry standard user access control and system security{" "}
                </p>
              </a>
            </div>
            <div className="timeline">
              <a className="timeline-content ">
                <div className="timeline-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <h3 className="timeline-content-title">Front-End Developer</h3>
                <i className="timeline-content-Subtitle">
                  Ravi Pratap Singh Studio, Mumbai | April,2025-Present
                </i>
                <p className="timeline-content-description">
                  • Engineered an API in Express and Node.js, enabling seamless
                  data retrieval from MySQL database, resulting in a reduction
                  in front end loading time, improving user experience.
                  <br />
                  <br /> • Developed a chat-based AI bot that helps users search
                  for products across the site. This bot will also help users by
                  allows virtual clothing try on feature(under development).It
                  uses AR 3D modeling and AI to create virtual garments try on.
                </p>
              </a>
            </div>
            <div className="timeline">
              <a className="timeline-content ">
                <div className="timeline-icon">
                  <i className="fa fa-globe"></i>
                </div>
                <h3 className="timeline-content-title">Wix Developer Intern</h3>
                <i className="timeline-content-Subtitle">
                  Begin, Delhi | Feb,2023-April,2023
                </i>
                <p className="timeline-content-description">
                  • Updated the brands landing page according to requirement and
                  specifications of the design team.
                  <br /> <br />• Developed using Wix Studio builder.
                </p>
              </a>
            </div>
            <div className="timeline">
              <a className="timeline-content ">
                <div className="timeline-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <h3 className="timeline-content-title">
                  Front-End developer Intern
                </h3>
                <i className="timeline-content-Subtitle">
                  Micro1 | Dec,2022-Feb,2023
                </i>
                <p className="timeline-content-description">
                  • Frontend development using NextJs for improving user
                  interfaces.
                  <br /> <br /> • Updating product catalog UI, shopping cart UI
                  and improved site wide search, filtering and sorting.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default workTimeline;
