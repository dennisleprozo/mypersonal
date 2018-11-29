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
                        <h3>London Winter Collection</h3>
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
                        <h3>Men's Casual Jacket and Coates</h3>
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
               <div className="carousel-item" style={{backgroundImage: 'url(Images/gal6.png)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Rugged Evening Wear</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/men7.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Business Casual Attire for Men and Women</h3>
                     </Carousel.Caption>
               </Carousel.Item>    
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/gal5.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Gal Casual Attire</h3>
                     </Carousel.Caption>
               </Carousel.Item>   
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/accs9.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Women's Accessories</h3>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/gal10.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <h3>Ladies Leather Collection</h3>
                     </Carousel.Caption>
               </Carousel.Item>    

             </Carousel>

         // </div>
      );
   }
}

export default LandingPage;