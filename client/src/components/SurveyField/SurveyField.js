import React from 'react';

const surveyField = ({input,meta : {error,touched},label}) => {
  const cssClasses = error && touched ? 'invalid' : '';
  return (
    <div style={{marginBottom: '20px'}}>
      <label>{label}</label>
      <input {...input} className={cssClasses}/>
      {error && touched && <span className="red-text">{error}</span>}
    </div>
  )
};

export default surveyField;