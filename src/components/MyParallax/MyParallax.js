import React from 'react';
import './MyParallax.css'

const MyParallax = () => (
   <div>
      <div className="pimg1">
         <div className="ptext">

            <span className="border"> ALL CLEARANCE ITEMS </span>
         </div>
      </div>
 
      <section className="section section-light">
         <h3>BUY ONE GET ONE FREE</h3>
         <h1>50% off</h1>
         <p>On selected products*</p>
         <h2 style={{border: "solid 1px"}}>SHOP NOW</h2>
      </section>

      <div className="pimg2">
         <div className="ptext">
            <span className="border"> BLACK FRIDAY EXTENDED SALE </span>
         </div>
      </div>
 
      <section className="section section-dark">
         <h2>CHOOSE THE BEST FOR YOUR PARTY OUTFIT</h2>
         <h4>Party season is upon us! Get ready for it with a rock 'n' roll attitude. Leather jackets, graphics and all-black everything. Electric guitar not included.</h4>
        
      </section>

      <div className="pimg3">
         <div className="ptext">
            <span className="border"> HOLIDAY GIFT GUIDE </span>
         </div>
      </div>
 
      <section className="section section-dark">
         <h3>IMPRESS YOUR NEAREST AND DEAREST WITH YOUR GIFT-GIVING SKILLS</h3>
         <h1>BUY ONE GET ONE 50% OFF</h1>
         <h2 style={{border: "solid 1px"}}>SHOP GIFTS</h2>
      </section>

        <section className="section section-footer">
         <p>HOME MEN WOMEN ACCESSORIES HOTLIST ABOUT</p>

         <p>Shipping Store Locator FAQ Login Sign Up Contact</p>
<hr />
         © 2018 Gothic Apparel. All Rights Reserved
      </section>
    

   </div>
  
)

export default MyParallax;