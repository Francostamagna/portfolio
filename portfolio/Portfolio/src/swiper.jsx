import React from 'react'
import { useState, useEffect } from 'react'
import "../src/Slider.css"
import image1 from "./assets/1.png"
import image2 from "./assets/2.png"
import image3 from "./assets/3.png"
import deploy from "./assets/inverteddeploy.png"
import repo from "./assets/invertdegit.png"
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {data} from './assets/projectData'

export default () => {
   
    const [index, setIndex] = useState(0);
 
   
   
   const mod = (n,m) => {
       let result = n % m;
       return result >=0 ? result : result + m
   }
   
   useEffect(() => {
      setTimeout(() =>{
         setIndex((index + 1) % 3)
      },3000)
   }, 
   [index])
   
   
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data && data.map((item,i) =>( <SwiperSlide key={i}>
        <h1  key={i} className={'hache'+ item.key}>{item.title}</h1>    
        <div key={i} className='carousel'>
        <div className='detailContainer'>
            <h4 className='info'>{item.info}</h4>
            <div className='deployRepo'>
              {item.deploy? <a className='deployIcon' key={i} href={item.deploy? item.deploy: null} target="_blank" rel="noreferrer"> <img src={deploy} classname="deployGit" alt="deploy" width="150" height="150"/> </a>: null   }
              {item.deploy? <a  className='deployIcon' key={i} href={item.repo} target="_blank" rel="noreferrer"> <img src={repo} alt="repo" width="60" height="60"/> </a> : <a   key={i} href={item.repo} target="_blank" rel="noreferrer"> <img src={repo} alt="repo" className='deployIcondown' width="60" height="60"/> </a> }
                
                   </div>
            <div className='logos'>{item.tech && item.tech.map((tech,i) =>(
            <a  key={i} href={tech.href} target="_blank" rel="noreferrer" > <img src={tech.src} alt={tech.alt} /> </a>
        ))}</div>
            
        </div>
        {item.image.map((item, i) => {
         
         if (item.name == "zoa"){
          const indexLeft = mod(index - 1, 3);
          const indexRight = mod(index + 1, 3);
          let classname = "";

          if (i === index){
            classname= "cardzoa cardzoa--activezoa"
          }
          else if (i=== indexLeft){
            classname="cardzoa cardzoa--leftzoa"
          }
          else if( i === indexRight){
            classname=" cardzoa cardzoa--rightzoa"
          }
          else{
            classname= "cardzoa"
          }
          
          return <img key={item.key}
           src={item.image} 
           alt="slider" 
           className={classname}/>
         }
         else{
         
         const indexLeft = mod(index - 1, 3);
          const indexRight = mod(index + 1, 3);
          let classname = "";

          if (i === index){
            classname= "card card--active"
          }
          else if (i=== indexLeft){
            classname="card card--left"
          }
          else if( i === indexRight){
            classname=" card card--right"
          }
          else{
            classname= "card"
          }
          
          return <img key={item.key}
           src={item.image} 
           alt="slider" 
           className={classname}/>
}})}
       
       
     
    </div>
    
            </SwiperSlide>))}
    
    
        
      </Swiper>
     
    );
  };

