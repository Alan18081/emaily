import React from 'react';
import {Redirect} from 'react-router-dom';
import classes from './Landing.sass';

const landing = ({user}) => {
  const cssContainer = `container ${classes.Landing__container}`;
  return (
    <div className={cssContainer}>
      {user ? <Redirect to="/surveys"/> : null}
      <h1 className="Landing__title indigo-text">Emaily</h1>
      <h5>Collect feedback from your users</h5>
    </div>
  )
};

export default landing;