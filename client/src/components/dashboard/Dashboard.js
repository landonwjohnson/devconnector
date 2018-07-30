import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profileActions'

class Dashboard extends Component {

  componentDidMount(){
      this.props.getCurrentProfile();
  }
    
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}


export default connect(null, {getCurrentProfile})(Dashboard);