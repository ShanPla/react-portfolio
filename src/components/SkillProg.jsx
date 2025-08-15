import React from 'react'

export const SkillProg = ({ skill , img }) => {
  return (
    <li>
      {skill}
      <img src={img} alt="HTML Logo" className="skill-icon" />
    </li>
  )
}


