import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import Header from '../Header/Header';
import Landing from '../../components/Landing/Landing';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <Header/>
        <Route path="/" exact component={Landing}/>
        {/*<Route path="/surveys" exact component={}/>*/}
        <Route path="/surveys/new"/>
      </div>
    )
  }
}

export default connect(null,actions)(App);