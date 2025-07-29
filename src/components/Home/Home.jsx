import React from "react";
import man from '../../assets/man.png';
import './Home.css';
import {useGSAP} from "@gsap/react";
import  gsap  from "gsap";
// import ReactTypingEffect from 'react-typing-effect';
import   { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-scroll";
const Home = () => {

  useGSAP(()=>{
      let tl1=gsap.timeline();
      tl1.from(".line1",{
        y:100,
        duration:1,
        opacity:0
      })
         tl1.from(".line2",{
        y:100,
        duration:1,
        opacity:0
      })
         tl1.from(".line3",{
        y:100,
        duration:1,
        opacity:0
      })
       gsap.from(".righthome img",{
          x:200,
          duration:1,
          opacity:0
       })
  })
  return (
    <div id="home">
         <div className="lefthome">

             <div className="homedetail">
                 <div className="line1">I'M</div>
                 <div className="line2">KESHAVRAJ SINGH</div>
                 <div className="line3">
                 
                   <Typewriter words={["WEB DEVELOPER","SOFTWARE DEVELOPER"]} typeSpeed={150}
                   
                   loop={0}
                   delaySpeed={50}
                   deleteSpeed={50}
                    
                    cursorStyle='|'/>
                  
                   <button>
                    <Link to="contact" smooth={true} duration={1000}>
                      Contact Me
                    </Link>
                   </button>
                 </div>
                
             </div>

        </div>
        <div className="righthome">
           <img src={man} alt="man logo"/>
        </div>
        
    </div>
  )
};

export default Home;
