import React, { useState } from 'react'
import { prof_skills, tech_skills } from 'consts/about'
import "components/styles/about.css"

export default function About() {
    const [activeTab, setActiveTab] = useState("prof")

    function handleActiveTab(skill) {
        setActiveTab(skill)
    }

    return (
        <div id='About' className='section-margin margin-block-700'>
            <div className="about-grid">
                <div className="about-desc">
                    <h3 className='' data-type='clr-blue'>ABOUT ME</h3>
                    <p className='fs-300 fw-semi-bold margin-block-100'>A dedicated Front-end Developmer based in Accra, Ghana</p>
                    <p className='margin-block-200'>Passionate web developer with 3+ years of experience in HTML, CSS, JavaScript, React.js, Version Control with Git, and API integration. Skilled in creating user-friendly websites that prioritize functionality and aesthetics. Committed to continuous learning and adapting to the latest front-end technologies.</p>
                </div>
                <div className="about-prof_skills">
                    <div className="prof-skill_buttons">
                        <button className={`button ${activeTab === "prof" ? "active" : ""}`} onClick={() => handleActiveTab("prof")}>Professional Skills</button>
                        <button className={`button ${activeTab === "tech" ? "active" : ""}`} onClick={() => handleActiveTab("tech")}>Technical Skills</button>
                    </div>

                    <div className='active-tab_content'>
                        {activeTab === "prof" ? <>
                            {prof_skills.map(item => <div key={item} className='skill-item fs-150'>{item}</div>)}
                        </> : <>
                            {tech_skills.map(item => <div key={item} className='skill-item fs-150'>{item}</div>)}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}
