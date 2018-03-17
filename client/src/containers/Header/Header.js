import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Payments from '../Payments/Payments';
import LogoIcon from '../../assets/icons/email.svg';
import LogoutIcon from '../../assets/icons/logout.svg';
import GoogleIcon from '../../assets/icons/google-plus.svg';

import './Header.sass';

class Header extends Component {
  renderNav() {
    switch(this.props.auth) {
      case null:
        return '';
      case false:
        return (
          <li>
            <a href="/auth/google" className="Header__link">
              <GoogleIcon className="Header__icon Header__icon_margin"/>
              Login with Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1"><Payments/></li>,
          <li key="2" className="Header__credits">{`${this.props.auth.credits} credits`}</li>,
          <li key="3">
            <a href="/api/logout" className="Header__link">
              <LogoutIcon className="Header__icon"/>
            </a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="brand-logo Header__link"
          >
            <LogoIcon className="Header__icon Header__icon_margin"/>
            Emaily
          </Link>
          <ul className="right Header__list">
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