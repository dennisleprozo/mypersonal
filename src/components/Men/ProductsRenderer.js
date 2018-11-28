import React from 'react';

export default (props) => {
   return (
      <div key={props.product}>
         <div>
            <img width="250px" height="250px" src={props.product.img} alt='img_front'></img>
            <img width="250px" height="250px" src={props.product.img2} alt='img2_back'></img>
         </div>

         <div>
            <h4> 
               Rating: { props.product.rating }
            </h4>
            <h4>
               Size: S M L XL
            </h4>
            <button>
               Add to cart
            </button>
         </div>

         <div>
            <h4>
               Name: { props.product.prod_name }
            </h4>
            <h4>
               Price: ${ props.product.price }
            </h4>
         </div>

      </div>
   )
}

