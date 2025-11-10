import "./About.css";

import { useEffect } from "react";
import TCULogo from "../Images/TCULogo.png";


function About(){


    function changeContent(content){
        //container for the inside elements
        const container = document.getElementById("about-info-container");
        //inside elements
        const mainContent = document.getElementById("about-main-container");
        const meContent = document.getElementById("about-me-container");
        const moreInfoContent = document.getElementById("about-more-info-container");

        switch(content){
            case 1: mainContent.style.display = "block";

                    meContent.style.display = "none";
                    moreInfoContent.style.display = "none";
                    break;
            case 2: meContent.style.display = "block";
                
                    mainContent.style.display = "none";
                    moreInfoContent.style.display = "none";
                    break;
            case 3: moreInfoContent.style.display = "block";
                
                    mainContent.style.display = "none";
                    meContent.style.display = "none";
                    break;
        }
    }





    return(
        <div className="about-container" id="about-contaienr">
            <div className="about-content-container" id="about-content-container">
                <nav className="about-nav" id="about-nav">
                    <ul>
                        <li className="about-paths" id="about-main" onClick={() => changeContent(1)}>Education & Career Interest</li>
                        <li className="about-paths" id="about-me" onClick={() => changeContent(2)}>Me</li>
                        <li className="about-paths" id="about-more-info" onClick={() => changeContent(3)}>More-info</li>
                    </ul>
                </nav>
                <div className="about-info-container">
                    <div className="about-info-content-containers" id="about-main-container">
                        <div className="education-container" id="education-container">
                            <div className="school-name-container" id="school-name-container">
                                <img src={TCULogo} alt="TCU school logo" className="school-logo" id="school-logo" />
                                <h2 className="school-name" id="school-name">Texas Christian University</h2>
                            </div>
                            <div className="education-info-container" id="education-info-container">
                                <h3 className="collage-name" id="collage-name">College of Science & Engineering </h3>
                                <p>Bachelor's</p>
                                <p>August 2025 to present</p>
                                <p>Major: Computer Science</p>
                                <p>School year: Freshman</p>
                            </div>
                        </div>
                        <div className="looking-for-container" id="looking-for-container">
                            <h2 className="looking-for-text" id="looking-for-text">Looking for</h2>
                            <h3 className="looking-for-type-text" id="looking-for-type-text">Job type</h3>
                            <div className="looking-for-type" id="looking-for-type">
                                <div className="looking-for">Internship</div>
                                <div className="looking-for">Networking & Inspiration</div>
                                <div className="looking-for">Full-time job</div>
                                <div className="looking-for">Part-time job</div>
                            </div>
                            <h3 className="lookingfor-role-text" id="looking-for-role-text">Roles</h3>

                            <div className="looking-for-roles" id="looking-for-roles">
                                <div className="looking-for">Frontend Software Engineer</div>
                                <div className="looking-for">Backend Developer</div>
                                <div className="looking-for">Web developer</div>
                            </div>
                            <h3 className="looking-for-indutries-text" id="looking-for-industries-text">Industries</h3>
                            <div className="looking-for-industries" id="looking-for-industries">
                                <div className="looking-for">Information Technology</div>
                                <div className="looking-for">Computer Networking</div>
                            </div>
                        </div>
                    </div>
                    <div className="about-info-content-containers" id="about-me-container">
                        Me
                    </div>
                    <div className="about-info-content-containers" id="about-more-info-container">
                        More info
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;