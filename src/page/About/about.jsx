import React, {useEffect} from 'react';
import "./about.scss";
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