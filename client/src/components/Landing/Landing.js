import React from 'react';
import {Redirect} from 'react-router-dom';
import './Landing.sass';

import LandingImageSrc from '../../assets/img/landing.png';

const landing = ({user}) => {
  const cssContainer = `container Landing__container`;
  return (
    <div className={cssContainer}>
      {user ? <Redirect to="/surveys"/> : null}
      <h1 className="Landing__title indigo-text">Emaily</h1>
      <h5>Collect feedback from your users</h5>
      <img src={LandingImageSrc} className="center-block responsive-img" alt="Landing image"/>
    </div>
  )
};

export default landing;