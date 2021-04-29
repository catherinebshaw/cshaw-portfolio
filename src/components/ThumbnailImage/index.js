import { useState } from "react"
import "./style.css"
import  headshot from "../images/headshot.png";

function ThumbnailImage(){
    return (
        <img src={headshot} alt="headshot" />
    )
}

export default ThumbnailImage