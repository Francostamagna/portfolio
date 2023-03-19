import React from 'react'
import { useEffect, useState } from 'react';
import Icons from './Icons'
import { motion, transform } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useMediaQuery } from './functions';


export default function Contact() {
 
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

      const {ref, inView} = useInView({threshold: 0.2});
  
  
  const popFirst = useAnimation();
  const pop = useAnimation()
  const popLast = useAnimation();
  const popResponsive = useAnimation();


  let boxVariants = {};
  const isSmall = useMediaQuery("(max-width: 980px)");
  console.log(isSmall)
 

  useEffect(()=> {
   
   
    if(inView){
      popFirst.start({
       scale:1,
        transition: {type:"spring", delay:2, duration:1, bounce: 0.2},
        x:0,
        y:0
      });
      pop.start({
        scale:1,
        transition: {type:"spring", delay:2.5, duration:1, bounce: 0.2}

      });
      popLast.start({
        scale:1,
        transition: {type:"spring", delay:3, duration:1, bounce: 0.2}

      });

      popResponsive.start({
        scale:1,
        transition: {type:"spring", delay:1, duration:1, bounce: 0.2}

      });
    
    }
    if(!inView){
      popFirst.start({
       scale:1.6,
       x:"20vw",
       y:"15vh"
        
      });
      pop.start({
        scale:0
        
      })

      popLast.start({
        scale:0
      })

      popResponsive.start({
        scale:0
      })
    }
  }, [inView,isSmall])





return (<div ref={ref} className='contactContainer'>
            <div  className='contactRow'>
              <div className='contactLeft'>
                  <motion.h1 animate={isSmall? popResponsive:popFirst}  className='contactTitle'>Every good thing in life starts with a conversation</motion.h1>
                
                 <motion.div animate={popLast}><Icons></Icons></motion.div> 
              </div>
              <motion.div animate={pop} className='contactRight'>
                <form   id='formContact' onSubmit={(e)=>submitFunction(e)}>
                  <input type="text" name='Name' placeholder='Your name' required/>
                  <input type="mail" name='Email' placeholder='your email' required/>
                  <textarea name='Message'   cols="30" row="6"  placeholder='Your message' required/>
              <button type='submit'>Submit</button>
                </form>
             

              </motion.div>
              
              
              </div>   


        </div>
)}