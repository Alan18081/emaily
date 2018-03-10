import React from 'react';

import classes from './Landing.sass';

const landing = props => {
  const cssContainer = `container ${classes.Landing__container}`;
  return (
    <div className={cssContainer}>
      <h1 className="Landing__title indigo-text">Emaily</h1>
      <h5>Collect feedback from your users</h5>
    </div>
  )
};

export default landing;