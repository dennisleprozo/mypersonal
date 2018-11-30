import React, { Component } from 'react';
import './ProductsRenderer.css';
import { Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { connect } from 'react-redux';
import { updateCart } from '../../dux/reducer'

class ProductsRenderer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         productItems: [],
         products: []
      }
      this.handleSizes = this.handleSizes.bind(this)
      this.addToCart = this.addToCart.bind(this)
   }

   componentDidMount() {
      axios.get('./api/getAll')
           .then(res => this.setState({
               products: res.data
            }))
   }

   handleSizes(e) {
// dropdown li of sizes
// set to state and send the value to size[]
   }

   addToCart(prodId) {
     axios.post(`/api/cart/${prodId}`).then(res => {
        this.props.updateCart(res.data)
     })
     console.log('prodId', prodId)
   }

   render() {
      let displayProducts = this.state.products.map( (product, i) => {
         console.log(product)
         return(
            <div className="bgcolor" key={i}>
               <Grid>
                  <Row>
                     <Col xs={8} md={6}>
                        <Thumbnail style={{padding:"30px"}} src={product.img} alt="242x200">
                           <h3>Front View of { product.prod_name }</h3>
                           <h3> Price: { product.price }</h3>

                           <p>
                              <Button 
                                 onClick={() => this.handleSizes }bsStyle="default">Sizes</Button>
                                 &nbsp;

                              <Button 
                                 onClick={() => this.addToCart(product.prod_id) }bsStyle="primary">Add to cart</Button>
                           </p>

                        </Thumbnail>
                     </Col>

                     <Col xs={8} md={6}>
                        <Thumbnail style={{padding:"30px"}} src={product.img2} alt="242x200">
                           <h3>Back View </h3>
                           <h4>Rating: { product.rating }</h4>
                           <p>Description: {product.description} </p>
                        </Thumbnail>
                     </Col>

                  </Row>
               </Grid>;

            </div>
         )
      })

     return (
      <div className='align' >
         {displayProducts}
      </div>
     )
   }
}

function mapStateToProps(state) {
   const { prod_id } = state
   return { prod_id }
}


export default connect(mapStateToProps, {updateCart}) (ProductsRenderer);