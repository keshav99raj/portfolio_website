import React, { useRef } from "react";
import {Link} from "react-scroll";
import './Nav.css';
import {useGSAP} from "@gsap/react";
import  gsap  from "gsap";
const Nav = () => {
  let menu=useRef();
  let mobile=useRef();
  useGSAP(()=>{
    let tl=gsap.timeline()
    tl.from("nav h1",{
      y:-100,
      duration:0.7,
      opacity:0
      
    })
    tl.from("nav ul li",{
       y:-100,
      duration:0.6,
      opacity:0,
      stagger:1
    })
  })
  return(
    <div className="">
        <nav>
           <h1>PORTFOLIO</h1>
           <ul className="desktopmenu">
            <Link to="home" activeClass='active'  smooth={true} duration={500} spy={true}><li>Home</li></Link>  
            <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>  
            <Link to="project" activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link>  
            <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>  
           </ul>
           
           <div className="hamburger" ref={menu} onClick={
             ()=>{
               mobile.current.classList.toggle("activemobile");
               menu.current.classList.toggle("changehamburger")
             }
           }>
              <div className="ham"></div>
              <div className="ham"></div>
              <div className="ham"></div>

           </div>


           <ul className="mobilemenu" ref={mobile}>
            <Link to="home" activeClass='active'  smooth={true} duration={500} spy={true}><li>Home</li></Link>  
            <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>  
            <Link to="project" activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link>  
            <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>  
           </ul>
          
        </nav>
        

    </div>
  )
};

export default Nav;
