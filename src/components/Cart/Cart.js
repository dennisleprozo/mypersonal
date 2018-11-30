import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

export default class Cart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: true
    };
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.state.show) {
      return (
        <Alert bsStyle="info" onDismiss={this.handleDismiss}>
          <h3>Shopping Cart</h3>
          <h4> Subtotal: $ 0.00</h4>
          <p>
            <Button> 
               <Link to='/#/'> 
                  Shop More 
               </Link>
            </Button>

            <Button bsStyle="info" onClick={this.handleDismiss}> 
               Checkout
            </Button>
          </p>
        </Alert>
      );
    }
    return <Button onClick={this.handleShow}>Stripe</Button>;
  }
}


