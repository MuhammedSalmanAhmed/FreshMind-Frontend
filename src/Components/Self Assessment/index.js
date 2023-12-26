import "./index.css"
import { Link, NavLink } from "react-router-dom"
import Email from "../../Assets/email.png"
import Facebook from "../../Assets/facebook.png"
import Instagram from "../../Assets/instagram.png"
import Twitter from "../../Assets/twitter.png"

const SelfAsses = ()=> {

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

    <div className="self-assessment-container">
        <h1>Psychological Self-Assessment</h1>
        <form id="self-assessment-form">
            <div className="question">
                <p>Question 1: How often do you feel nervous or anxious?</p>
                <select name="question1">
                    <option value="not-at-all">Not at all</option>
                    <option value="sometimes">Sometimes</option>
                    <option value="often">Often</option>
                    <option value="always">Always</option>
                </select>
            </div>
            <div className="question">
                <p>Question 2: How often do you feel sad or down?</p>
                <select name="question2">
                    <option value="not-at-all">Not at all</option>
                    <option value="sometimes">Sometimes</option>
                    <option value="often">Often</option>
                    <option value="always">Always</option>
                </select>
            </div>
            <div className="question">
                <p>Question 3: How often do you experience difficulty concentrating or making decisions?</p>
                <select name="question3">
                    <option value="not-at-all">Not at all</option>
                    <option value="sometimes">Sometimes</option>
                    <option value="often">Often</option>
                    <option value="always">Always</option>
                </select>
            </div>
            
            <div className="question">
                <p>Question 4: How often do you feel irritable or easily annoyed?</p>
                <select name="question4">
                    <option value="not-at-all">Not at all</option>
                    <option value="sometimes">Sometimes</option>
                    <option value="often">Often</option>
                    <option value="always">Always</option>
                </select>
            </div>
            
            <div className="question">
                <p>Question 5: How often do you experience changes in appetite or weight?</p>
                <select name="question5">
                    <option value="not-at-all">Not at all</option>
                    <option value="sometimes">Sometimes</option>
                    <option value="often">Often</option>
                    <option value="always">Always</option>
                </select>
            </div>
            
            <div className="question">
                <p>Question 6: How often do you feel physically unwell or have unexplained aches and pains?</p>
                <select name="question6">
                    <option value="not-at-all">Not at all</option>
                    <option value="sometimes">Sometimes</option>
                    <option value="often">Often</option>
                    <option value="always">Always</option>
                </select>
            </div>
            
            <div className="question">
                <p>Question 7: How often do you experience thoughts of self-harm or suicide?</p>
                <select name="question7">
                    <option value="not-at-all">Not at all</option>
                    <option value="sometimes">Sometimes</option>
                    <option value="often">Often</option>
                    <option value="always">Always</option>
                </select>
            </div>
        </form>
    </div>
    <div className="submit">
    <Link 
            exact="true" 
            activeclassname="active"
            to="/online-res"
            ><button className="button" type="submit">Submit</button>
            </Link>
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

export default SelfAsses