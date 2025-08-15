import React from 'react'

const ProjectCard = ({ img, title, description, onDetailsClick, onTitleClick }) => {
  return (
    <div className="card" style={{ 
      width: '250px', 
      margin: '20px 0',
      transition : '0.5s all ease'
     }}>
      <img src={img} className="card-img-top" alt={title} style={{ width: '95%', height: '180px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
      <div className="card-body" style={{ padding: '1rem' }}>
        <h5
          className="card-title"
          style={{ cursor: 'pointer', marginBottom: '0.5rem' }}
          onClick={onTitleClick}
        >
          <u style={{
            color : "black",
            userSelect : "none"
          }} draggable={false}>{title}</u>
        </h5>
        <p className="card-text" style={{ minHeight: '48px', marginBottom: '1rem', color : "black"}}>{description}</p>
        <button className="btn btn-primary" onClick={onDetailsClick}>Details</button>
      </div>
    </div>
  )
}

export default ProjectCard