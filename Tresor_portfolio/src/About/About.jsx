import "./About.css";

import { useEffect } from "react";


function About(){


    function changeContent(content){
        //container for the inside elements
        const container = document.getElementById("about-info-container");
        //inside elements
        const mainContent = document.getElementById("about-main-container");
        const meContent = document.getElementById("about-me-container");
        const interestContent = document.getElementById("about-interest-container");
        const moreInfoContent = document.getElementById("about-more-info-container");

        switch(content){
            case 1: mainContent.style.display = "block";

                    meContent.style.display = "none";
                    interestContent.style.display = "none";
                    moreInfoContent.style.display = "none";
                    break;
            case 2: meContent.style.display = "block";
                
                    mainContent.style.display = "none";
                    interestContent.style.display = "none";
                    moreInfoContent.style.display = "none";
                    break;
            case 3: interestContent.style.display = "block";

                    mainContent.style.display = "none";
                    meContent.style.display = "none";
                    moreInfoContent.style.display = "none";
                    break;
            case 4: moreInfoContent.style.display = "none";
                
                    mainContent.style.display = "block";
                    meContent.style.display = "none";
                    interestContent.style.display = "none";
                    break;
        }
    }





    return(
        <div className="about-container" id="about-contaienr">
            <div className="about-content-container" id="about-content-container">
                <nav className="about-nav" id="about-nav">
                    <ul>
                        <li className="about-paths" id="about-paths" onClick={() => changeContent(1)}>Main</li>
                        <li className="about-paths" id="about-paths" onClick={() => changeContent(2)}>Me</li>
                        <li className="about-paths" id="about-paths" onClick={() => changeContent(3)}>Interest</li>
                        <li className="about-paths" id="about-paths" onClick={() => changeContent(4)}>More-info</li>
                    </ul>
                </nav>
                <div className="about-info-container">
                    <div className="about-info-content-containers" id="about-main-container">
                        Main
                    </div>
                    <div className="about-info-content-containers" id="about-me-container">
                        Me
                    </div>
                    <div className="about-info-content-containers" id="about-interest-container">
                        Interest
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