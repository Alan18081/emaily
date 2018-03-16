import React from 'react';
import {Link} from 'react-router-dom';

const draftListItem = ({_id,body,dateSend,title,yes,no,delDraft,showDraftForm}) => (
  <div key={_id} className="card">
    <div className="card-content" style={{overflow: 'hidden'}}>
      <div className="left">
        <span className="card-title">{title || <span style={{color: 'gray'}}>Empty title</span>}</span>
        <p>{body || <span style={{color: 'gray'}}>Empty body</span>}</p>
      </div>
      <div className="right">
        <button className="right" style={{background: 'none',border:'none'}}>
          <i className="material-icons" onClick={() => delDraft(_id)}>delete</i>
        </button>
      </div>
    </div>
    <div className="card-action">
      <Link to="/drafts/edit">
        <button onClick={showDraftForm} className="btn purple">Edit</button>
      </Link>
    </div>
  </div>
);

export default draftListItem;