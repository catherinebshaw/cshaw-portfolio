import { useState } from "react"
import ThumbnailImage from "../components/ThumbnailImage"
import Bio from "../components/Bio"
import ProfileContext from "../utils/ProfileContext"

function About() {
  const [profile] = useState({
    name: "Catherine Shaw",
    location: "Toronto",
    info1: "Thirty years ago, I acquired the skills necessary to transition from a career in Nursing to one in Corporate Finance and Consulting. Not a simple move, but a rewarding one. Nursing had taught me how to solve complex problems, to think on my feet and to be fully accountable to my customers. In the corporate world, I built on those skills with  new skills in analysis, business planning and strategic thinking. My unique background and skill-set led me to some fascinating and rewarding roles.",
   info2:  "Now I am transitioning to full-stack web development: using technology to solve complex, and simple, business problems. With an understanding of technology and broad base in business, I am uniquely positioned to help organizations, be they large, small, for-profit, not-for-profit - efficiently improve their performance using the internet.",
  info3: "To learn more about my experience, or my unconventional path from nurse to full-stack developer, please visit my Contact page where you can download my resume, email me or reach out on LinkedIn or Github.",
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
