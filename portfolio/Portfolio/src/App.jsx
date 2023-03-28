import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MobileNavBar from './MobileNavBar';
import me from "./assets/franco.jpg"

import Slider from './Slider';
import cv from "../public/CV.pdf"
import Swiper from './swiper';
import Video from './video';
import Technologies from './Technologies';
import Typed from 'react-typed';

import Starcanvas from './Stars';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Contact from './Contact';




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

 

  const {ref, inView} = useInView({threshold: 0});
  
  const animation = useAnimation();
  const anime = useAnimation();
  const pop = useAnimation()

  useEffect(()=> {
    if(inView){
      animation.start({
        x:0,
        transition: {type:"spring", duration:1, bounce: 0.2}

      });
      anime.start({
        x:0,
        transition: {type:"spring", duration:1, bounce: 0.2}

      });
      pop.start({
        scale:1 ,
        transition: {type:"spring", duration:1, bounce: 0.2}
        
        
        

      })
    }
    if(!inView){
      animation.start({
        x:"100vw"
        
      });
      anime.start({
        x:"-100vw"
        
      }),
      pop.start({
        scale:0
        
      })
    }
  }, [inView])


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
      
        <div ref={ref} className='partContainer'>
        <motion.div animate={anime} className='infoAbout'>
        <h2 className='aboutTitle'>Problem-solver. Team-player.  Creative. </h2>
          <h3 className='text'>
            I am a Full Stack Developer from Cordoba, Argentina.
           I started programming in 2022 and I found my passion. I love fishing, team sports and Music. 
            I am also a Clinical Psychologist, profession that I carry out in the present, it
has allowed me to develop comunicational soft skills,a great sense of empathy, active listening and a
better understanding of interrelationships inside groups.
</h3>
            
        </motion.div>
        <div className='mePhoto'>
          <img className='photo' src={me} alt='not found'></img>
        </div>
  </div>   
        <Technologies></Technologies>
        
    
       
      </section>
      <section className="projects"ref={projects}>
      <div className='h3'>
      <h3>PROJECTS</h3>
      </div>
      
      
      <Swiper></Swiper>
      </section>
     
      <section className='contact' ref={contact}>
       <Starcanvas></Starcanvas>
       <Contact></Contact> 
      </section>
      
    </div>
  )
}

export default App





//<a className='techIcon' key={t.href} href={t.href} target="_blank" rel="noreferrer"> <img src={t.src} alt={t.alt} width="50" height="50"/> </a>