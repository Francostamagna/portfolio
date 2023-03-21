import React from 'react'
import { useEffect, useState } from 'react';
import { motion, transform } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import {tech} from "./assets/tech.js"
import BallCanvas from "../src/Balls.jsx"



export default function Technologies() {
 
    const {ref, inView} = useInView({threshold: 0.2});
  
     
  const popTech = useAnimation();
 
  useEffect(()=> {
   
   
    if(inView){
      
      popTech.start({
        x:0,
        transition: {type:"spring", duration:1, bounce: 0.2},
        
       });
          
    }
    if(!inView){
      popTech.start({
        x:"100vw"})
       
      
     
    
    }
  }, [inView])

    return (
    <div ref={ref} >
    <motion.div animate={popTech} className='technologies'>
        <p className='techTitle'>TECHNOLOGIES</p>
        <p  className='techIcons'> {tech && tech.map((t,i) => (<div className='techIcon' key={t.name}><BallCanvas key={t.name} icon={t.src}/></div>) )}
  
</p>

   
</motion.div>
        </div>
  )
}
