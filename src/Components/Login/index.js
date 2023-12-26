import "./index.css"
import { Link, NavLink } from "react-router-dom"
import BackPic from "../../Assets/auth.jpg"

const Login = ()=> {

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
    <div className="login-container">
        <h1>Login to FreshMind</h1>
        <form id="login-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
            <div className="submit-area">
                <button type="submit" className="login-button">Login</button>
                <p>Don't have an account? 
                <Link 
                exact="true" 
                activeclassname="active"
                to="/sign-up"
                > Sign Up</Link>
                </p>
            </div>
        </form>
    </div>
    </div>
    </>
    )
}

export default Login