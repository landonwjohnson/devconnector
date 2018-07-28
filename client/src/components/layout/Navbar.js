import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';


class Navbar extends Component {


  onLogOutClick(e){
    e.preventDefault();
    this.props.logoutUser();
    this.props.logoutUser();
  }  
  render() {

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a onClick={this.onLogOutClick.bind(this)} className="nav-link"> 
                <img 
                    className="rounded-circle" 
                    style={{width: '25px', marginRight: '5px'}} 
                    src={user.avatar}
                    alt={user.name} 
                    title="You must have a Gravatar connected to your email to display an image" 
                />
            </a>
            {''}
            Logout
        </li>
        </ul>
    );


    const guestLinks = (
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link to="/register" className="nav-link">Sign Up</Link>
        </li>
        <li className="nav-item">
            <Link to="/login" className="nav-link" href="login.html">Login</Link>
        </li>
        </ul>
    );


    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
        <Link to="/profiles" className="navbar-brand">Chads Place ;)</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/profiles" className="nav-link"> 
                    Developers
                </Link>
            </li>
            </ul>

            {isAuthenticated ? authLinks : guestLinks}


        </div>
        </div>
    </nav>
    )
  }
}


Navbar.propTypes = {
   logoutUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired 
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        errors: state.errors
    }
}

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile }) (Navbar);
