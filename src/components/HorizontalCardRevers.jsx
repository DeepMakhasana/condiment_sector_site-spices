import React from 'react';
import { NavLink } from 'react-router-dom';

const HorizontalCardRevers = ({img, title, para, btnText, link}) => {
  return (
    <div className='container horizontal-card flex revers'>
      <div className="horizontal-card-info">
        <h2>{title}</h2>
        <p>{para}</p>
        <NavLink to={link} className='primary-btn'>{btnText}</NavLink>
      </div>
      <div className="horizontal-card-img">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default HorizontalCardRevers
