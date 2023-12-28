import "./index.css"
import { Link } from "react-router-dom"
import HomePic from "../../Assets/Home Background.jpeg"
import Onl_Res from "../../Assets/online_res.jpg"
import Join from "../../Assets/join_us.jpg"
import Footer from "../Footer/Footer"

const Home = ()=>{
    return(
        <>
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
    
        <Footer/>
        </>
    )
}

export default Home