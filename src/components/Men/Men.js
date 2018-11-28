import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation'
import { Carousel } from 'react-bootstrap';


class Men extends Component {
   render() {
      return (
         <div>
             <Navigation />
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
            </Carousel>;


         </div>
      );
   }
}

export default Men;