import React, { Component } from 'react';
import '../LandingPage/Landing.css'
import { Carousel } from 'react-bootstrap';
import '../Dashboard/Dashboard.css';


class LandingPage extends Component {
   render() {
      return (
         // <div>
          <Carousel>
               <Carousel.Item>
                  <div className="carousel-item" style={{backgroundImage: 'url(Images/gal1.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Features London Winter Collection</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <div className="carousel-item" style={{backgroundImage: 'url(Images/gal2.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Party Night Dress</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/gal3.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Casual Taco Tuesday</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/men1.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Men Black Leather Classic Collection</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/gal4.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Comfortable Street Wear</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/gal6.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Women Athletic Pants And Bottoms</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/gal8.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Women Accessories Statement Jewelries</h3>
                     </Carousel.Caption>
               </Carousel.Item>    
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/gal5.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Gal Casual Riding Attire</h3>
                     </Carousel.Caption>
               </Carousel.Item>   
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/gal9.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Women Leather Collection L.A. Style</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/gagal10.png)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Studded Lady Leather Collection</h3>
                     </Carousel.Caption>
               </Carousel.Item>    

             </Carousel>

         // </div>
      );
   }
}

export default LandingPage;