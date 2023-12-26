import "./index.css"
import { Link, NavLink } from "react-router-dom"
import Facebook from "../../Assets/facebook.png"
import Instagram from "../../Assets/instagram.png"
import Twitter from "../../Assets/twitter.png"
import Email from "../../Assets/email.png"

const Feedback = ()=> {
    
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


    <div className="feedback-content">
        <h1>Feedback</h1>
        <p>Your feedback is important to us. Please share your thoughts and suggestions to help us improve our services.</p>
        <form id="feedback-form">
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label for="rating">Rating:</label>
                <select id="rating" name="rating" required>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                </select>
            </div>
            <div className="form-group">
                <label for="comments">Comments:</label>
                <textarea id="comments" name="comments" required></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
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

export default Feedback