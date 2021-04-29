import { useState } from "react"
import ThumbnailImage from "../components/ThumbnailImage"
import Bio from "../components/Bio"
import ProfileContext from "../utils/ProfileContext"

function About() {
  const [profile] = useState({
    name: "Catherine Shaw",
    location: "Toronto",
    info: "Thirty years ago I took a sharp turn in my career and I jumped from Nursing to Finance. Not a simple move, but a rewarding one. I was able to take many of my nursing skills, like the ability to solve complex problems, to think on your feet and to be fully accountable to your customer, and apply them in business. In business, I gained additional skills in analysis and strategic thinking which led me to some fascinating and rewarding roles. Now I am taking another sharp turn and becoming a full-stack web developer. I am building on my experience in Health Care, Finance, Consulting and my more recent experiences in the not-for-profit sector to solve problems in innovative ways using web-based technology. To learn more about my experience, or my unconventional path from nurse to full-stack developer, please visit my Contact page where you can download my resume, email me or reach out on LinkedIn or Github.",
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
