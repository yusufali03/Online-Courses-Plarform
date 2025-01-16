import React from 'react'

import Hero from "../../component/Hero/Hero";
import AboutArea from "../../component/AboutArea";
import CoursesArea from "../../component/CoursesArea";
import TeamMember from "../../component/TeamMember";
import ChooseArea from "../../component/ChooseArea";
import Partner from "../../component/Partner/partner";
import Testimonial from "../../component/TestimonialArea";
import OurBlog from "../../component/OurBlog";
import TestimonialsTwo from "../../component/TestimonialArea/next";
import HomeFooter from "../../component/HomeFooter/homeFooter";

export default function Home() {

    return (
        <div className='home'>
            <Hero/>
            <AboutArea/>
            <CoursesArea/>
            <TeamMember/>
            <ChooseArea/>
            <Partner/>
            <Testimonial/>
            <OurBlog/>
            <TestimonialsTwo/>
            <HomeFooter/>
        </div>
    )
}
