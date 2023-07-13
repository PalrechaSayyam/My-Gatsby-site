import React from 'react'
import backgroundImage from '../images/retrosupply-jLwVAUtLOAQ-unsplash.jpg'

const MyComponent = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%' // Set the desired height
  };

  return <div style={divStyle}></div>;
};

export default MyComponent;