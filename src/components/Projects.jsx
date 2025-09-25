import React from 'react'
import projects from 'consts/projects'
import { Link } from 'react-router-dom'
import { CiLink, CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import "components/styles/projects.css"

export default function Projects() {
    return (
        <div id='Projects' >
            <div className='section-margin projects'>
                <div className='section-title margin-block-700'>
                    <h2 className='fs-600'>My <span className='less-than'>{"{"}</span>dev<span className='greater-than'>{"}"}</span> projects</h2>
                    {/* <p className='padding-block-200 op-200'>Web Apps & Websites</p> */}
                    <p className='padding-block-200 op-200'><span style={{ color: "#EE9D9D", fontWeight: "bold" }}>/</span><span style={{ color: "#39DC15", fontWeight: "bold" }}>/</span>Exploring solutions through hands-on development</p>
                </div>
                {projects.map(item => (
                    <div key={item.id} className={`projects-grid ${item.position}`}>
                        <div className="pr-img image-section">
                            <img src={item.imageUrl} alt={item.title} />
                        </div>
                        <div className="pr-contents desc-section">
                            <>
                                <h3 className='fs-400 fw-bold'>{item.title}</h3>
                                <p className='op-200 margin-block-50'>{item.description}</p>
                                <div className="pr-made_with padding-block-100">
                                    {item.madeWith.map(made => (
                                        <div key={made} className='mw-item'>{made}</div>
                                    ))}
                                </div>
                                <div className="pr-links pr-made_with">
                                    <Link to={item.repo} target='_blank' className='mw-item'>GitHub Repo <FaGithub /></Link>
                                    <Link to={item.liveDemo} target='_blank' className='mw-item'>Live Demo <CiGlobe /></Link>
                                </div>
                            </>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
