import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.onFetchSurveys();
  }
  renderSurveys() {
    console.log(this.props.surveys);
    return this.props.surveys.map(({_id,title,body,dateSend,yes,no}) => (
      <div key={_id} className="card">
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{body}</p>
          <p className="right">
            Sent on {new Date(dateSend).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <span className="purple-text" style={{marginRight: '10px'}}>Yes: {yes}</span>
          <span className="purple-text" style={{marginRight: '10px'}}>No: {no}</span>
        </div>
      </div>
    ));
  }
  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    )
  }
}

const mapStateToProps = ({surveys}) => ({
    surveys
});

const mapDispatchToProps = dispatch => ({
  onFetchSurveys: () => dispatch(actions.fetchSurveys())
});

export default connect(mapStateToProps,mapDispatchToProps)(SurveyList);