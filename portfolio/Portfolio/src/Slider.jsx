import React from 'react'
import { useState, useEffect } from 'react'
import "../src/Slider.css"
import image1 from "./assets/1.png"
import image2 from "./assets/2.png"
import image3 from "./assets/3.png"

function Slider() {
 const [index, setIndex] = useState(0);
 
 const cards = [
    {id: "1", image: image1

 },
    {id: "2", image: image2

 },
    {id: "3", image: image3

 }

]

const mod = (n,m) => {
    let result = n % m;
    return result >=0 ? result : result + m
}

useEffect(() => {
   setTimeout(() =>{
      setIndex((index + 1) % cards.length)
   },3000)
}, 
[index])

  
 
    return (
    <div className='carousel'>
        
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);
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
        })}
    </div>
  )
}

export default Slider