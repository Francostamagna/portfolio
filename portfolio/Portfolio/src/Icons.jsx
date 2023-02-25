import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import "./icons.css"
import cv from "../public/CV.pdf"


export default function Icons() {
  return (
    <div className="redes">
    <a href="https://github.com/Francostamagna" className="facebook"><FontAwesomeIcon  icon={faGithub} ></FontAwesomeIcon></a>
    <a href="https://www.linkedin.com/in/franco-nicolas-costamagna/" className="youtube" ><FontAwesomeIcon  icon={faLinkedin}></FontAwesomeIcon></a>
    <a href="https://twitter.com/FrancoCostamag3" className="twitter" ><FontAwesomeIcon  icon={faTwitter}></FontAwesomeIcon></a>
    <a href={cv} download id='downCv'>  <div class="download">
<div className="download-container">
  <div className="buttonText">Download  CV</div>
    <span className="cvIcon">
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" height="2em" width="2em" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" fill="none"></path></svg>
    </span>
  </div>
</div></a>

  

 </div>
  )
}
