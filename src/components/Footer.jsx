import React from 'react'
import "components/styles/footer.css"

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className='footer'>
            <p className='fw-semi-bold'>Copyright © {year}. All rights reserved.</p>
        </div>
    )
}
