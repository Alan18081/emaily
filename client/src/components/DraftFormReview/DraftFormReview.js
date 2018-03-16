import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import formFields from '../../containers/SurveyForm/formFields';
import * as actions from '../../actions';

const draftFormReview = ({onCancel, formValues, onSubmitSurvey,history}) => {
  const reviewFields = formFields.map(({name,label}) => {
    return (
      <div key={name}>
        <h5>{label}</h5>
        <i>{formValues[name]}</i>
      </div>
    )
  });
  return (
    <div className="container">
      <h2>Please, confirm your entries</h2>
      <div>
        {reviewFields}
      </div>
      <div>
        <button onClick={onCancel} className="left yellow darken-3 btn">Back</button>
        <button
          className="right purple btn"
          onClick={() => onSubmitSurvey(formValues,history)}
        >
          Send survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.draftForm.values
  }
};

const dispatchToProps = dispatch => {
  return {
    onSubmitSurvey: (values,history) => dispatch(actions.submitSurvey(values,history))
  }
};

export default connect(mapStateToProps,dispatchToProps)(withRouter(draftFormReview));