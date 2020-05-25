import React from 'react';
import './welcome.css';
import Name from "./Name/name";

const Welcome = () => {
  return(
      <div className={'welcomeContainer'}>
          <Name/>
      </div>
  )
};

export default Welcome;