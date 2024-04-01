import React from 'react'
import "./NewsL.css"

const NewsLatter = () => {
    return (
        <div className='News-letter'>
            <h1>Get Exlucive Offers On Your Email</h1>
            <p>Subscribe To Our News-Letter and Stay Updated </p>
            <div>
                <input type="email" placeholder='Your Email Id' />
                <button>Subscribe</button>
            </div>

        </div>
    )
}

export default NewsLatter
