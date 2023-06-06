import React from 'react'

import './footer.css'

import fb from '../../assets/Images/fb.png'
import insta from '../../assets/Images/insta.png'
import twitter from '../../assets/Images/twitter.png'
import yt from '../../assets/Images/yt.png'

const Footer = () => {
    return (

        <div className='footer-container'>
            <div className="footer">
                <p >Questions? Call 1-844-505-2993</p>
                <div className="nav-footer">
                    <div className="nav-links">
                        <ul>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Cookie Preferences</a></li>
                            <li><a href="">Corporate Information</a></li>
                            <li><a href="">Privacy</a></li>
                        </ul>

                    </div>




                    <div className="social-links">
                        <ul>
                            <li><a href=""><img src={fb} alt="" /></a></li>
                            <li><a href=""><img src={insta} alt="" /></a></li>
                            <li><a href=""><img src={twitter} alt="" /></a></li>
                            <li><a href=""><img src={yt} alt="" /></a></li>
                        </ul>
                    </div>
                </div>



                <div className="lang">
                    <span></span>
                    
                    <select >
                        <option>English</option>
                        <option>Malayalam</option>
                        <option>Hindi</option>
                        <option>Tamil</option>
                    </select>
                </div>

            </div>



        </div>
    )
}

export default Footer