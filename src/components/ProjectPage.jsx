import React, { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import Modals from './Modals.jsx'
import retail from '../assets/retail.png'
import camera from '../assets/camera.png'
import glasses from '../assets/glasses.png'
import gray from '../assets/gray.png'
import ring from '../assets/Ring.jpg'
import linear from '../assets/Linear.jpg'
import orbit from '../assets/Orbit.jpg'

const images = [
  gray,
  ring,
  linear,
  orbit
]

const projects = [
  {
    img: retail,
    title: "Project 1",
    description: "IoT Retail Monitor System",
    modalContent: "This project is designed for retail businesses. It uses IoT to help monitor and manage stocks.",
    bg: gray
  },
  {
    img: camera,
    title: "Project 2",
    description: "Home Facial Recognition CCTV",
    modalContent: "A smart CCTV system with facial recognition for home security.",
    bg: ring
  },
  {
    img: glasses,
    title: "Project 3",
    description: "IoT Integrated Glasses for the Blind",
    modalContent: "Smart glasses that assist visually impaired users using IoT technology.",
    bg: linear
  }
]

const ProjectPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [bgImage, setBgImage] = useState(gray) // default background
  const [index , setIndex] = useState(0)
  console.log(index)
  const handleDetailsClick = (project, idx) => {
    setIndex(idx);
    setActiveProject(project);
    setShowModal(true);
  };

  const handleTitleClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length)
    setBgImage(images[randomIndex])
  }

  return (
    <div>
      <section
        className="second-div-bg"
        id="projects"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className="container">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              img={project.img}
              title={project.title}
              description={project.description}
              onDetailsClick={() => handleDetailsClick(project, idx)}
              onTitleClick={handleTitleClick}
            />
          ))}
        </div>
        <Modals
          show={showModal}
          onClose={() => setShowModal(false)}
          title={activeProject?.title}
          content={activeProject?.modalContent}
        />
      </section>
    </div>
  )
}

export default ProjectPage;