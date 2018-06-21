import React from 'react';

import DraftList from '../../containers/DraftList/DraftList';
import DashboardNav from '../DashboardNav/DashboardNav';

const draftContainer = () => (
  <div>
    <DashboardNav/>
    <DraftList/>
  </div>
);

export default draftContainer;