import React from 'react';
import {Link} from 'react-router-dom';

import SurveyList from '../../containers/SurveyList/SurveyList';

const dashboard = () => {
  return (
    <div className="container">
      <SurveyList/>
      <div className="fixed-action-btn horizontal">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  )
};

export default dashboard;