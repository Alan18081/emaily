import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import DraftFormWrapper from '../DraftFormWrapper/DraftFormWrapper';
import DraftFormReview from '../../components/DraftFormReview/DraftFormReview';

class DraftEdit extends Component {
  state = {
    showFormReview: false
  };
  componentDidMount() {
    !this.props.activeDraft ? this.props.history.replace('/drafts') : '';
  }
  toggleReviewForm = () => {
    this.setState(prevState => ({
      showFormReview: !prevState.showFormReview
    }));
  };

  renderContent() {
    if(this.state.showFormReview) {
      return <DraftFormReview onCancel={this.toggleReviewForm}/>
    }
    else {
      return <DraftFormWrapper onSubmit={this.toggleReviewForm}/>
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

const mapStateToProps = state => {
  return {
    activeDraft: state.drafts.activeDraft
  }
};

export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'draftForm'
})(DraftEdit)));