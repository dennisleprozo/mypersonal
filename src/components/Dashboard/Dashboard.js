import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../dux/reducer";

import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl
} from "react-bootstrap";

import "../Dashboard/Dashboard.css";
import LandingPage from "../LandingPage/LandingPage";

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="dashboard-container">
          <Navbar className="navbar_font" style={{ margin: 0 }}>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="dashboard">GOTHIC APPAREL</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavDropdown
                noCaret
                id="dropdown-no-caret"
                eventKey={1}
                title="MEN"
              >
                <MenuItem eventKey={1.1}>
                  <i class="fa fa-angle-right" aria-hidden="true" /> FEATURED{" "}
                </MenuItem>
                <MenuItem eventKey={1.2}>
                  <i class="fa fa-angle-right" aria-hidden="true" /> TORSO{" "}
                </MenuItem>
                <MenuItem eventKey={1.3}>
                  <i class="fa fa-angle-right" aria-hidden="true" /> LEGS{" "}
                </MenuItem>
                <MenuItem eventKey={1.4}>
                  {" "}
                  <i
                    class="fa fa-angle-right"
                    aria-hidden="true"
                  /> ACCESSORIES{" "}
                </MenuItem>
              </NavDropdown>

              <NavDropdown
                noCaret
                id="dropdown-no-caret"
                eventKey={2}
                title="WOMEN"
              >
                <MenuItem eventKey={2.1}>FEATURED</MenuItem>
                <MenuItem eventKey={2.2}>TOP</MenuItem>
                <MenuItem eventKey={2.3}>LEGS</MenuItem>
                <MenuItem eventKey={2.4}>ACCESSORIES</MenuItem>
              </NavDropdown>
              <NavDropdown
                noCaret
                id="dropdown-no-caret"
                eventKey={3}
                title="ACCESSORIES"
              >
                <MenuItem eventKey={3.1}>FEATURED</MenuItem>
                <MenuItem eventKey={3.2}>MEN</MenuItem>
                <MenuItem eventKey={3.3}>WOMEN</MenuItem>
                <MenuItem eventKey={3.4}>ACCESSORIES</MenuItem>
              </NavDropdown>
              <NavDropdown
                noCaret
                id="dropdown-no-caret"
                eventKey={4}
                title="HOTLIST"
              >
                <MenuItem eventKey={4.1}>FEATURED</MenuItem>
                <MenuItem eventKey={4.2}>MEN</MenuItem>
                <MenuItem eventKey={4.3}>WOMEN</MenuItem>
                <MenuItem eventKey={4.4}>ACCESSORIES</MenuItem>
              </NavDropdown>

              <NavItem eventKey={5} href="http://localhost:3000/about">
                ABOUT{" "}
              </NavItem>
            </Nav>

            <Nav pullRight>
              <NavItem eventKey={6}>
                <form>
                  <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                  >
                    <FormControl
                      className="form_align"
                      type="text"
                      value={this.state.value}
                      placeholder="Search"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </form>
              </NavItem>

              <NavItem eventKey={7}>
                <span className="fa_search">
                  <i className="fas fa-search" />
                </span>
              </NavItem>

              <NavItem eventKey={8}>
                <span className="fa_cart">
                  <i className="fas fa-cart-arrow-down" placement="left" />
                </span>
              </NavItem>
            </Nav>
          </Navbar>

        <LandingPage />

        {/* sub navbar here */}
        {/* <div>
          
        </div> */}
      </div> //end div
    ); //return
  } //render
} //class

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

export default connect(
  mapStateToProps,
  { updateUser }
)(Dashboard);
