import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateCart } from '../../dux/reducer'
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

// updateCart in dux
// take cart component
// mapStateToProps dux then render cart
 
class Cart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: true,
      total: 0
    };
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.getCart = this.getCart.bind(this);

  }
  handleDismiss() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  onToken = (token) => {
    token.card = void 0
    axios.post('/api/payment', { token, amount: Math.floor(this.state.total * 100) })
        .then(res => {
          console.log(res)
        axios.delete('/api/empty_cart')
            .then(() => {
              this.getCart()
              this.getTotal()
        })
    })
  }

  componentDidMount() {
    this.getTotal();
    this.getCart()
  }

  getTotal() {
    axios.get('/api/getTotal')
          .then(res => {
            console.log(res)
            this.setState({
              total: res.data[0].sum
            })
          })
  }

  getCart() {
    axios.get('/api/get_cart').then(res => {
        this.props.updateCart(res.data)
    })
  } 





  render() {
    if (this.state.show) {
      return (
        <Alert bsStyle="info" onDismiss={this.handleDismiss}>
          <h3> Shopping Cart</h3>
          <h4> Subtotal: $ 0.00   </h4>
          <h3> Shopping List </h3>
               <Link to='/#/'> 
                  Shop More 
               </Link>

              
              <StripeCheckout
              name='Gothic Apparel'
              description='Thank you!'
              token={this.onToken}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              />


        </Alert>
      );
    }
    return <Button onClick={this.handleShow}>Stripe</Button>;
  }
}

function mapStateToProps(state) {
  const { cart } = state
  return { cart }
}

export default connect( mapStateToProps,  {updateCart} )(Cart);
