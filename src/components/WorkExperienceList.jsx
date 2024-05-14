import React, { useState } from 'react'

export default function WorkExperienceList({ experience }) {
    const [showMore, setShowMore] = useState(false)

    function handleShowMore() {
        setShowMore(!showMore)
    }
    return (
        <ul className='work-experience-list'>
            {showMore ? experience.map(exp => <li key={exp}>{exp}</li>) : experience.slice(0, 4).map(exp => <li key={exp}>{exp}</li>)}
            <p className='margin-block-100' style={{ color: "blue", cursor: "pointer" }} onClick={handleShowMore}>{showMore ? "Show Less" : "Show More"}</p>
        </ul>
    )
}
