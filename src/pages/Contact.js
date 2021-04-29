import React from 'react';
import '../App.css'
import resume from "../components/images/CSresume2021.pdf"


function Contact(){

    return( 
        <div>  
            <div className="container" id="contact">   
                <h2>Contact</h2>
                <hr></hr>
                <br></br>             
                <div>
                    <ul className="list-group-flush" id="contactDetails">
                        <li className="list-group-item" aria-current="true"><i className="fas  fa-at" id="icon"></i>catherinebshaw@sympatico.ca</li>
                        <li className="list-group-item"><i className="fas  fa-mobile-alt" id="icon"></i>416-550-3236</li>
                        <a className="list-group-item" href='https://www.linkedin.com/in/catherine-shaw-a91a0423' target="_blank" rel="noreferrer"><i className="fa fab fa-linkedin" id="icon"></i>LinkedIn</a>
                        <a className="list-group-item" href="https://github.com/catherinebshaw" target="_blank" rel="noreferrer"><i className="fa fab fa-github-square" id="icon"></i>Github</a>
                        <a className="list-group-item" href={resume} download><i className="fas  fa-file-download" id="icon"></i>Click to dowload my resume</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Contact