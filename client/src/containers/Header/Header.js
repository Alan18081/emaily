import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Payments from '../Payments/Payments';

class Header extends Component {
  renderNav() {
    switch(this.props.auth) {
      case null:
        return '';
      case false:
        return (
          <li><a href="/auth/google">Login with Google</a></li>
        );
      default:
        return [
          <li key="1"><Payments/></li>,
          <li key="2" style={{margin: '0 10px'}}>{`${this.props.auth.credits} credits`}</li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="brand-logo"
          >Emaily</Link>
          <ul className="right">
            {this.renderNav()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
};


export default connect(mapStateToProps)(Header);