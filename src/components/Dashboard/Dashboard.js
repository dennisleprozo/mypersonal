import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

import { updateUser } from '../../dux/reducer';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  // mounts the userData first
  async componentDidMount() {
    let userData = await axios.get('./api/user-data')
    
    this.props.updateUser(userData.data)
  }

  render() {
    let { user } = this.props;
      console.log(this.props);
      console.log(user);

    return (
      <div>
        <h1>Dashboard</h1>
        <hr/>
          { user.user_name ? (
            <div>
              <p> User: { user.user_name } </p>
              <p> My photo: <img src= { user.picture } alt=""/></p>
              <br />
            </div>


            ) : (<p> Please log in </p>)
          }
        
        <a href='http://localhost:3030/auth/logout'>
          <button>
            Log out
          </button>
        </a>
      </div>

    )//return
  }//render
}//class


function mapStateToProps(state) {
    const { user } = state
    return { user }
}

export default connect(mapStateToProps, { updateUser })(Dashboard)