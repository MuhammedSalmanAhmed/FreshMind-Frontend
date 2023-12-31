import "./index.css"
import Footer from "../Footer/Footer"

const RefMaterials = () => {

    return (
        <>
    <div className="content-container">
        <section className="videos-section">
            <h2>Video Content</h2>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7LD8iC4NqXM?si=7iCWBELnn29zmsYD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                
                <div className="video-info">
                    <h2>Case study clinical example CBT: First session with a client with symptoms of depression (CBT model)</h2>
                    <p>Case study example for use in teaching, aiming to demonstrate some of the triggers, thoughts, feelings and responses linked with problematic low mood. This section here represents the first 14 minutes of an initial therapy session, but in order to try and outline the vicious cycle, it moves faster than an average session might. The video features an actor playing the character of Lucy, but the dialogue is not scripted, and as such represents a natural therapeutic exchange.</p>
                </div>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7qir8-ncvBA?si=GEGSx4VywM1C2NsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    
                <div className="video-info">
                    <h2>Bipolar disorder (depression & mania) - causes, symptoms, treatment & pathology</h2>
                    <p>Bipolar disorder is a mood disorder that is characterised by alternating periods of depressive symptoms and elevated mood, termed either hypomania or mania. We cover the different types of bipolar disorder, the criteria for diagnosis and treatment options. </p>
                </div>
            </div>
        </section>

        <section className="reading-section">
            <div className="reading-content">
                <h2>Reading Content</h2>
                <div className="bordered-box">
                    <p>Want to read about the actual world standing and what situation is the world is in now.</p>
                    <a target="_blank" rel="noreferrer" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6887067/"><button className="read-more-button">Read More</button></a>
                </div>
            </div>
        </section>
    </div>

    <Footer/>
    </>
    )
}

export default RefMaterials