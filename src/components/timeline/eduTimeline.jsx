import React from "react";
import "./workTimeline.css";

const EduTimeLine = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline">
            <div className="timeline">
              <a className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-globe"></i>
                </div>
                <h3 className="timeline-content-title">
                  Bachelor’s in Computer Application
                </h3>
                <i className="timeline-content-Subtitle">
                  Birla Institute Of Technology, Mesra | (2021-2024)
                </i>
                <p className="timeline-content-description">
                  languages: C++, Java , Python <br />
                  <br /> -database management, web technologies, and software
                  engineering.
                </p>
              </a>
            </div>
            <div className="timeline">
              <a className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <h3 className="timeline-content-title">Intermediate</h3>
                <i className="timeline-content-Subtitle">
                  Royal Global School, Assam(2019-2021)
                </i>
                <p className="timeline-content-description"></p>
              </a>
            </div>
            <div className="timeline">
              <a className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <h3 className="timeline-content-title">Matriculation</h3>
                <i className="timeline-content-Subtitle">
                  Assam Valley School, Assam(-2019)
                </i>
                <p className="timeline-content-description"></p>
              </a>
            </div>
            <div className="timeline">
              <a className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-globe"></i>
                </div>
                <h3 className="timeline-content-title">
                  React Developer Professional Certification
                </h3>
                <i className="timeline-content-Subtitle"> Meta(2024)</i>
                <p className="timeline-content-description">
                  • React.js <br />
                  <br /> • Jest Framework
                  <br />
                  <br /> • User Experience Design
                  <br />
                  <br /> • Unix Commands
                </p>
              </a>
            </div>
            <div className="timeline">
              <a className="timeline-content">
                <div className="timeline-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <h3 className="timeline-content-title">
                  W3C Front End Web Developer Certification
                </h3>
                <i className="timeline-content-Subtitle">W3Schools</i>
                <p className="timeline-content-description">
                  Certification Includes: <br />
                  <br />• Certified HTML Developer
                  <br />
                  <br /> • Certified CSS Developer <br />
                  <br /> • Certified JavaScript Developer <br />
                  <br />• Certified Front-End Developer{" "}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduTimeLine;
