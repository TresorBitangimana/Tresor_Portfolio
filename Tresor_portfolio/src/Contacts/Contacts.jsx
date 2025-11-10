import "./Contacts.css";

import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { SiHandshake } from "react-icons/si";


function Contacts(){
    return(
        <div className="contacts" id="contacts">
            <div className="contact"><a href="#"><FaLinkedin /></a></div>
            <div className="contact"><a href="https://app.joinhandshake.com/profiles/fwtbth"><SiHandshake /></a></div>
            <div className="contact"><a href="https://www.instagram.com/treasure_1.0.1/"><FaInstagram /></a></div>
            <div className="contact"><a href="mailto:bitangimanatresor@gmail.com"><IoMailOutline /></a></div>
        </div>           
    );
}

export default Contacts;