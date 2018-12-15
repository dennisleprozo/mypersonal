import React from 'react';
import Navigation from '../Navigation/Navigation';
import './About.css'

const About = () => (
   <div>
      <Navigation />
      <div class="grid-container">
         <div class="item1"><img src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img bg"></img></div>
         {/* <div class="item2">ABOUT US</div> */}
         <div class="item3">
ABOUT US
 </div>  
         {/* <div class="item4">Right</div> */}
            <div class="item5"> {"     "}Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            <p> making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
            <p> 
               looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
               <p>
               discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.  We love to SHOP!
               </p> 
            </p>
            </p>
            </div>
      </div>
   </div>
);
   


export default About;