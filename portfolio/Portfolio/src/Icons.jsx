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
  

  

 </div>
  )
}
