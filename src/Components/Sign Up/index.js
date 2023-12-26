import "./index.css"
import { Link, NavLink } from "react-router-dom"
import BackPic from "../../Assets/auth.jpg"

const SignUp = ()=> {

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

    <div>
        <img className="backPic" src={BackPic} alt="Background" />
    <div class="signup-container">
        <h1>Signup on FreshMind</h1>
        <form id="signup-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <div class="submit-area">
                <button type="submit" class="signup-button">Signup</button>
                <p>Already have an account? 
                <Link 
                exact="true" 
                activeclassname="active"
                to="/login"
                > Login</Link></p>
            </div>
        </form>
    </div>
    </div>
        </>
    )
}

export default SignUp