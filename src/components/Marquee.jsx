import React from 'react'
import { PiStarFourFill } from "react-icons/pi";


export default function Marquee() {
    return (
        <div className="marquee">
            <ul className="marquee__content">
                <PiStarFourFill />
                <li>Discover</li>
                <PiStarFourFill />
                <li>Design</li>
                <PiStarFourFill />
                <li>Develop</li>
                <PiStarFourFill />
            </ul>
            {/* <!-- Mirrors the content above --> */}
            <ul className="marquee__content" aria-hidden="true">
                <li>Discover</li>
                <PiStarFourFill />
                <li>Design</li>
                <PiStarFourFill />
                <li>Develop</li>
                <PiStarFourFill />
            </ul>
        </div>
    )
}
