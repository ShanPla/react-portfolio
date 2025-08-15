import React, { useEffect, useRef } from 'react'
import yuiyui from '../assets/yuiyui.jpg'

const Navigation = () => {
  const headerRef = useRef(null)
  const lastScrollTop = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      // Hide header if scrolling down, show if scrolling up
      if (currentScroll > lastScrollTop.current + 5) { // scroll down
        headerRef.current.style.top = "-80px"
      } else if (currentScroll < lastScrollTop.current - 5) { // scroll up
        headerRef.current.style.top = "0"
      }

      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className="main-header"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'top 0.3s ease'
      }}
    >
      <nav>
        <div className='logo-and-link'>
          <a href="#home">
            <img src={yuiyui} alt="Portfolio Logo" className="port-logo"/>
            <b>About Me</b>
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
