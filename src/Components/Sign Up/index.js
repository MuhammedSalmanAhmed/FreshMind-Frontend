import "./index.css"
import { Link } from "react-router-dom"
import BackPic from "../../Assets/auth.jpg"
import { useState } from "react";

const SignUp = () => {
 const [selectedField, setSelectedField] = useState(""); // State to store selected field

 return (
   <>
     <div>
       <img className="backPic" src={BackPic} alt="Background" />
       <div class="signup-container">
         <h1>Signup on FreshMind</h1>
         <form id="signup-form">

           
<label
 
for="username">Username:</label>

           
<input
 
type="text"
 
id="username"
 
name="username"
 
required />

           
<label
 
for="email">Email:</label>

           
<input
 
type="text"
 
id="email"
 
name="email"
 
required />

           
<label
 
for="password">Password:</label>

           
<input
 
type="password"
 
id="password"
 
name="password"
 
required />

           
<label for="field">Field:</label>
           <select id="field" name="field" value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
             <option value="">Select a field</option>
             <option value="Admin">Admin</option>
             <option value="Doctor">Doctor</option>
             <option value="Guest">Guest</option>
           </select>
           <div class="submit-area">
             <button type="submit" class="signup-button">Signup</button>
             <p>
               Already have an account?
               <Link exact="true" activeclassname="active" to="/login">Login</Link>
             </p>
           </div>
         </form>
       </div>
     </div>
   </>
 );
};

export default SignUp;