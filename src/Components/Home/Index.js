import "./index.css"
import { Link, NavLink } from "react-router-dom"
import HomePic from "../../Assets/Home Background.jpeg"
import Onl_Res from "../../Assets/online_res.jpg"
import Join from "../../Assets/join_us.jpg"
import Email from "../../Assets/email.png"
import Facebook from "../../Assets/facebook.png"
import Instagram from "../../Assets/instagram.png"
import Twitter from "../../Assets/twitter.png"

const Home = ()=>{
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
    

    <div className="hero">
        <img src={HomePic} alt="Background" className="background-image" />
        <div className="hero-text">
            <h1>Welcome to FreshMind</h1>
            <p>Your Compassionate Guide to Mental Well-being</p>
        </div>
    </div>
    

    <div className="mission">
        <h2>Our Mission</h2>
        <p>"Empowering university students to thrive in the face of mental health challenges is our unwavering mission. We're dedicated to providing a holistic range of resources and unwavering support to enhance your emotional well-being, so you can conquer stress, anxiety, and depression, and embark on a journey to a happier, healthier you."</p>
    </div>
    
    <div className="online-resources-references">
        <div className="content">
            <h2>Online Resources & References</h2>
            <p>Have you tired of paying money and visiting in person? We've got you covered with FreshMind, your one-step solution for mental well-being.</p>
            <Link 
            exact="true" 
            activeclassname="active"
            className="visit-now-button"
            to="/online-res"
            >Visit Now</Link>
        </div>
        <img src={Onl_Res} alt="Online Resources" />
    </div>
    

    <div className="Sessions">
        <h2>Therapy Sessions</h2>
        <p>Don't worry if online courses and resources aren't making you feel better. We've got you covered. Our therapy sessions offer a safe space for you to open up, share your thoughts, and work with experienced professionals to overcome your challenges. Explore a journey of self-discovery and healing with us.</p>
        <Link 
            exact="true" 
            activeclassname="active"
            className="book-session-button"
            to="/book-session"
            >Book Your Session</Link>
    </div>
    

    <div className="join-us">
        <div className="join-content">
            <h2>Join Us</h2>
            <p>Ready to embark on a transformative journey to better mental health with us? Your path to self-discovery and emotional well-being begins here. Create an account to access our empowering resources and enriching courses.</p>
            <Link 
                exact="true" 
                activeclassname="active"
                className="join-button"
                to="/sign-up"
                >Create Account</Link>
        </div>
        <div className="image-container">
            <img src={Join} alt="Join Us" />
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

export default Home