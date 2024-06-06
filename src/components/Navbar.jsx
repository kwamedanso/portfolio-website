import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navLinks from 'consts/navbar'
import profile from "assets/profile.jpg"
import { motion } from 'framer-motion'
import { navVariant } from './framerVariants'
import "components/styles/navbar.css"


export default function Navbar() {
    const [hamburger, setHamburger] = useState(false)


    return (
        <motion.div className='section-margin'>
            <header className='flex jc-space-between ai-center'>
                <motion.div animate={{ x: 0 }} initial={{ x: '-100px' }} className="header-logo">
                    <Link to={"/"}>
                        <img src={profile} alt="Profile pic" />
                    </Link>
                </motion.div>

                <nav className={`nav-links ${hamburger ? "active" : null}`}>
                    <motion.div variants={navVariant} initial="hidden" animate="visible" >
                        <ul className='flex jc-space-between'>
                            {navLinks.map(item => (<li key={item.title} onClick={() => setHamburger(!hamburger)}><a className='fw-semi-bold fs-200' href={`#${item.title}`}>{item.title}</a></li>))}
                        </ul>
                    </motion.div>
                </nav>

                <div className={`hamburger ${hamburger ? "active" : null}`} onClick={() => setHamburger(!hamburger)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </header>
        </motion.div>
    )
}
