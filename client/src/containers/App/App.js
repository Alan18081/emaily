import React, {Component} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import Header from '../Header/Header';
import Landing from '../../components/Landing/Landing';
import Dashboard from '../../components/Dashboard/Dashboard';
import SurveyNew from '../../containers/SurveyNew/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <Header/>
        <main style={{marginTop: '30px'}}>
          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/surveys" exact component={Dashboard}/>
            <Route path="/surveys/new" exact component={SurveyNew}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default withRouter(connect(null,actions)(App));