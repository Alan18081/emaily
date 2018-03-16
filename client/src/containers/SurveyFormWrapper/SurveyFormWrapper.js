import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';

import SurveyForm from '../SurveyForm/SurveyForm';

class SurveyFormWrapper extends Component {
  componentDidMount() {
    this.props.onInitDraft();
  }
  saveDraftHandler = () => {
    const draft = {
      ...this.props.form.values,
      draftId: this.props.draftId
    };
    this.props.onSaveDraft(draft);
  };
  render() {
    return (
      <SurveyForm
        loading={this.props.loading}
        onSubmit={this.props.onSubmit}
        onSave={() => this.saveDraftHandler(this.props.form.values)}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    form: state.form.surveyForm,
    draftId: state.drafts.createdDraftId,
    loading: state.drafts.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitDraft: () => dispatch(actions.setDraftId()),
    onSaveDraft: (draft) => dispatch(actions.addDraft(draft))
  }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SurveyFormWrapper));