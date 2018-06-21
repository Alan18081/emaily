import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './SurveyFormReview.sass';

import Payments from '../Payments/Payments';
import Spinner from '../../components/UI/Spinner/Spinner';

import formFields from '../../containers/SurveyForm/formFields';
import * as actions from '../../actions';

class SurveyFormReview extends Component {
  state = {
    noCredits: false
  };
  closeModal = () => {
    this.setState({
      noCredits: false
    })
  };
  renderModal() {
    return (
      <div className="modal SurveyFormReview__modal">
        <div className="modal-content">
          <h4 className="pink-text">You don't have enough credits</h4>
          <p>Please, purchase more for transaction</p>
        </div>
        <div className="modal-footer">
          <Payments clicked={this.closeModal}/>
          <a
            className="waves-effect waves-green btn-flat"
            onClick={this.closeModal}
          >Close</a>
        </div>
      </div>
    );
  }
  renderItems() {
    return formFields.map(({name,label}) => {
      return (
        <div key={name}>
          <h5>{label}</h5>
          <i>{this.props.formValues[name]}</i>
        </div>
      )
    });
  }
  sendSurvey(formValues,history) {
    if(this.props.user.credits < 1) {
      console.log(this.props.user.credits);
      this.setState({
        noCredits: true
      });
    }
    else {
      this.props.onSubmitSurvey(formValues,history);
    }
  };
  render() {
    const {onCancel,formValues,history} = this.props;
    return (
      <div className="container">
        {this.state.noCredits ? this.renderModal() : null}
        <h2>Confirm your entries</h2>
        <div>
          {this.renderItems()}
        </div>
        <div className="SurveyFormReview__controls">
          <button onClick={onCancel} className="left yellow darken-3 btn">Back</button>
          <button
            className="right purple btn"
            onClick={() => this.sendSurvey(formValues,history)}
          >
            Send survey
            <i className="material-icons right">email</i>
          </button>
          {this.props.loading ? <Spinner size="4px" position="right"/> : null}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values,
    user: state.auth,
    loading: state.surveys.loading
  }
};

const dispatchToProps = dispatch => {
  return {
    onSubmitSurvey: (values,history) => dispatch(actions.submitSurvey(values,history))
  }
};

export default connect(mapStateToProps,dispatchToProps)(withRouter(SurveyFormReview));