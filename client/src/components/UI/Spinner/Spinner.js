import React from 'react';

import classes from './Spinner.sass';

const spinner = ({size,position = ''}) => (
  <div
    style={{
      fontSize: size
    }}
    className={`${classes.loader} ${position}`}
  ></div>
);

export default spinner;