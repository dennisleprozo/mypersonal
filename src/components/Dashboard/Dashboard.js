import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../dux/reducer";
import Navigation from '../Navigation/Navigation'
import LandingPage from "../LandingPage/LandingPage";
import "../Dashboard/Dashboard.css";
import MyParallax from "../MyParallax/MyParallax";

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
      this.state = {
        value: ""      
      };

      this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 8) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
          <Navigation />
          <LandingPage />

  {/* still work in progress */}
          <MyParallax />
      </div> //end div
    ); //return
  } //render
} //class

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

export default connect( mapStateToProps, { updateUser } )(Dashboard);
