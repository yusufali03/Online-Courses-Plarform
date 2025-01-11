import React from 'react';
import "./style.scss";
import about5 from "../../../../assests/images/about5.webp";
import about6 from "../../../../assests/images/about6.webp";
import line from "../../../../assests/images/bottom_line.svg";
import check from "../../../../assests/images/check.svg";
import awardLogo from "../../../../assests/images/awards-logo.svg";
import videoPlay from "../../../../assests/images/video-play.svg";

const InfoTechMaster = () => {
    return (
        <div className="infoTechMaster">
            <div className="container">
                <div className="infoTechMaster_infoRow">
                    <div className="infoTechMaster_infoRow_infoCol6">
                        <div className="infoTechMaster_infoRow_infoCol6_imageOne">
                            <img src={about5} style={{maxWidth: "445px", borderRadius: "10px"}} alt=""/>
                        </div>
                        <div className="infoTechMaster_infoRow_infoCol6_imageTwo">
                            <img className="infoTechMaster_infoRow_infoCol6_imageTwo_grils" src={about6}  alt=""/>
                        </div>
                    </div>
                    <div className="infoTechMaster_infoRow_infoCol6">
                        <div className="infoTechMaster_infoRow_infoCol6_sectionInfo">
                            <span
                                className="infoTechMaster_infoRow_infoCol6_sectionInfo_aboutTech">About Tech Master</span>
                            <h2 className="infoTechMaster_infoRow_infoCol6_sectionInfo_techH2">
                                Discover Our Vision for Digital <span
                                className="infoTechMaster_infoRow_infoCol6_sectionInfo_techH2_infoLi"> Education <img
                                src={line}
                                className="infoTechMaster_infoRow_infoCol6_sectionInfo_techH2_infoLi_infoLine" alt=""/>
                            </span>
                            </h2>
                        </div>
                        <div className="infoTechMaster_infoRow_infoCol6_award">
                            <div className="infoTechMaster_infoRow_infoCol6_award_awardSkill">
                                <div className="infoTechMaster_infoRow_infoCol6_award_awardSkill_awardCol">
                                    <div className="infoTechMaster_infoRow_infoCol6_award_awardSkill_awardCol_listAwar">
                                        <img src={check} alt=""/>
                                        Digital skill empowerment
                                    </div>
                                    <div className="infoTechMaster_infoRow_infoCol6_award_awardSkill_awardCol_listAwar">
                                        <img src={check} alt=""/>
                                        Expert-led courses
                                    </div>
                                    <div className="infoTechMaster_infoRow_infoCol6_award_awardSkill_awardCol_listAwar">
                                        <img src={check} alt=""/>
                                        Career-focused education
                                    </div>
                                    <div className="infoTechMaster_infoRow_infoCol6_award_awardSkill_awardCol_listAwar">
                                        <img src={check} alt=""/>
                                        Supportive learning
                                    </div>
                                    <div className="infoTechMaster_infoRow_infoCol6_award_awardSkill_awardCol_listAwar">
                                        <img src={check} alt=""/>
                                        Life-changing digital education
                                    </div>
                                </div>
                                <div className="infoTechMaster_infoRow_infoCol6_award_awardSkill_awardCol5">
                                    <div
                                        className="infoTechMaster_infoRow_infoCol6_award_awardSkill_awardCol5_cardAwar">
                                        <div
                                            className="infoTechMaster_infoRow_infoCol6_award_awardSkill_awardCol5_cardAwar_logoAward">
                                            <img src={awardLogo} alt=""/>
                                        </div>
                                        <h3>25+</h3>
                                        <p style={{fontSize: "16px", color: "#555"}}>Winning Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="infoTechMaster_infoRow_infoCol6_videoInfo">
                            <div className="infoTechMaster_infoRow_infoCol6_videoInfo_videoIcon">
                                <a className="infoTechMaster_infoRow_infoCol6_videoInfo_videoIcon_iconA" href="#">
                                    <img src={videoPlay} alt=""/>
                                </a>
                            </div>
                            <div className="infoTechMaster_infoRow_infoCol6_videoInfo_contentVideo">
                                <h3 className="infoTechMaster_infoRow_infoCol6_videoInfo_contentVideo_videoTitle">All Classes Video Provided</h3>
                                <p className="infoTechMaster_infoRow_infoCol6_videoInfo_contentVideo_textVideo">There are many variations of passages of but the majority have suffered.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default InfoTechMaster;