import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
 
class TakeMoney extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0
    }
  };

  onToken = (token) => {
    token.card = void 0
    axios.post(`/api/payment`, { token, amount: Math.floor(this.state.total * 100) }).then(res => {
        console.log(res)
        axios.delete(`/api/empty_cart`)
            .then(() => {
              this.getCart()
              this.getTotal()
            })
      })
  }

  render() {
      return (
        <div>
          <h1>StripeCheckout</h1>
            <StripeCheckout
              name='Gothic Apparel'
              description='Thank you!'
              token={this.onToken}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              />
         
        </div> 
      )
    }
}


export default TakeMoney;