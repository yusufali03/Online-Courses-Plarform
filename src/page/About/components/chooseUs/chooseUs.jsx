import React from 'react';
import "./chooseUs.scss";
import line from "../../../../assests/images/bottom_line.svg";
import chooseImg from "../../../../assests/images/choose-image-shape.svg";
import chooseGril from "../../../../assests/images/choose1.webp";
import shape3 from "../../../../assests/images/shape3.svg";
import shape5 from "../../../../assests/images/shape5.svg";
import shape4 from "../../../../assests/images/shape4.svg";
import shape6 from "../../../../assests/images/shape6.svg";
import shape7 from "../../../../assests/images/shape7.svg";
import SkillProgressBar from "../../../../component/SkillProgressBar/SkillProgressBar";

const ChooseUs = () => {
    const Skill = [
        {
            label:"Skill Mastery Levels\n",
            percentage:"90"
        },
        {
            label:"Learning Milestones\n",
            percentage:"92"
        },
        {
            label:"Digital Proficiency Journey\n",
            percentage:"92"
        }
    ]
    return (
        <div className="chooseUs">
            <div className="container">
                <div className="flexs">
                    <div className="chooseUs_colChoose">
                        <div className="globalTitle">Why Choose Us</div>
                        <h2 className="chooseUs_colChoose_titleChoose">
                            One Platform & Many <br/> <span
                            className="chooseUs_colChoose_titleChoose_colorChoose"> Courses <img
                            className="chooseUs_colChoose_titleChoose_colorChoose_lineChoose" src={line}
                            alt=""/></span> For You
                        </h2>
                        <p style={{color: "#555"}}>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            an unknown </p>
                        {Skill.map((skill, index) => (
                            <SkillProgressBar
                                key={index}
                                label={skill.label}
                                percentage={skill.percentage}
                            />
                        ))}                    </div>
                    <div className="chooseUs_colChoose">
                        <div className="chooseUs_colChoose_backgroundChoose">
                            <img className="grils" src={chooseGril} alt="choose-gril"/>
                            <div className="chooseUs_colChoose_backgroundChoose_bgshape">
                                <img src={chooseImg} alt="choose-img"/>
                            </div>
                            <div className="chooseUs_colChoose_backgroundChoose_bgshape4">
                                <img src={shape4} alt="choose-img"/>
                            </div>
                            <div className="chooseUs_colChoose_backgroundChoose_bgshape5">
                                <img src={shape5} alt="choose-img"/>
                            </div>
                            <div className="chooseUs_colChoose_backgroundChoose_bgshape6">
                                <img src={shape6} alt="choose-img"/>
                            </div>
                            <div className="chooseUs_colChoose_backgroundChoose_bgshape7">
                                <img src={shape7} alt="choose-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chooseUs_shape3">
                <img style={{maxWidth:"60px"}} src={shape3} alt=""/>
            </div>
        </div>
    );
};

export default ChooseUs;