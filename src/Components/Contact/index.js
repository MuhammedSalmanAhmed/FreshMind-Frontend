import "./index.css"
import { Link, NavLink } from "react-router-dom"
import Facebook from "../../Assets/facebook.png"
import Instagram from "../../Assets/instagram.png"
import Twitter from "../../Assets/twitter.png"
import Email from "../../Assets/email.png"
import Phone from "../../Assets/smartphone.png"

const Contact = ()=> {

    return(

        <>
            <header>
        <nav className="navbar">
            <div className="company-name">
                <Link to="/">FreshMind</Link>
            </div>
            <ul className="navigation">
                <li><NavLink exact="true" activeclassname="active" to="/">Home</NavLink></li>
                <li><NavLink 
            exact="true" 
            activeclassname="active"
            to="/online-res"
            >Online Resources</NavLink></li>
                <li><NavLink 
            exact="true" 
            activeclassname="active"
            to="/book-session"
            >Book A Session</NavLink></li>
                <li><NavLink 
            exact="true" 
            activeclassname="active"
            to="/contact"
            >Contact Us</NavLink></li>
                <li><NavLink 
            exact="true" 
            activeclassname="active"
            to="/feedback"
            >Feedback</NavLink></li>
            
            </ul>


            <div className="auth-buttons">
                <NavLink 
                exact="true" 
                activeclassname="active"
                className="signup-button"
                to="/sign-up"
                >Sign Up</NavLink>

                <NavLink 
                exact="true" 
                activeclassname="active"
                className="login-button"
                to="/login"
                >Login</NavLink>
            </div>
        </nav>
    </header>
    <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions or need support, feel free to contact us. We are here to help you on your journey to better mental well-being. Reach out to us through the following channels:</p>
        <div className="contact-methods">
            <div className="contact-method">
                <img src={Email} alt="Email" />
                <div className="method-info">
                    <h3>Email</h3>
                    <p>Send us an email at <a href="mailto:info@mentalhealthsupport.com">info@mentalhealthsupport.com</a></p>
                </div>
            </div>
            <div className="contact-method">
                <img src={Phone} alt="Phone" />
                <div className="method-info">
                    <h3>Phone</h3>
                    <p>Call our support team at +1 (123) 456-7890</p>
                </div>
            </div>
        </div>
        <div className="social-media">
            <h2>Follow Us on Social Media</h2>
            <a href="/" className="social-icon contact-method"><img src={Instagram} alt="Instagram" /><p>Follow us on Instagram</p></a>
            <a href="/" className="social-icon contact-method"><img src={Facebook} alt="Facebook" /><p>Keep traking for updates on Facebook</p></a>
            <a href="/" className="social-icon contact-method"><img src={Twitter} alt="Twitter" /><p>Like us on Twitter</p></a>
        </div>
    </div>
    
    <div className="footer"></div>
        </>
    )
}

export default Contact