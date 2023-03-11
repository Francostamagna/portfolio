import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MobileNavBar from './MobileNavBar';
import me from "./assets/franco.jpg"
import {tech} from "./assets/tech.js"
import Slider from './Slider';
import cv from "../public/CV.pdf"
import Swiper from './swiper';
import Video from './video';
import Icons from './Icons';
import Typed from 'react-typed';




function App() {
  
  const aboutMe = useRef(null);
  const contact = useRef(null);
  const projects = useRef(null);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const submitFunction = (e) => {
    const formEle = document.getElementById("formContact")
    e.preventDefault();
    console.log(formEle)
    console.log("submited")
    const formData = new FormData(formEle);
    fetch("https://script.google.com/macros/s/AKfycbzIkF5e146JnPhSWmKzXjr5MMRHhG7Ilq9rLFOasO3wp9XdUNLv8WBcJ80uz87UROZ8/exec", {
      method: "POST",
      body: formData
    })
  } 

  return (
    
    <div className="main">
      <MobileNavBar about={aboutMe} contact={contact} proj={projects}  ></MobileNavBar>
      <section className='NavBar'>
       
    
        <ul className='navList'>
       
<button data-text="Awesome" class="button" onClick={()=>scrollToSection(aboutMe)}>
    <span class="actual-text">&nbsp;ABOUT&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;ABOUT&nbsp;</span>
</button>
<button data-text="Awesome" class="button" onClick={()=>scrollToSection(projects)}>
    <span class="actual-text">&nbsp;PROJECTS&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;PROJECTS&nbsp;</span>
</button>
<button data-text="Awesome" class="button" onClick={()=>scrollToSection(contact)}>
    <span class="actual-text">&nbsp;CONTACT&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;CONTACT&nbsp;</span>
</button>
       
         
        </ul>
      </section>
      <section className='introduction'ref={contact} >
       
        <div className='introDescription'>
        
          <div className='freudContainer' >
            <span>Sigmund Freud</span>
        
          <Video></Video>

          
          
         
        </div>
        
        <div id="descript" >
           <span className='helloTag'>Hello!, My name is <span className='nameTag'>Franco Costamagna</span></span>
           
           
          
          <h3 className='professionTag'><span className='tag'>I am a </span><Typed className='typed'
                strings={[
                    'Full Stack Developer',
                    'Psychologist',
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                   
                </Typed> </h3>
          
                <a href={cv} download id='downCv'>  <div class="download">
<div className="download-container">
  <div className="buttonText">Download  CV</div>
    <span className="cvIcon">
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" height="2em" width="2em" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" fill="none"></path></svg>
    </span>
  </div>
</div></a>
          </div>
       
        </div>
        
        </section>
      <section className='aboutMe' ref={aboutMe}>
        <div className='partContainer'>
        <div className='infoAbout'>
        <h2 className='aboutTitle'>Problem-solver. Team-player.  Creative. </h2>
          <h3 className='text'>
            I am a Full Stack Developer from Cordoba, Argentina. I am also a Psychologyst,
            started programming in 2022. I love fishing and team sports. Music lover. Empathy.
            I am also a Clinical Psychologist, profession that I carry out in the present, it
has allowed me to develop comunicational soft skills, active listening and a
better understanding of interrelationships inside groups.
</h3>
            
        </div>
        <div className='mePhoto'>
          <img className='photo' src={me} alt='not found'></img>
        </div>
  </div>   
        <div className='technologies'>
        <p className='techTitle'>TECHNOLOGIES</p>
        <p className='techIcons'> {tech && tech.map((t,i) => (<a className='techIcon' href={t.href} target="_blank" rel="noreferrer"> <img src={t.src} alt={t.alt} width="50" height="50"/> </a>) )}
  
</p>

        </div>
        
    
     
      </section>
      <section className="projects"ref={projects}>
      <div className='h3'>
      <h3>PROJECTS</h3>
      </div>
      
      
      <Swiper></Swiper>
      </section>

      <section className='contact' ref={contact}>

      <div className='contactTitle'>
                <h3>CONTACT ME</h3>
            </div>
        <div className='contactContainer'>
            <div className='contactRow'>
              <div className='contactLeft'>
                  
                  <Icons></Icons>
              </div>
              <div className='contactRight'>
                <form   id='formContact' onSubmit={(e)=>submitFunction(e)}>
                  <input type="text" name='Name' placeholder='Your name' required/>
                  <input type="mail" name='Email' placeholder='your email' required/>
                  <textarea name='Message'   cols="30" row="6"  placeholder='Your message' required/>
              <button type='submit'>Submit</button>
                </form>


              </div>
              
              
              </div>   


        </div>





      </section>
     
    </div>
  )
}

export default App



