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
          <li className='button' onClick={()=>scrollToSection(tech)}>
          <span class="actual-text">&nbsp;HOME&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;HOME&nbsp;</span></li>
          <li className='button' onClick={()=>scrollToSection(about)} >  <span class="actual-text">&nbsp;ABOUT&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;ABOUT&nbsp;</span></li>
          <li className='button' onClick={()=>scrollToSection(proj)}>  <span class="actual-text">&nbsp;PROJECTS&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;PROJECTS&nbsp;</span></li>

          </ul>
       

    </div>
  )
}
