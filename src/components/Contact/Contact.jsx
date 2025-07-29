import './Contact.css'
import con from '../../assets/contact.png';
import React from "react";
import {useGSAP} from "@gsap/react";
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/all";



const Contact = () => {

   useGSAP(()=>{
      gsap.from(".rightcontact",{
      x:150,
      duration:1.2,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightcontact",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 50%",
        end:"top 20%"
      }
    
     })
     gsap.from(".leftcontact",{
      x:-150,
      duration:1.2,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftcontact",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 50%",
        end:"top 20%"
      }
    
     })
   

  })

  return(

    <div className='contact' id='contact'>
        <div className='leftcontact'>
           <img src={con} alt="contact imgage"/>
        </div>
        <div className='rightcontact'>
            <form action="https://formspree.io/f/meozkpzb" method='post'>
                 <input  name='Username' type="text" placeholder='Name'/>


                  <input  name='email' type="email" placeholder='Email'/>


                  <textarea name="message" id="textarea" placeholder="Message me" >
                     
                  </textarea>
                  <input type="submit" id="btn" value="Submit"/>




            </form>
        </div>
    
    </div>
  )
};

export default Contact;
