import React from 'react';
import done from './done.svg'

const Success = () => {
  return (
    <div className='error'>
      <img src={done} alt="Submit successfully" />
      <h2>Submit Successfully.</h2>
    </div>
  )
}

export default Success
