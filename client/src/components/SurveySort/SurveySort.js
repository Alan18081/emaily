import React from 'react';

import './SurveySort.sass';

const surveySort = ({changed}) => (
  <select onChange={changed} className="SurveySort__select" defaultValue="new">
    <option value="new">Newest</option>
    <option value="old">Oldest</option>
  </select>
);

export default surveySort;