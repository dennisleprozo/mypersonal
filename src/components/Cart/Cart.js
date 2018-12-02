import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateCart } from '../../dux/reducer'
import { Alert, Button, Grid, Row, Col, Thumbnail } from "react-bootstrap";
import { Link } from "react-router-dom";

import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import './Cart.css'

// updateCart in dux
// take cart component
// mapStateToProps dux then render cart
 
class Cart extends Component {
  constructor(props) {
    super(props);
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
              // this.getTotal()
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
    axios.get('/api/getCart').then(res => {
      console.log(res.data)
        this.props.updateCart(res.data)
    })
  } 

  removeFromCart(cartId) {
    axios.delete(`/api/remove_from_cart/${cartId}`).then(res => {

        this.props.updateCart(res.data)
    }).then(this.getTotal())
}






  render() {
    // if (this.state.show) {
    let displayCart = this.props.cart.map((cartItem, i) => {





      return (
        <div>
            {/* <h1>{cartItem.name}</h1> */}
            
            <Grid>
                  <Row className='inline-display'>
                     <Col xs={4} md={2}>
                        <Thumbnail style={{padding:"20px"}} src={cartItem.img} alt="4x2">
                          <p>Front View of { cartItem.prod_name }</p>
                          <p> Price: { cartItem.price }</p>

                              <Button className="btn-props"
                                 onClick={() => this.handleSizes }
                                 bsStyle="">
                                 - 
                              </Button>

                              <Button className="btn-props"
                                 onClick={() => this.addToCart(cartItem.prod_id) }
                                 bsStyle="">
                                 +
                              </Button>
                              
                              <Button 
                                 onClick={() => this.addToCart(cartItem.prod_id) }
                                 bsStyle="primary">
                                 Delete
                              </Button>


                        </Thumbnail>
                     </Col>
                  </Row>
            </Grid>;

        </div>

      )
    }) 

      return (
        <div>
          
          <Alert bsStyle="info" onDismiss={this.handleDismiss}>
            <h3> Shopping Cart</h3>
            <h5> Subtotal: $ 0.00</h5>
            <h3>  </h3> 
            
              {displayCart}
            {/* Shop More or */}
                <Link to='/#/' className='nbsp'> Shop More </Link>
            {/* Stripe Checkout */}
                <StripeCheckout className='nbsp'
                name='Gothic Apparel'
                description='Thank you!'
                token={this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                />


          </Alert>
        </div>

      );
    // }
    // return <Button onClick={this.handleShow}>Stripe</Button>;
  }
}

function mapStateToProps(state) {
  const { cart } = state
  return { cart }
}

export default connect( mapStateToProps,  {updateCart} )(Cart);
