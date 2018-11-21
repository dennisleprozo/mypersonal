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
    return (
      <div>
        Dashboard
      </div>
    )
  }
}


function mapStateToProps() {
  return
}
export default connect (mapStateToProps)(Dashboard)