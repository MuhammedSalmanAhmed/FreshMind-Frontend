import "./index.css"
import Facebook from "../../Assets/facebook.png"
import Instagram from "../../Assets/instagram.png"
import Twitter from "../../Assets/twitter.png"
import Email from "../../Assets/email.png"
import Phone from "../../Assets/smartphone.png"

const Contact = ()=> {

    return(

        <>
    <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions or need support, feel free to contact us. We are here to help you on your journey to better mental well-being. Reach out to us through the following channels:</p>
        <div className="contact-methods">
            <div className="contact-method">
                <img src={Email} alt="Email" />
                <div className="method-info">
                    <h3>Email</h3>
                    <p>Send us an email at <a href="mailto:info@mentalhealthsupport.com">info@mentalhealthsupport.com</a></p>
                </div>
            </div>
            <div className="contact-method">
                <img src={Phone} alt="Phone" />
                <div className="method-info">
                    <h3>Phone</h3>
                    <p>Call our support team at +1 (123) 456-7890</p>
                </div>
            </div>
        </div>
        <div className="social-media">
            <h2>Follow Us on Social Media</h2>
            <a href="/" className="social-icon contact-method"><img src={Instagram} alt="Instagram" /><p>Follow us on Instagram</p></a>
            <a href="/" className="social-icon contact-method"><img src={Facebook} alt="Facebook" /><p>Keep traking for updates on Facebook</p></a>
            <a href="/" className="social-icon contact-method"><img src={Twitter} alt="Twitter" /><p>Like us on Twitter</p></a>
        </div>
    </div>
    
    <div className="footer"></div>
        </>
    )
}

export default Contact