import "./index.css"
import { Link } from "react-router-dom"
import SelfAsses from "../../Assets/self_assessment.jpg"
import ReadCont from "../../Assets/read_content.jpg"
import Courses from "../../Assets/courses.jpg"
import Footer from "../Footer/Footer"

const OnlineRes = ()=> {
    return(
        <>
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

        <Footer/>
        </>
    )
}

export default OnlineRes