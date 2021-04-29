import React from 'react';

function Card(){
    return (
        <div className="card" style={{
            image: props.image ? `url(${image})` : 'none'}}
        >
    
        <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Description}</p>
        </div>

        );

}

export default Card;