import React from 'react';

const surveyListItem = ({_id,body,dateSend,title,yes,no,delSurvey}) => (
  <div key={_id} className="card">
    <div className="card-content" style={{overflow: 'hidden'}}>
      <div className="left">
        <span className="card-title">{title}</span>
        <p>{body}</p>
      </div>
      <div className="right">
        <div>Sent on {new Date(dateSend).toLocaleDateString()}</div>
        <button className="right" style={{background: 'none',border:'none'}}>
          <i className="material-icons" onClick={() => delSurvey(_id)}>delete</i>
        </button>
      </div>
    </div>
    <div className="card-action">
      <span className="purple-text" style={{marginRight: '10px'}}>Yes: {yes}</span>
      <span className="purple-text" style={{marginRight: '10px'}}>No: {no}</span>
    </div>
  </div>
);

export default surveyListItem;