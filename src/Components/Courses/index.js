import "./index.css";
import { Link, NavLink } from "react-router-dom"
import Email from "../../Assets/email.png"
import Facebook from "../../Assets/facebook.png"
import Instagram from "../../Assets/instagram.png"
import Twitter from "../../Assets/twitter.png"

const Courses = () => {

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

    <div className="courses-container">
        <div className="course">
            <h2>Stress</h2>
            <p>Feeling stressed out? Learn how to manage stress effectively with our course. We are here to help you regain your peace of mind.</p>
            <div className="progress-bar">
                <div className="progress" style={{width: "70%"}}></div>
            </div>
            <Link 
            exact="true" 
            activeclassname="active"
            to="/online-res"
            ><button className="start-button">Start</button>
            </Link>
        </div>

        <div className="course">
            <h2>Depression</h2>
            <p>Dealing with depression can be tough. Join our course and work towards a brighter and happier future.</p>
            <div className="progress-bar">
                <div className="progress" style={{width: "70%"}}></div>
            </div>
            <Link 
            exact="true" 
            activeclassname="active"
            to="/online-res"
            ><button className="start-button">Start</button>
            </Link>
            </div>

        <div className="course">
            <h2>Anxiety</h2>
            <p>Anxiety can affect your daily life. Our course is designed to help you reduce anxiety and improve your well-being.</p>
            <div className="progress-bar">
                <div className="progress" style={{width: "70%"}}></div>
            </div>
            <Link 
            exact="true" 
            activeclassname="active"
            to="/online-res"
            ><button className="start-button">Start</button>
            </Link>
        </div>
    </div>

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
        </>
    )
}

export default Courses