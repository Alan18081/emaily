import React from 'react';

import classes from './Input.sass';

const input = ({input,meta,label,type,children}) => {
  const inputClasses = [
    classes.Input__field,
    meta.error && meta.touched ? classes.Input__field_invalid : ''
  ];
  let inputElem = null;
  switch(type) {
    case 'select':
      inputElem = <select {...input} className={inputClasses.join(' ')}>
        {children}
      </select>;
      break;
    case 'textarea':
      inputElem = <textarea {...input} className={inputClasses.join(' ')}></textarea>;
      break;
    default:
      inputElem = <input {...input} className={inputClasses.join(' ')}/>;
  }
  return (
    <div>
      <label>{label}</label>
      {inputElem}
      {meta.error && meta.touched && <span style={{color: 'red'}}>{meta.error}</span>}
    </div>
  )
};

export default input;