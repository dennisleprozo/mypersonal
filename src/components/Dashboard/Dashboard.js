import React, { Component } from 'react'
import { connect } from 'react-redux';

import { updateUser } from '../../dux/reducer';
import Login from '../Login/Login';

class Dashboard extends Component {

 

  render() {
    return (
      <div>
        Navbar
         <Login />
   
      </div>

    )//return
  }//render
}//class


function mapStateToProps(state) {
    const { user } = state
    return { user }
}

export default connect(mapStateToProps, { updateUser })(Dashboard)