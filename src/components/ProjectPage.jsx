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
    title: "First Project",
    description: "IoT Retail Monitor System",
    modalContent: "This project is specifically designed for retail businesses that need efficient and accurate stock management. It uses Internet of Things (IoT) technology to continuously track product quantities, monitor shelf status in real-time, and send alerts when items are running low. This automation helps reduce human error, improves inventory accuracy, and ensures that businesses can make timely restocking decisions.",
    bg: gray
  },
  {
    img: camera,
    title: "Second Project",
    description: "Home Facial Recognition CCTV",
    modalContent: "This is an intelligent CCTV surveillance system built for enhancing home security. It integrates facial recognition technology with IoT connectivity to identify individuals entering the premises. The system can differentiate between registered household members and unknown visitors, automatically notifying the homeowner of potential intrusions. It offers a safer and more efficient alternative to traditional security cameras by providing instant alerts and detailed identity logs.",
    bg: ring
  },
  {
    img: glasses,
    title: "Third Project",
    description: "IoT Integrated Glasses for the Blind",
    modalContent: "These smart glasses are designed to assist people with visual impairments in navigating their surroundings more safely and independently. Using IoT-connected sensors and cameras, the glasses detect objects, obstacles, and landmarks in the wearer’s path. They provide real-time audio feedback or vibrations to guide the user, helping them identify what is ahead and avoid potential hazards. This technology aims to improve mobility, independence, and quality of life for visually impaired individuals.",
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