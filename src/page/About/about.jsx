import React, {useEffect} from 'react';
import "./about.scss";
import page1 from "../../assests/images/pages1.webp"
import page2 from "../../assests/images/pages2.webp"
import page3 from "../../assests/images/pages3.webp"
import page4 from "../../assests/images/pages4.svg"
import page5 from "../../assests/images/pages5.svg"
import InfoTechMaster from "./components/infoTechMaster";
import ChooseUs from "./components/chooseUs/chooseUs";
import FunFact from "./components/funFact/funFact";
import Testimonial from "./components/testimonial/Testimonial";
import TeamMembersAbout from "./components/TeamMembersAbout/TeamMembersAbout";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
const About = () => {
    const abouts = "About Us"
    const aosAnimation = "fade-up";
    const aosAnimationRight = "fade-right";
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi (ms)
            offset: 100,    // Elementdan yuqori chekkasiga masofa
            easing: "ease-in-out", // Animatsiya effekti
            delay: 50,      // Animatsiya kechikishi (ms)
            once: true,     // Animatsiya faqat bir marta ishlashi uchun
        });
    }, []);
    return (
        <>
            <PageTitleArea titles={abouts}/>
            <InfoTechMaster dataAos={aosAnimation} />
            <ChooseUs dataAos={aosAnimation} dataAosRight={aosAnimationRight} />
            <FunFact dataAos={aosAnimation}/>
            <Testimonial dataAos={aosAnimation}/>
            <TeamMembersAbout dataAos={aosAnimation}/>
        </>
    );
};

export default About;