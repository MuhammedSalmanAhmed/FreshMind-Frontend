import React from 'react'
import { Link, } from "react-router-dom"
import Email from "../../Assets/email.png"
import Facebook from "../../Assets/facebook.png"
import Instagram from "../../Assets/instagram.png"
import Twitter from "../../Assets/twitter.png"

const Footer = () => {
  return (
    <footer className="footer">
<div className="contact">
    <h2>Contact Us</h2>
    <p>If you have any questions or need support, feel free to contact us at <a href="mailto:info@mentalhealthsupport.com">info@mentalhealthsupport.com</a>.</p>
</div>
<div className="social-icons">
    <a href="/" className="social-icon"><img src={Email} alt="Email" /><p>Email</p></a>
    <a href="/" className="social-icon"><img src={Instagram} alt="Instagram" /><p>Instagram</p></a>
    <a href="/" className="social-icon"><img src={Facebook} alt="Facebook" /><p>Facebook</p></a>
    <a href="/" className="social-icon"><img src={Twitter} alt="Twitter" /><p>Twitter</p></a>
</div>
<Link 
    exact="true" 
    activeclassname="active"
    className="button"
    to="/contact"
    >Contact Us</Link>
</footer>
  )
}

export default Footer
