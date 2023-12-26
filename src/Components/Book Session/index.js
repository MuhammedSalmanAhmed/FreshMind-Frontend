import "./index.css"
import { Link, NavLink } from "react-router-dom"
import Email from "../../Assets/email.png"
import Facebook from "../../Assets/facebook.png"
import Instagram from "../../Assets/instagram.png"
import Twitter from "../../Assets/twitter.png"
import Doc1 from "../../Assets/doc1.jpg"
import Doc2 from "../../Assets/doc2.jpg"

const BookSession = ()=> {

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

    <div className="why-opt-section">
        <h2>Why Opt for Personalized Sessions?</h2>
        <p>When it comes to your mental well-being, personalized support makes all the difference. Our one-on-one sessions are designed to give you dedicated attention from experienced professionals, customized strategies for your unique needs, a safe space to express your thoughts and feelings, effective guidance for overcoming challenges, privacy and confidentiality throughout your journey, and a pathway to lasting mental well-being.</p>
    </div>
    
    

    {/*Add your two sections with doctor/psychiatrist information here */}
    <div className="section">
        <img src={Doc1} alt="Doctor 1" />
        <div className="info">
            <h2>Dr. Sarah Johnson</h2>
            <p>Accreditation: Licensed Psychologist</p>
            <p>Dr. Sarah Johnson is a highly experienced psychologist with a compassionate and nature-friendly approach to therapy. She specializes in cognitive-behavioral therapy and mindfulness-based practices to help you achieve mental well-being.</p>
            <div className="rating">
                <div className="stars"></div>
                <div className="marker" style={{width: "70%"}}></div>
            </div>
            <div className="reviews">
                <p>3 reviews (Avg: 4/5)</p>
            </div>
        </div>
    </div>
    
    <div className="section">
        <img src={Doc2} alt="Doctor 2" />
        <div className="info">
            <h2>Dr. Michael Williams</h2>
            <p>Accreditation: Board-Certified Psychiatrist</p>
            <p>Dr. Michael Williams is a board-certified psychiatrist known for his innovative and cooperative methods of treatment. He is dedicated to providing personalized care and medication management to promote your mental health.</p>
            <div className="rating">
                <div className="stars"></div>
                <div className="marker" style={{width: "70%"}}></div>
            </div>
            <div className="reviews">
                <p>4 reviews (Avg: 4/5)</p>
            </div>
            
        </div>
    </div>
    

    {/*Footer section */}
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

export default BookSession