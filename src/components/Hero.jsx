import React from 'react'
import "components/styles/hero.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import resumeFile from "assets/Kwame-Danso-resume.pdf";
import { motion } from 'framer-motion';
import { childVariant, containerVariant } from './framerVariants';



export default function Hero() {
    return (
        <motion.div variants={containerVariant} animate="visible" initial="hidden" id='Home'>
            <div className='section-margin'>
                <div className='hero'>
                    <div className="hero-content">
                        <div className='hero-text'>
                            <motion.code variants={childVariant} className='fw-semi-bold fs-200'>Hello world! - this is my portfolio page.</motion.code>

                            <motion.div variants={childVariant}>
                                <div className='margin-block-200'>
                                    <div className="primary-heading">
                                        <p className='fw-bold'>
                                            My name is
                                            <span className='content-name'> Kwame</span>
                                        </p>
                                        <p className='fw-bold'>
                                            Frontend
                                            <span className='less-than'> {'<'}</span>
                                            <span className='developer'>Developer</span>
                                            <span className='greater-than'>{'>'}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='padding-block-100'>{'['}React, JavaScript, HTML/CSS, Git, RestAPI{'...]'}</p>
                                        <p className='padding-block-200'>Specializing in React & JavaScript, I leverage cutting edge technologies to bring web projects to life.</p>
                                    </div>
                                </div>

                                <div className="hero-links">
                                    <Link target='_blank' to={"https://github.com/kwamedanso"}><FaGithub /></Link>
                                    <Link target='_blank' to={"https://www.linkedin.com/in/kwame-amoafo-danso-4b07072aa/"}><FaLinkedin /></Link>
                                </div>
                            </motion.div>
                        </div>


                        <motion.div variants={childVariant} className="hero-buttons">
                            <a href='#Contact' className='button' data-type='blue'>Let's Talk</a>
                            <a href={resumeFile} target='_blank' rel='noreferrer' className='button' data-type="white" download={"KwameDanso-resume.pdf"}>View Resume</a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
