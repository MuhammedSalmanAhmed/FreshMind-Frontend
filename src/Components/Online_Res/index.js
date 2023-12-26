import "./index.css"
import { Link, NavLink } from "react-router-dom"
import Email from "../../Assets/email.png"
import Facebook from "../../Assets/facebook.png"
import Instagram from "../../Assets/instagram.png"
import Twitter from "../../Assets/twitter.png"
import SelfAsses from "../../Assets/self_assessment.jpg"
import ReadCont from "../../Assets/read_content.jpg"
import Courses from "../../Assets/courses.jpg"

const OnlineRes = ()=> {
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

    {/* Section 1: Self Assessment */}
    <section className="section-1">
        <div className="content">
            <div className="description">
                <h2>Self Assessment Quiz</h2>
                <p>Assess your mental well-being with our quiz. Gain insights into your current state and take steps towards improvement.</p>
                <Link 
                exact="true" 
                activeclassname="active"
                className="button"
                to="/self-asses"
                >Take Quiz</Link>
            </div>
            <img src={SelfAsses} alt="Quiz" />
        </div>
    </section>

    {/* Section 2: Reading and Video Content */}
    <section className="section-2">
        <div className="content">
            <div className="description">
                <h2>Reading and Video Content</h2>
                <p>Explore a wealth of reading materials and videos on various topics related to mental health and well-being.</p>
                <Link 
                exact="true" 
                activeclassname="active"
                className="button"
                to="/ref-materials"
                >View Content</Link>
            </div>
            <img src={ReadCont} alt="Reading and Video" />
        </div>
    </section>

    {/* Section 3: Courses */}
    <section className="section-3">
        <div className="content">
            <div className="description">
                <h2>Courses</h2>
                <p>Discover the importance of our courses in addressing and managing mental health challenges. Start now to enhance your well-being.</p>
                <Link 
                exact="true" 
                activeclassname="active"
                className="button"
                to="/courses"
                >Start Now</Link>
            </div>
            <img src={Courses} alt="Courses" />
        </div>
    </section>


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

export default OnlineRes