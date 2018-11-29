import React from 'react';
import './ProductsRenderer';
import { Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap'

export default (props) => {
   return (
      <div className='align' key={props.product}>
         <Grid>
            <Row>
               <Col xs={8} md={6}>
                  <Thumbnail style={{padding:"30px"}} src={props.product.img} alt="242x200">
                  <h3>Front View of { props.product.prod_name }</h3>
                  <h3> Price: { props.product.price }</h3>
                  <p>
                     <Button bsStyle="default">Sizes</Button>
                        &nbsp;
                     <Button bsStyle="primary">Add to cart</Button>
                  </p>
                  </Thumbnail>
               </Col>
               <Col xs={8} md={6}>
                  <Thumbnail style={{padding:"30px"}} src={props.product.img2} alt="242x200">
                  <h3>Back View </h3>
                  <h4>Rating: { props.product.rating }</h4>
                  <p><h4>Description: {props.product.description} </h4> </p>
                  </Thumbnail>
               </Col>
            </Row>
         </Grid>;
</div>
   )
}

