import {React, useRef, useState} from 'react'
import "./MobileNavBar.css"

export default function MobileNavBar({about,tech,proj}) {
    
    const [burger_class, setBurguerClass ]= useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked ]  = useState(false)
  
    const updateMenu = () => {
      if (!isMenuClicked){
        setBurguerClass("burger-bar clicked")
        setMenuClass("menu visible")
        console.log("hola")
      }
      else{
        setBurguerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
        console.log("chau")
      }
      setIsMenuClicked(!isMenuClicked)
    }
    
    
    const scrollToSection = (sectionRef) => {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth'})}
 
 
    return (
    <div className='MobNavBar'>
        <nav>
           <div className='burgerMenu' onClick={updateMenu}>
              <div className={burger_class} ></div>
              <div className={burger_class} ></div>
              <div className={burger_class} ></div>

           </div>
        </nav>
        
          <ul className={menu_class}>
          <li className='Moblink' onClick={()=>scrollToSection(about)}>ABOUT ME</li>
          <li className='Moblink' onClick={()=>scrollToSection(tech)} >TECHNOLOGIES</li>
          <li className='Moblink' onClick={()=>scrollToSection(proj)}>PROJECTS</li>

          </ul>
       

    </div>
  )
}
