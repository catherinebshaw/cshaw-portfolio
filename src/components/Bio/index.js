import React from 'react';
import { useContext } from "react";
import "./style.css";
import ProfileContext from "../../utils/ProfileContext";

function Bio() {
    const { info1 } = useContext(ProfileContext)
    const { info2 } = useContext(ProfileContext)
    const { info3 } = useContext(ProfileContext)
    const { info4 } = useContext(ProfileContext)


    return (
        <>
            <div class="card-body">
                <p class="card-text">{info1}</p>
                <p class="card-text">{info2}</p>
                <p class="card-text">{info3}</p> 
                <p class="card-text">{info4}</p> 
            </div>
        </>
    )
}

export default Bio