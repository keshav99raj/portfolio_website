import React from "react"; 
import './Project.css';

import NewCard from "./NewCard";

import {useGSAP} from "@gsap/react";
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const Project = () => {
  useGSAP(()=>{
      gsap.from(".projects",{
      y:-200,
      duration:1.4,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".projects",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 30%",
        end:"top 20%"
      }
      
     })
      
   

  })
  
  return(
    <div className="projects" id="project">
         <h1 className="text-4xl sm:text-6xl mb-font-semibold text-center bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">
          My Projects
        </h1>
       <div className="slider">
           {/* <ProjectCard />
           <ProjectCard/> */}
           <NewCard/>
       </div>
    </div>
  )
};

export default Project;
