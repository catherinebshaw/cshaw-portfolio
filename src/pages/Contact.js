import React from 'react';

function Contact(){

    return( 
    
    <div className="container content box">
        <div className="row gx-5">
            <div className="col-9 col-s-9">  
                <div className="p-3 border bg-white">         
                    <h2>Contact</h2>
                    <hr></hr>
                    <br></br>
                    <div className="container">  
                        <div className="row">
                            <div className="col-sm-8">             
                                <div class="card" id="contact">
                                    <div className="card-body">
                                        <p>catherinebshaw@sympatico.ca</p>
                                        <p>416-550-3230</p>
                                        <ul className="list-group list-group-horizontal">
                                            <a href="https://www.linkedin.com/in/catherine-shaw-a91a0423"><icon className="fa fab fa-linkedin" style={{width: 30}}></icon></a>
                                            <a href="https://github.com/catherinebshaw"><icon className="fa fab fa-github-square" stlye={{width: 30}}></icon></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card" id="download"> 
                                    <p>Click on the image to download a copy of my resume:</p>
                                    <a href="assets/CS resume 2021.pdf" download><img src="assets/downloadPDF.png" alt="C Shaw Resume" width="60" height="auto"></img></a>
                                </div> 
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
    </div>
      

    )
}
export default Contact