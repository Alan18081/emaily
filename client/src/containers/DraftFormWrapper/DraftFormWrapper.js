import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';

import DraftForm from '../DraftForm/DraftForm';

class DraftFormWrapper extends Component {
  changeDraftHandler = id => {
    this.props.onChangeDraft(id,this.props.form.values);
  };
  render() {
    return (
      <DraftForm
        loading={this.props.loading}
        onSubmit={this.props.onSubmit}
        onSave={() => this.changeDraftHandler(this.props.activeDraft._id)}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    form: state.form.draftForm,
    activeDraft: state.drafts.activeDraft,
    loading: state.drafts.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeDraft: (draft,values) => dispatch(actions.changeDraft(draft,values))
  }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DraftFormWrapper));