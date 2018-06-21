import React from 'react';
import {NavLink} from 'react-router-dom';

const dashboardNav = () => (
  <ul className="tabs">
    <li className="tab s3">
      <NavLink to="/surveys" activeClassName="active">Surveys</NavLink>
    </li>
    <li className="tab s3">
      <NavLink to="/drafts" activeClassName="active">Drafts</NavLink>
    </li>
  </ul>
);

export default dashboardNav;