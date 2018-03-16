import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';

import SurveySort from '../../components/SurveySort/SurveySort';
import DraftListItem from '../../components/DraftListItem/DraftListItem';
import Spinner from '../../components/UI/Spinner/Spinner';

class DraftList extends Component {
  componentDidMount() {
    this.props.onFetchDrafts();
  }
  renderDrafts() {
    return this.props.drafts.map(draft => (
      <DraftListItem
        {...draft}
        key={draft._id}
        delDraft={this.props.onDeleteDraft}
        showDraftForm={() => this.props.onShowDraftForm(draft._id)}
      />
    ));
  }
  render() {
    return (
      <div>
        {this.props.drafts.length ? <SurveySort changed={this.props.onSortDrafts}/> : null}
        <div>
          {this.props.loading ? <Spinner position="center-block"/> : this.renderDrafts()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    drafts: state.drafts.items,
    loading: state.drafts.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchDrafts: () => dispatch(actions.fetchDrafts()),
    onDeleteDraft: (id) => dispatch(actions.deleteDraft(id)),
    onSortDrafts: () => dispatch(actions.sortDrafts()),
    onShowDraftForm: (id) => dispatch(actions.editDraft(id))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(DraftList);