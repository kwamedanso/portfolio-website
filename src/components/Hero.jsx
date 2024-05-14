import React from 'react'
import "components/styles/hero.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineFileDownload, MdOutlineArrowOutward } from "react-icons/md";
import resumeFile from "assets/Kwame-Danso-resume.pdf";



export default function Hero() {
    return (
        <div id='Home'>
            <div className='section-margin'>
                <div className='hero'>
                    <div className="hero-content">
                        <div className='hero-text'>
                            <code className='fw-semi-bold'>Hello world - this is my portfolio page</code>
                            <div className='margin-block-200'>
                                <p className='fs-800 fw-bold'>My name is <span className='content-name'>Kwame</span></p>
                                <p className='fs-800 fw-bold'>I'm a <span className='content-underline'>Front End  Developer</span></p>
                            </div>
                            <p className='fs-250 op-200 margin-block-300 fw-semi-bold'>With over 4 years of experience in web design and development, my true skill development began during my intership at Ant Cyber Engineering Limited. This experience has porpelled my ongoing journey of learbing and constant improvement.
                            </p>
                            <div className="hero-links">
                                <Link target='_blank' to={"https://github.com/kwamedanso"}><FaGithub /></Link>
                                <Link target='_blank' to={"https://www.linkedin.com/in/kwame-amoafo-danso-4b07072aa/"}><FaLinkedin /></Link>

                            </div>
                        </div>


                        <div className="hero-buttons">
                            <a href={resumeFile} target='_blank' rel='noreferrer' className='button' data-type="white" download={"KwameDanso-resume.pdf"}>Resume <MdOutlineFileDownload /></a>
                            <a href='#Contact' className='button' data-type='blue'>Contact me <MdOutlineArrowOutward /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
