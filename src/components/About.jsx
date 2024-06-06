import React, { useState } from 'react'
import { prof_skills, tech_skills, education } from 'consts/about'
import { motion } from "framer-motion"
import "components/styles/about.css"

export default function About() {
    const [activeTab, setActiveTab] = useState("prof_skills")

    function handleActiveTab(skill) {
        setActiveTab(skill)
    }

    return (
        <div id='About' className='section-margin'>
            <div className='section-title margin-block-700'>
                <h2 className='fs-600'>Problem solver <span className='less-than'>{"<"}</span>coder<span className='greater-than'>{">"}</span></h2>
            </div>
            <div className="about-grid">
                <div className="about-desc">
                    <h3 className='' data-type='clr-blue'>ABOUT ME</h3>
                    <p className='margin-block-200'>I'm a passionate web developer with over 3 years of experience in developing websites and web apps with HTML, CSS, JavaScript, React.js, Git for version control, and API integration. Skilled in creating user-friendly websites that prioritize functionality and aesthetics. Committed to continuous learning and adapting to the latest front-end technologies.</p>

                    <p>My true skill development began during my intership at Ant Cyber Engineering Limited. This experience has porpelled my ongoing journey of learning and constant improvement.</p>
                </div>
                <div className="about-prof_skills">
                    <div className="prof-skill_buttons">
                        <button className={`button ${activeTab === "prof_skills" ? "active" : ""}`} onClick={() => handleActiveTab("prof_skills")}>Skills</button>
                        <button className={`button ${activeTab === "tech_skills" ? "active" : ""}`} onClick={() => handleActiveTab("tech_skills")}>Tools</button>
                        <button className={`button ${activeTab === "edu" ? "active" : ""}`} onClick={() => handleActiveTab("edu")}>Education</button>
                    </div>

                    <div className='active-tab_content'>
                        {activeTab === "prof_skills" ? <>
                            {prof_skills.map(item => <motion.div animate={{ y: 0 }} initial={{ y: "10px" }} key={item} className='skill-item fs-150'>{item}</motion.div>)}
                        </> : activeTab === "tech_skills" ? <>
                            {tech_skills.map(item => <motion.div animate={{ y: 0 }} initial={{ y: "10px" }} key={item} className='skill-item fs-150'>{item}</motion.div>)}
                        </> : <>
                            {education.map(item => <motion.div animate={{ y: 0 }} initial={{ y: "10px" }} key={item.cert}>
                                <p className='fw-bold'>{item.cert}</p>
                                <p>{item.school}</p>
                                <p>{item.year}</p>
                            </motion.div>)}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}
