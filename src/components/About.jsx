import React, { useState } from 'react'
import { prof_skills, tech_skills, education } from 'consts/about'
import "components/styles/about.css"

export default function About() {
    const [activeTab, setActiveTab] = useState("prof_skills")

    function handleActiveTab(skill) {
        setActiveTab(skill)
    }

    return (
        <div id='About' className='section-margin margin-block-700'>
            <div className='section-title margin-block-700'>
                <h2 className='fs-600'>About</h2>
            </div>
            <div className="about-grid">
                <div className="about-desc">
                    <h3 className='' data-type='clr-blue'>ABOUT ME</h3>
                    <p className='fs-300 fw-semi-bold margin-block-100'>A dedicated Front-end Developer</p>
                    <p className='margin-block-200'>Passionate web developer with over 4 years of experience in HTML, CSS, JavaScript, React.js, Version Control with Git, and API integration. Skilled in creating user-friendly websites that prioritize functionality and aesthetics. Committed to continuous learning and adapting to the latest front-end technologies.</p>
                </div>
                <div className="about-prof_skills">
                    <div className="prof-skill_buttons">
                        <button className={`button ${activeTab === "prof_skills" ? "active" : ""}`} onClick={() => handleActiveTab("prof_skills")}>Professional Skills</button>
                        <button className={`button ${activeTab === "tech_skills" ? "active" : ""}`} onClick={() => handleActiveTab("tech_skills")}>Technical Skills</button>
                        <button className={`button ${activeTab === "edu" ? "active" : ""}`} onClick={() => handleActiveTab("edu")}>Education</button>
                    </div>

                    <div className='active-tab_content'>
                        {activeTab === "prof_skills" ? <>
                            {prof_skills.map(item => <div key={item} className='skill-item fs-150'>{item}</div>)}
                        </> : activeTab === "tech_skills" ? <>
                            {tech_skills.map(item => <div key={item} className='skill-item fs-150'>{item}</div>)}
                        </> : <>
                            {education.map(item => <div key={item.cert}>
                                <p className='fw-bold'>{item.cert}</p>
                                <p>{item.school}</p>
                                <p>{item.year}</p>
                            </div>)}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}
