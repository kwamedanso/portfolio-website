import React from 'react'
import { organization } from 'consts/workExperience';
import "components/styles/workExperience.css"
import WorkExperienceList from './WorkExperienceList';

export default function WorkExperience() {
    return (
        <div className='section-margin'>
            <h2 className='fs-600 section-title margin-block-700'>My <span className='less-than'>{"["}</span>work<span className='greater-than'>{"]"}</span> Experience</h2>

            <div className="">
                <div className="experience-organization">
                    {organization.map(item => (
                        <div key={item.id} className='ex-box experience-grid margin-block-200 dashed-border'>
                            <div className='dashed-circle dashed-desktop'></div>
                            <div>
                                <p className='fs-300 fw-semi-bold'>{item.org}</p>
                                <p className='padding-block-10 fs-150'>{item.date}</p>
                            </div>

                            <div className='dashed-border dashed-border-mobile'>
                                <div className='dashed-circle dashed-circle-mobile'></div>
                                <p className='fs-300 fw-semi-bold'>{item.jtitle}</p>
                                <p className='padding-block-100 fw-semi-bold fs-200'>Responsibilities / Tasks</p>
                                <WorkExperienceList experience={item.experience} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}
