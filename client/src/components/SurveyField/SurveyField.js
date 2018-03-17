import React from 'react';

import './SurveyField.sass';

const surveyField = ({input,meta : {error,touched},label}) => {
  const cssClasses = error && touched ? 'invalid' : '';
  return (
    <div className="SurveyField">
      <label>{label}</label>
      <input {...input} className={cssClasses}/>
      {error && touched && <span className="red-text">{error}</span>}
    </div>
  )
};

export default surveyField;