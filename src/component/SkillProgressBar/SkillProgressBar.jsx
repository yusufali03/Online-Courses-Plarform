import React from "react";
import "./SkillProgressBar.scss";

const SkillProgressBar = ({ label =label, percentage = percentage }) => {
    return (
        <div className="skill-progress-bar">
            <div className="skill-header">
                <h3 className="skillTitle">{label}</h3>
                <span>{percentage}%</span>
            </div>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillProgressBar;
