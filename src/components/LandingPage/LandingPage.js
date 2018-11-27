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
                  <div className="carousel-item" style={{backgroundImage: 'url(Images/model_slide-1.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <p>Features London Summer Collection</p>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <div className="carousel-item" style={{backgroundImage: 'url(Images/model_slide-2.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/model_slide-3.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/model_slide-4.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/model_slide-5.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/model_slide-6.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/model_slide-7.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
               </Carousel.Item>    
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/model_slide-8.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
               </Carousel.Item>   
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/model_slide-9.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" style={{backgroundImage: 'url(Images/model_slide-10.jpg)'}} />
                     <Carousel.Caption>
                        <h1>GOTHIC APPAREL</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
               </Carousel.Item>    

             </Carousel>;

         </div>
      );
   }
}

export default LandingPage;