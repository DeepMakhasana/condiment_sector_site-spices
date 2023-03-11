import React from 'react'
import { NavLink } from 'react-router-dom'

const Partnership = () => {
  return (
    <div className='partnership'>
      <h2>Ready to Start a Partnership?</h2>
      <p>We're proud of the quality of our culinary blends and want you to experience the drool-worthy taste yourself. Contact us today to receive samples or learn how we can create a custom recipe just for you.</p>
      <div style={{textAlign: "center"}}><NavLink to="/contact" className="secondary-btn">REQUEST INFORMATION</NavLink></div>
    </div>
  )
}

export default Partnership
