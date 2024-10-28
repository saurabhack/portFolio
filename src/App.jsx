import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Main from "./Components/Main"
import About from './Components/About'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Skills from "./Components/Skills"
import ContactMe from './Components/ContactMe'
import ProjectInfo from './Components/ProjectInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar/>
    <br></br>
      <Routes>
        <Route path='/' element={<Main/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/projects' element={<Projects/>}/>
       <Route path='/skills' element={<Skills/>}/>
       <Route path='/contactMe' element={<ContactMe/>}/>
       <Route path='/ProjectInfo/:id' element={<ProjectInfo/>}/>
      </Routes>
      <Footer/>
    </Router>
      
      
    </>
  )
}

export default App
