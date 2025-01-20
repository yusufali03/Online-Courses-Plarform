import React from 'react';
import "./teamMembersAbout.scss";
import line from "../../../../assests/images/bottom_line.svg";
import team4 from "../../../../assests/images/team4.webp";
import team5 from "../../../../assests/images/team5.webp";
import team6 from "../../../../assests/images/team6.webp";
import team7 from "../../../../assests/images/team7.webp";
import share from "../../../../assests/images/share.svg";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
const TeamMembersAbout = ({dataAos}) => {
    return (
        <div className="teamMembersAbout">
            <div className="container">
                <div className="teamMembersAbout_subTeam" data-aos={dataAos}>
                    <div className="globalTitle" data-aos={dataAos}>Team Members</div>
                    <h2 className="teamMembersAbout_subTeam_teamTitle" data-aos={dataAos}>
                        Meet Out <span className="teamMembersAbout_subTeam_teamTitle_teamColor">Instructors
                   <img className="teamMembersAbout_subTeam_teamTitle_teamColor_teamLine" src={line} alt=""/></span>
                    </h2>
                    <div className="teamMembersAbout_teamRow">
                        <div className="teamMembersAbout_teamRow_teamCol-3" data-aos={dataAos}>
                            <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam">
                                <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamContent">
                                    <h3 className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamContent_teamNames">Karl
                                        Clarkson</h3>
                                    <p>Instructor</p>
                                </div>
                                <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamImages" data-aos={dataAos}>
                                    <img width="100%" style={{borderRadius: "8px"}} src={team4} alt=""/>
                                    <div
                                        className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamImages_teamSocial">
                                        <div className="shareIconTeam">
                                            <img src={share} alt=""/>
                                        </div>
                                        <div className="socialListIcon">
                                            <a className="teamIconLink" href="#"><FaFacebookF/></a>
                                            <a className="teamIconLink" href="#"><FaXTwitter/></a>
                                            <a className="teamIconLink" href="#"><FaLinkedinIn/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="teamMembersAbout_teamRow_teamCol-3" data-aos={dataAos}>
                            <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam">
                                <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamContent">
                                    <h3 className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamContent_teamNames">Gloria
                                        Bush</h3>
                                    <p>Instructor</p>
                                </div>
                                <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamImages" data-aos={dataAos}>
                                    <img width="100%" style={{borderRadius: "8px"}} src={team5} alt=""/>
                                    <div
                                        className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamImages_teamSocial">
                                        <div className="shareIconTeam">
                                            <img src={share} alt=""/>
                                        </div>
                                        <div className="socialListIcon">
                                            <a className="teamIconLink" href="#"><FaFacebookF/></a>
                                            <a className="teamIconLink" href="#"><FaXTwitter/></a>
                                            <a className="teamIconLink" href="#"><FaLinkedinIn/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="teamMembersAbout_teamRow_teamCol-3" data-aos={dataAos}>
                            <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam">
                                <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamContent">
                                    <h3 className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamContent_teamNames">Teresa
                                        Ransom</h3>
                                    <p>Instructor</p>
                                </div>
                                <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamImages" data-aos={dataAos}>
                                    <img width="100%" style={{borderRadius: "8px"}} src={team6} alt=""/>
                                    <div
                                        className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamImages_teamSocial">
                                        <div className="shareIconTeam">
                                            <img src={share} alt=""/>
                                        </div>
                                        <div className="socialListIcon">
                                            <a className="teamIconLink" href="#"><FaFacebookF/></a>
                                            <a className="teamIconLink" href="#"><FaXTwitter/></a>
                                            <a className="teamIconLink" href="#"><FaLinkedinIn/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="teamMembersAbout_teamRow_teamCol-3" data-aos={dataAos}>
                            <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam">
                                <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamContent">
                                    <h3 className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamContent_teamNames">Debra Webster</h3>
                                    <p>Instructor</p>
                                </div>
                                <div className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamImages" data-aos={dataAos}>
                                    <img width="100%" style={{borderRadius: "8px"}} src={team7} alt=""/>
                                    <div
                                        className="teamMembersAbout_teamRow_teamCol-3_singleTeam_teamImages_teamSocial">
                                        <div className="shareIconTeam">
                                            <img src={share} alt=""/>
                                        </div>
                                        <div className="socialListIcon">
                                            <a className="teamIconLink" href="#"><FaFacebookF/></a>
                                            <a className="teamIconLink" href="#"><FaXTwitter/></a>
                                            <a className="teamIconLink" href="#"><FaLinkedinIn/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMembersAbout;