import React from 'react';
import './style.css'


function Project(props) {

    return (
    <div className="col">
        <div className="card mb-3" id="projectCard">
            <img src={props.image} id="projectImage" className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.site} target="" className="btn btn-primary">{props.name}</a>
                <a href={props.repository} target="" className="btn btn-primary">See the Code</a>
            </div>
        </div>
    </div> 
    );
}

export default Project;
