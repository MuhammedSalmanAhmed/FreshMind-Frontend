import "./index.css"
import { Link } from "react-router-dom"
import BackPic from "../../Assets/auth.jpg"
import { useState } from "react";

const Login = ()=> {

    const [selectedField, setSelectedField] = useState(""); // State to store selected field

    return(
        <>
        <div>
        <img className="backPic" src={BackPic} alt="Background" />
    <div className="login-container">
        <h1>Login to FreshMind</h1>
        <form id="login-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
            <label for="field">Field:</label>
           <select id="field" name="field" value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
             <option value="">Select a field</option>
             <option value="Admin">Admin</option>
             <option value="Doctor">Doctor</option>
             <option value="Guest">Guest</option>
           </select>
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