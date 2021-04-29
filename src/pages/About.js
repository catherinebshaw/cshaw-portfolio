import { useState } from "react"
import ThumbnailImage from "../components/ThumbnailImage"
import Bio from "../components/Bio"
import ProfileContext from "../utils/ProfileContext"

function About() {
  const [profile] = useState({
    name: "Catherine Shaw",
    location: "Toronto",
    info1: "Thirty years ago, I acquired the skills necessary to transition from a career in Nursing to one in Corporate Finance and Consulting. Not a simple move, but a rewarding one. My time in Nursing taught me how to work under pressure, to solve complex problems, to think on my feet and to be fully accountable to my customers who, at the time, were patients.",
    info2: "In the corporate world, I gained new skills in analysis, administration, and both business and strategic planning. My unique background and skillset led me to some fascinating and rewarding roles.",
    info3: "Now I am transitioning to full-stack web development. I have developed technical programming skills in HTML, CSS, JavaScript, Bootstrap, Node JS, MySQL, MongoDB, Express and ReactJs. I am excited to roll up my sleeves and use this technology to help organizations of all sizes solve complex, and sometimes simple, business problems.",
    info4: "To learn more about my experience, or my unconventional path from registered nurse to full-stack developer, please visit my Contact page where you can download my resume, email me or reach out on LinkedIn or Github.",
    thumbnail: "../components/images/headshot.png",
  })

  return (
    <ProfileContext.Provider value={profile}>
      <div className="row">
        <div id="About" className="container-fluid">
          <ThumbnailImage />
          <Bio />
        </div>
      </div>
    </ProfileContext.Provider>
  )
}

export default About
