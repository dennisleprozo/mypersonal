import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation'
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import ProductsRenderer from './ProductsRenderer';
import './Men.css'


class Men extends Component {
   constructor() {
      super();
      this.state = {
         products: []
      }
   }

   componentDidMount() {
      axios.get('./api/get_all_products')
         .then(res => this.setState({products: res.data}))
         console.log(this.state.products)
   }



   render() {
      let displayProducts = this.state.products.map( (product, i) => {
         return (
            <ProductsRenderer key={i} product={product} />
         )
      })

      return (
         <div>
            {/* Nav Bar */}
             <Navigation />
             
             {/* Carousel */}
             <Carousel>
               <Carousel.Item>
                  <div className="carousel-item" style={{backgroundImage: 'url(Images/about-image-1.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Casual Riders Collection</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <div className="carousel-item" style={{backgroundImage: 'url(Images/about-image-2.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Everyday Commute Wash and Wear</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/about-image-4.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Jacket || Sunglasses and Accessories</h3>
                     </Carousel.Caption>
               </Carousel.Item>
            </Carousel>


         <h1 className="men-separator">MEN'S CLOTHING</h1>
         

         {/* Products renderer */}
         {displayProducts}




         </div>
      );
   }
}

export default Men;