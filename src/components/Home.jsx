import React from 'react'
import space from '../assets/Space-Background.png'

const Home = () => {
  // Pick a random image on each render
  return (
    <div className="header-container">
      <div
        id = "home"
        className="image-background"
        style={{
          backgroundImage: `url(${space})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '50px'
        }}
      >
        <div className="page-text">
          <h2>Shan Platon</h2>
          <p>
            I am a student at De LaSalle Lipa who is currently studying Computer Science. <br />I am in my third year as of now and is working on this <br />portfolio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;