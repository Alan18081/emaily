import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import SurveyListItem from '../../components/SurveyItem/SurveyItem';
import SurveySort from '../../components/SurveySort/SurveySort';
import Spinner from '../../components/UI/Spinner/Spinner';

class SurveyList extends Component {
  componentDidMount() {
    this.props.onFetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys.map((survey) => (
      <SurveyListItem key={survey._id} {...survey} delSurvey={this.props.onDeleteSurvey}/>
    ));
  }
  sortSurveyHandler = e => {
    const value = e.target.value;
    this.props.onSortSurvey(value);
  };
  render() {
    return (
      <div>
        {this.props.surveys.length ? <SurveySort changed={this.sortSurveyHandler}/> : null}
        <div>
          {this.props.loading ? <Spinner position="center-block"/> : this.renderSurveys()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({surveys}) => ({
  surveys: surveys.items,
  loading: surveys.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchSurveys: () => dispatch(actions.fetchSurveys()),
  onDeleteSurvey: (id) => dispatch(actions.deleteSurvey(id)),
  onSortSurvey: (type) => dispatch(actions.sortSurveys(type))
});

export default connect(mapStateToProps,mapDispatchToProps)(SurveyList);