import React from 'react'
import { useEffect, useState } from 'react';
import Icons from './Icons'
import { motion, transform } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function Contact() {
 
  let [input, setInput] =useState({
    Name: "",
    Email:"",
    Message: "",
    
  
   })
  
   let [errors, setErrors] = useState({
    Name:"Name required",
    Email:  "Must be a valid E-mail",
    Message: "Message required"
  
   })

   let validate = (input) => {
    const errors = {};
    if (!input.Name){
     errors.Name = "Name required"
    }
    
    let pupi = input.Email.toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    console.log(pupi)
    if (!pupi
    ) {
     errors.Email = "Must be a valid E-mail"
    }
    console.log(errors.Email)


 
     if (input.Message === 0) {
     errors.Message = "Message required"
    }
    
 
    return errors;
  }

  let submit = true;
  console.log(errors)
  if(input.Name && input.Email && input.Message){
    if (!errors.Name  && !errors.Email && !errors.Message ){
       submit= false
 
 }}

 let handleChange = (e) => {
  setInput({
    ...input,
    [e.target.name ] : e.target.value
  })
  setErrors(validate({
    ...input,
    [e.target.name ] : e.target.value
  }))

}



const MySwal = withReactContent(Swal)

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
        setInput({
          Name: "",
          Email:"",
          Message: ""
        })
        MySwal.fire({
          title: <p className='swal'>Thanks for getting in touch! I will reply as soon as posible.</p>,
          position: 'top-end',
          })

      } 

      const {ref, inView} = useInView({threshold: 0.2});
  
     
  const popFirst = useAnimation();
  const pop = useAnimation()
  const popLast = useAnimation();
  const popFirstResponsive = useAnimation();

  
 
 




  useEffect(()=> {
   
   
    if(inView){
      
      popFirst.start({
        scale:1,
        x:"0vw",
        y:"0vw",
       
         transition: {type:"spring", delay:2.5, duration:1, bounce: 0.2},
        
       });
      
      popFirstResponsive.start({
       scale:1,
        transition: {type:"spring", delay:0.5, duration:1, bounce: 0.2},
       
      });
      
      ;
      pop.start({
        scale:1,
        transition: {type:"spring", delay:3, duration:1, bounce: 0.2}

      });
      popLast.start({
        scale:1,
        transition: {type:"spring", delay:3.5, duration:1, bounce: 0.2}

      });

    
    }
    if(!inView){
      popFirst.start({
       scale:1.6,
       x:"20vw",
       y:"8vw",
       
      
        
      });

      popFirstResponsive.start({
        scale:0
        
        
       });
       

      pop.start({
        scale:0
        
      })

      popLast.start({
        scale:0
      })

      
    
    }
  }, [inView])





return (<div ref={ref} className='contactContainer'>
            <div  className='contactRow'>
              <div className='contactLeft'>
                <motion.h1 animate={popFirst}  className='contactTitle'>Every good thing in life starts with a conversation</motion.h1>
                <motion.h1 animate={popFirstResponsive}  className='contactTitleResponsive'>Every good thing in life starts with a conversation</motion.h1>
                 <motion.div animate={popLast}><Icons></Icons></motion.div> 
              </div>
              <motion.div animate={pop} className='contactRight'>
                <form   id='formContact' onSubmit={(e)=>submitFunction(e)}>
                  <input type="text" name='Name' placeholder='Your name' value={input.Name}  onChange={(e) => {handleChange(e)}}  required/>
                  <input type="mail" name='Email' placeholder='your email' value={input.Email}  onChange={(e) => {handleChange(e)}}  required/>
                  <textarea name='Message'   cols="30" row="6"  placeholder='Your message' value={input.Message}  onChange={(e) => {handleChange(e)}}  required/>
              <button  disabled={submit} type='submit'>Submit</button>
                </form>
             

              </motion.div>
              
              
              </div>   


        </div>
)}