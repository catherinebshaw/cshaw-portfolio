import React from 'react';
import { useContext } from "react";
import "./style.css";
import ProfileContext from "../../utils/ProfileContext";

function Bio() {
    const { info } = useContext(ProfileContext)

    return (
        <>
            <div class="card-body">
                <p class="card-text">{info}</p>
            </div>
        </>
    )
}

export default Bio