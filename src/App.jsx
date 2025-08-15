// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from './components/Home'
import './App.css'
import ProjectPage from './components/ProjectPage'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Skills from './components/Skills'

function App() {
  return (
    <div className='main-page'>
      <Navigation />
      <Home />
      <ProjectPage />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;
