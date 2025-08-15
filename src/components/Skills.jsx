import React from 'react'
import { SkillProg } from './SkillProg'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javaS.png'
import cpp from '../assets/c++.png'

const skills = {
  "HTML" : html,
  "CSS" : css,
  "JavaScript" : js,
  "C++" : cpp
} 

const Skills = () => {
  return (
      <div className="skills-bg">
        <section id="skills" className="skills-page">
          <h2>Skills</h2>
          <ul className="skills-list">
            {
              Object.entries(skills).map((skill , index) => {
                return(
                  <div key={index}>
                    <SkillProg skill={skill[0]} img={skill[1]}/>
                  </div>
                )
              })
            }
          </ul>
        </section>
    </div>
  )
}

export default Skills