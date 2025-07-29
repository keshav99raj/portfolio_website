import { useState } from 'react'

import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Home from './components/Home/Home'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import { Element } from 'react-scroll'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
      <div>
         <Nav/>
         <Home/>
         <About/>
         <Project/>
         <Element name="contact">
           <Contact/>
         </Element>
         <Footer/>
      </div>
  )
}

export default App
