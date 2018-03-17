import React from 'react';
import {Link} from 'react-router-dom';

import './DraftItem.sass';

const draftListItem = ({_id,body,dateSend,title,yes,no,delDraft,showDraftForm}) => (
  <div key={_id} className="card">
    <div className="card-content DraftItem__content">
      <div className="left">
        <span className="card-title">{title || <span className="DraftItem__placeholder">Empty title</span>}</span>
        <p>{body || <span className="DraftItem__placeholder">Empty body</span>}</p>
      </div>
      <div className="right">
        <button className="right DraftItem__btn">
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