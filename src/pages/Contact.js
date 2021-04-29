import React from 'react';
import {FaLinkedin, FaGithub, FaMobileAlt, FaAt, FaFileDownload } from "react-icons/fa";
import {IconContext} from "react-icons";
import '../App.css';
import resume from "../components/images/CSresume2021.pdf";



function Contact (){
   
    return( 
        <div>  
            <div className="container" id="contact">   
                <h2>Contact</h2>
                <hr></hr>
                <br></br>             
                <div>
                    <ul className="list-group-flush" id="contactDetails">
                        <li className="list-group-item" aria-current="true">
                            <IconContext.Provider value={{ color: "teal", size: "3rem", margin: "20px"}}><FaAt /></IconContext.Provider>   catherinebshaw@sympatico.ca </li>
                        <li className="list-group-item"><IconContext.Provider value={{ color: "teal", size: "3rem", margin: "20px"}}><FaMobileAlt/></IconContext.Provider> 416-550-3236 </li>
                        <a className="list-group-item" href='https://www.linkedin.com/in/catherine-shaw-a91a0423' target="_blank" rel="noreferrer"> <IconContext.Provider value={{ color: "teal", size: "3rem", margin: "20px"}}><FaLinkedin/></IconContext.Provider>   LinkedIn</a>
                        <a className="list-group-item" href="https://github.com/catherinebshaw" target="_blank" rel="noreferrer"><IconContext.Provider value={{ color: "teal", size: "3rem", margin: "20px"}}><FaGithub/></IconContext.Provider>   Github</a>
                    <a className="list-group-item" href={resume} download><IconContext.Provider value={{ color: "teal", size: "3rem", margin: "20px"}}><FaFileDownload /></IconContext.Provider>   Click to dowload my resume</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Contact