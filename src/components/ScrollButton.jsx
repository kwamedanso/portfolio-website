import React, { useState, useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa6"
import "components/styles/scrollButton.css"

export default function ScrollButton() {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setIsActive(true)
            } else {
                setIsActive(false)
            }
        })
    }, [])

    function scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            {isActive && <button onClick={scrollToTop} className='scroll-to-top-button'><FaArrowUp /></button>}
        </>
    )
}
