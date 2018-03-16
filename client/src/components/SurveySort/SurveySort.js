import React from 'react';

const surveySort = ({changed}) => (
  <select onChange={changed} style={{display: 'block', width: '100px'}}>
    <option value="new">Newest</option>
    <option value="old" selected>Oldest</option>
  </select>
);

export default surveySort;