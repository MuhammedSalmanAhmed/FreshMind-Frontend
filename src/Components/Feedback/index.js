import "./index.css"
import Footer from "../Footer/Footer"

const Feedback = ()=> {
    
    return(

        <>
    <div className="feedback-content">
        <h1>Feedback</h1>
        <p>Your feedback is important to us. Please share your thoughts and suggestions to help us improve our services.</p>
        <form id="feedback-form">
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label for="rating">Rating:</label>
                <select id="rating" name="rating" required>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                </select>
            </div>
            <div className="form-group">
                <label for="comments">Comments:</label>
                <textarea id="comments" name="comments" required></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
    </div>

    <Footer/>
        </>
    )
}

export default Feedback