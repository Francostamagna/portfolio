import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MobileNavBar from './MobileNavBar';
import me from "./assets/franco.jpg"
import {tech} from "./assets/tech.js"
import Slider from './Slider';
import Swiper from './swiper';
import Video from './video';
import Icons from './Icons';




function App() {
  
  const aboutMe = useRef(null);
  const home = useRef(null);
  const projects = useRef(null);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth'
    })
  }


  return (
    
    <div className="main">
      <MobileNavBar about={aboutMe} home={home} proj={projects}  ></MobileNavBar>
      <section className='NavBar'>
       
    
        <ul className='navList'>
        <button data-text="Awesome" class="button" onClick={()=>scrollToSection(home)}>
    <span class="actual-text">&nbsp;HOME&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;HOME&nbsp;</span>
</button>
<button data-text="Awesome" class="button" onClick={()=>scrollToSection(aboutMe)}>
    <span class="actual-text">&nbsp;ABOUT&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;ABOUT&nbsp;</span>
</button>
<button data-text="Awesome" class="button" onClick={()=>scrollToSection(projects)}>
    <span class="actual-text">&nbsp;PROJECTS&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;PROJECTS&nbsp;</span>
</button>
       
         
        </ul>
      </section>
      <section className='introduction'ref={home} >
       
        <div className='introDescription'>
        
          <div className='freudContainer' >
            <span>Sigmund Freud</span>
        
          <Video></Video>
          
         
        </div>
        
        <div id="descript" >
           <span className='helloTag'>Hello!, My name is <span className='nameTag'>Franco Costamagna</span></span>
           
           
          
          <h3 ><span>I am a </span> <span data-text="Full Stack Developer & Psychologist" className='professionTag'>Full Stack Developer & Psychologist</span></h3>
          
          <Icons></Icons>
          </div>
       
        </div>
        
        </section>
      <section className='aboutMe' ref={aboutMe}>
        
        <div className='infoAbout'>
        <h2 className='aboutTitle'>Problem-solver. Team-player.  Creative. </h2>
          <div className='text'>
            I am a Full Stack Developer from Cordoba, Argentina. I am also a Psychologyst,
            started programming in 2022. I love fishing and team sports. Music lover. Empathy.
            I am also a Clinical Psychologist, profession that I carry out in the present, it
has allowed me to develop comunicational soft skills, active listening and a
better understanding of interrelationships inside groups.
</div>
            
        </div>
        <div className='mePhoto'>
          <img className='photo' src={me} alt='not found'></img>
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
     
    </div>
  )
}

export default App



