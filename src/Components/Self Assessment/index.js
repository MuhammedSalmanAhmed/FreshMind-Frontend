import "./index.css"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"

const SelfAsses = ()=> {

    return(
        <>
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
    <Footer/>
        </>
    )
}

export default SelfAsses