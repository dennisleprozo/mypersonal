import React, { Component } from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import '../LandingPage/Landing.css'

import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

import '../Dashboard/Dashboard.css';
// import Images from '../Images'


class LandingPage extends Component {



   render() {
      return (
         <div>
            <Navbar className='sub-nav'>
               <Nav>
                  <NavItem eventKey={1} href="http://localhost:3000/shipping">Free shipping on orders over $150. </NavItem>
                  <NavItem eventKey={2} className='details'style={{fontWeight: "bold", textDecoration:"underline"}}>Details</NavItem>
               </Nav>
               
               <Nav pullRight>
                  <NavItem eventKey={3} href="http://localhost:3000/storelocator">Store Locator</NavItem>
                  <NavItem eventKey={4} href="http://localhost:3000/faq">FAQ</NavItem>
                  <NavItem eventKey={5} ><Login/></NavItem>
                  <NavItem eventKey={6} ><SignUp/></NavItem>
                  <NavItem eventKey={7} href="http://localhost:3000/contact">Contact</NavItem>
               </Nav>
            </Navbar>


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

             </Carousel>;

         </div>
      );
   }
}

export default LandingPage;