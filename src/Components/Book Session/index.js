import "./index.css"
import Doc1 from "../../Assets/doc1.jpg"
import Doc2 from "../../Assets/doc2.jpg"
import Footer from "../Footer/Footer"

const BookSession = ()=> {

    return(
        <>
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
    <Footer/>
        </>
    )
}

export default BookSession