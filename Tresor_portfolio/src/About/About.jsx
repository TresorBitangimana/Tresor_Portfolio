import "./About.css";


function About(){
    return(
        <div className="about-container" id="about-contaienr">
            <div className="about-content-container" id="about-content-container">
                <nav className="about-nav" id="about-nav">
                    <ul>
                        <li className="about-paths" id="about-paths">Education</li>
                        <li className="about-paths" id="about-paths">Me</li>
                        <li className="about-paths" id="about-paths">Interest</li>
                        <li className="about-paths" id="about-paths">More info</li>
                    </ul>
                </nav>
                <div className="about-info-container">
                </div>
            </div>
        </div>
    );
}


export default About;