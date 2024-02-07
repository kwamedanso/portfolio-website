import React from 'react'
// import { FaPhoneAlt } from "react-icons/fa";
import { CiMail, CiPhone } from "react-icons/ci";
import "components/styles/contact.css"


export default function Contact() {
    return (
        <div className='contact margin-block-700 section-margin'>
            <h3 className=''>CONTACT</h3>
            <p>Don't be shy! Hit me up!👇</p>

            <div className='margin-block-300'>
                <div className='contact-grid'>
                    <div className='flex ai-center'>
                        <div className="icon"><CiPhone /></div>
                        <a href="tel:+233208001245">
                            <span className='fw-semi-bold'>Phone</span>
                            <span className='op-200 fs-150'>020 800 1363</span>
                        </a>
                    </div>

                    <div className='flex ai-center'>
                        <div className="icon"><CiMail /></div>
                        <a href="mailto:dansokwameamoafo@gmail.com">
                            <span className='fw-semi-bold'>Mail</span>
                            <span className='op-200 fs-150'>dansokwameamoafo@gmail.com</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
