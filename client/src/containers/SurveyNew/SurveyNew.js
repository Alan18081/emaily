import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import SurveyForm from '../SurveyForm/SurveyForm';
import SurveyFormReview from '../../components/SurveyFormReview/SurveyFormReview';

class SurveyNew extends Component {
  state = {
    showFormReview: false
  };
  toggleReviewForm = () => {
    this.setState(prevState => ({
      showFormReview: !prevState.showFormReview
    }));
  };
  renderContent() {
    if(this.state.showFormReview) {
      return <SurveyFormReview onCancel={this.toggleReviewForm}/>
    }
    else {
      return <SurveyForm onSubmit={this.toggleReviewForm}/>
    }
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);