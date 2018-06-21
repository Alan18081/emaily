import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import SurveyFormWrapper from '../SurveyFormWrapper/SurveyFormWrapper';
import SurveyFormReview from '../SurveyFormReview/SurveyFormReview';

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
      return <SurveyFormWrapper onSubmit={this.toggleReviewForm}/>
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