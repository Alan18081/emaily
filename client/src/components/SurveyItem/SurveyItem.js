import React from 'react';

import './SurveyItem.sass';

import ProgressBar from '../UI/ProgressBar/ProgressBar';

const surveyListItem = ({_id,body,dateSend,title,yes,no,delSurvey,recipients}) => (
  <div key={_id} className="card">
    <div className="card-content SurveyItem__content">
      <div className="left">
        <span className="card-title">{title}</span>
        <p>{body}</p>
      </div>
      <div className="right">
        <div>Sent on {new Date(dateSend).toLocaleDateString()}</div>
        <button className="right SurveyItem__btn">
          <i className="material-icons" onClick={() => delSurvey(_id)}>delete</i>
        </button>
      </div>
    </div>
    <div className="card-action">
      <ProgressBar label="Yes" color="green" chunk={yes} full={recipients.length}/>
      <ProgressBar label="No" color="red" chunk={no} full={recipients.length}/>
    </div>
  </div>
);

export default surveyListItem;