import React, {Component} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import './App.sass';

import Header from '../Header/Header';
import Landing from '../../components/Landing/Landing';
import SurveyContainer from '../../components/SurveyContainer/SurveyContainer';
import SurveyNew from '../SurveyNew/SurveyNew';
import DraftContainer from '../../components/DraftContainer/DraftContainer';
import DraftEdit from '../DraftEdit/DraftEdit'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <Header/>
        <main className="container App__content">
          <Switch>
            <Route path="/" exact render={() => {
              return <Landing user={this.props.user}/>
            }}/>
            <Route path="/surveys" exact component={SurveyContainer}/>
            <Route path="/drafts" exact component={DraftContainer}/>
            <Route path="/surveys/new" component={SurveyNew}/>
            <Route path="/drafts/edit" component={DraftEdit}/>
          </Switch>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  }
};

export default withRouter(connect(mapStateToProps,actions)(App));