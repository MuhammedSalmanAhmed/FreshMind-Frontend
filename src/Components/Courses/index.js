import "./index.css";
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer";

const Courses = () => {

    return(
        <>
    <div className="courses-container">
        <div className="course">
            <h2>Stress</h2>
            <p>Feeling stressed out? Learn how to manage stress effectively with our course. We are here to help you regain your peace of mind.</p>
            <div className="progress-bar">
                <div className="progress" style={{width: "70%"}}></div>
            </div>
            <Link 
            exact="true" 
            activeclassname="active"
            to="/online-res"
            ><button className="start-button">Start</button>
            </Link>
        </div>

        <div className="course">
            <h2>Depression</h2>
            <p>Dealing with depression can be tough. Join our course and work towards a brighter and happier future.</p>
            <div className="progress-bar">
                <div className="progress" style={{width: "70%"}}></div>
            </div>
            <Link 
            exact="true" 
            activeclassname="active"
            to="/online-res"
            ><button className="start-button">Start</button>
            </Link>
            </div>

        <div className="course">
            <h2>Anxiety</h2>
            <p>Anxiety can affect your daily life. Our course is designed to help you reduce anxiety and improve your well-being.</p>
            <div className="progress-bar">
                <div className="progress" style={{width: "70%"}}></div>
            </div>
            <Link 
            exact="true" 
            activeclassname="active"
            to="/online-res"
            ><button className="start-button">Start</button>
            </Link>
        </div>
    </div>

    <Footer/>
        </>
    )
}

export default Courses