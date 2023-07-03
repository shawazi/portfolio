import React from 'react';
import './Error404.css';

const Error404 = () => {
  return (
    <>
      <div class="error-container">
        <h1 class="error-title">Error 404</h1>
        <p class="error-message">Page Not Found</p>
        <p class="error-joke">Why did the astronaut become a baker? Because he needed space-time doughnuts!</p>
        <img class="error-image" src="https://placeimg.com/400/400/nature" alt="Error 404" />
      </div>
    </>
  )
}

export default Error404