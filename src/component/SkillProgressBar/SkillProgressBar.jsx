import React from "react";
import "./SkillProgressBar.scss";
import CountUp from "react-countup";

const SkillProgressBar = ({ label =label, percentage = percentage, dataAosRight }) => {
    return (
        <div className="skill-progress-bar">
            <div className="skill-header">
                <h3 className="skillTitle">{label}</h3>

                <span> <CountUp start={0} end={percentage} duration={10} />%</span>
            </div>
            <div className="progress-bar">
                <div
                    data-aos={dataAosRight}
                    className="progress"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillProgressBar;
