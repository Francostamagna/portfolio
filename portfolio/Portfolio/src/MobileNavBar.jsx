import {React, useRef, useState} from 'react'
import "./MobileNavBar.css"

export default function MobileNavBar({aboutme,contact,projects}) {
    
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
          <li className='button' onClick={()=>scrollToSection(aboutme)}>
          <span class="actual-text">&nbsp;ABOUT&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;ABOUT&nbsp;</span></li>
          <li className='button' onClick={()=>scrollToSection(projects)} >  <span class="actual-text">&nbsp;PROJECTS&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;PROJECTS&nbsp;</span></li>
          <li className='button' onClick={()=>scrollToSection(contact)}>  <span class="actual-text">&nbsp;CONTACT&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;CONTACT&nbsp;</span></li>

          </ul>
       

    </div>
  )
}
