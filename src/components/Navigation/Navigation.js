import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../dux/reducer";
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import "../Dashboard/Dashboard.css";
import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl
} from "react-bootstrap";

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
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
      <div className="dashboard-container">
          <Navbar collapseOnSelect className="navbar_font" style={{ margin: 0 }}>

            <Navbar.Header>
              <Navbar.Brand>
                <a href="/"> 
                  GOTHIC 
                  APPAREL
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />    
            </Navbar.Header>
            <Navbar.Collapse>
      {/* Men submenu */}
            <Nav>
              <NavDropdown
                noCaret
                id="dropdown-no-caret"
                eventKey={1}
                title="MEN"
              >
                <MenuItem eventKey={1.1}>
                 FEATURED{" "}
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.2}>
                    <Link to="/men">
                      TORSO
                    </Link>
                </MenuItem>

                <MenuItem eventKey={1.3}>
                    <Link to="/men">
                      LEGS{" "}
                    </Link>  
                </MenuItem>

                <MenuItem eventKey={1.4}>
                    <Link to="/men">
                      ACCESSORIES{" "}
                    </Link>  
                </MenuItem>
              </NavDropdown>

              <NavDropdown
                noCaret
                id="dropdown-no-caret"
                eventKey={2}
                title="WOMEN"
              >
                <MenuItem eventKey={2.1}>FEATURED</MenuItem>
                <MenuItem divider />
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
                <MenuItem divider />
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
                <MenuItem divider />
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
                {/* form */}
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
                  <Link to="/cart">
                   <i className="fas fa-cart-arrow-down" placement="left" />
                  </Link>
                </span>
              </NavItem>
 
            </Nav>
            </Navbar.Collapse>
          </Navbar>



        {/* sub navbar here */}
        <Navbar collapseOnSelect className='sub-nav'>
          <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="http://localhost:3000/shipping">Free shipping on orders over $150. </NavItem>
                    <NavItem eventKey={2} className='details'style={{fontWeight: "bold", textDecoration:"underline"}}>Details</NavItem>
                </Nav>
                
                <Nav pullRight>
                    <NavItem eventKey={3} href="http://localhost:3000/#/locator">Store Locator</NavItem>
                    <NavItem eventKey={4} href="http://localhost:3000/#/faq">FAQ</NavItem>
                    <NavItem eventKey={5}> <Login/> </NavItem>
                    <NavItem eventKey={6}> <SignUp/> </NavItem>
                    <NavItem eventKey={7} href="http://localhost:3000/#/contact">Contact</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

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
)(Navigation);
