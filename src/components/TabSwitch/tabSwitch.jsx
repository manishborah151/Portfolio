import React, {useState} from "react";
import "./TabSwitch.css";
import WorkTimeLine from "../timeline/worktimeline";
import EduTimeLine from "../timeline/eduTimeline";
const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["WORK", "EDUCATION"];
  const contents = [<WorkTimeLine />, <EduTimeLine />];

  const handleTabClick = (index) => {
    if (index !== activeTab) {
      setActiveTab(index);
    }
  };

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
        <div
          className="active-indicator"
          style={{left: `${activeTab * 50}%`}}
        />
      </div>

      <div className="tab-content-wrapper">
        <div
          className="tab-content-slider"
          style={{transform: `translateX(-${activeTab * 100}%)`}}
        >
          {contents.map((content, index) => (
            <div key={index} className="tab-content">
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabSwitch;
