import React from 'react';
import './name.css';

const Name = () => {
  return (
      <div className={'nameContainer'}>
          <div className={'firstName'}>Max</div>
          <div className={'lastName'}>Fishman</div>
          <div className={'template'}>CURRICULUM VITAE</div>
      </div>
  )
};

export default Name;