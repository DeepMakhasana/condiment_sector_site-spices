import React from 'react';
import pageNotFound from './images/page-not-found.svg';

const Error = () => {
  return (
    <div>
      <div className="error">
        <img src={pageNotFound} alt="404 Page Not Found"/>
        <h2>Page Not Found!</h2>
      </div>
    </div>
  )
}

export default Error
