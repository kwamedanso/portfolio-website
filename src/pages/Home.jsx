import About from 'components/About'
import Hero from 'components/Hero'
import Projects from 'components/Projects'

import React from 'react'
import Marquee from 'components/Marquee';
import WorkExperience from 'components/WorkExperience';
import Contact from 'components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <Marquee />
            <About />
            <Projects />
            <WorkExperience />
            <Contact />
        </>
    )
}
