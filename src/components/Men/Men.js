import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation'
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import ProductsRenderer from './ProductsRenderer';
import './Men.css'
import './ProductsRenderer.css'


class Men extends Component {
   constructor() {
      super();
      this.state = {
         products: []
      }
      this.addToCart = this.addToCart.bind(this)
   }

   componentDidMount() {
      axios.get('./api/get_all_products')
         .then(res => this.setState({products: res.data}))
         console.log(this.state.products)
   }

    addToCart(product){
       
      console.log('product', product)
      console.log(`Added ${product.prod_name} to order. `)

      axios.post('/add', product).then(res => {
         console.log(res.data)
      })
   }

   render() {

      let displayProducts = this.state.products.map( (product, i) => {
         return (
            <ProductsRenderer key={i} product={product} 
            addToCart={this.addToCart} />
         )
      })

      return (
         <div>
            {/* Nav Bar */}
             <Navigation />
             
             {/* Carousel */}
             <Carousel>
               <Carousel.Item>
                  <div className="carousel-item" responsive='true' style={{backgroundImage: 'url(Images/ems.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Formal Collection</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <div className="carousel-item" responsive='true' style={{backgroundImage: 'url(Images/yeezy-boost-700-mauve-wallpaper-4k.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Kicks</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" responsive='true' style={{backgroundImage: 'url(Images/watch.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Watches | Sunglasses and Accessories</h3>
                     </Carousel.Caption>
               </Carousel.Item>
            </Carousel>


         <h1 className="men-separator">MEN'S CLOTHING</h1>
         

         {/* Products renderer */}

         <div className="displayProducts">
            {displayProducts}
            
         </div>




         </div>
      );
   }
}

export default Men;