module.exports = {

   read: (req, res, next) => {
       const db = req.app.get("db");

       db.product.get_all_products().then(products => {
           res.status(200).send(products)
       })
   },

   addToCart: (req, res, next) => {
      const db = req.app.get('db');
      const  prodId  = req.params.prodId;
      let qt = 1;

      const { users_id } = req.session.user
      
      console.log('prodId',prodId, 'users_id', users_id, 'are sent to Cart')

      db.cart.add_to_cart([prodId, users_id, qt]).then(() => {
          db.cart.get_user_cart([users_id]).then(cart => {
              res.status(200).send(cart)
          })
      })
   },

  getTotal: (req, res) => {
    const db = req.app.get('db')
    const {users_id} = req.session.user

    db.total_price([users_id]).then(totalPrice => {
        res.status(200).send(totalPrice)
    })
  },

  getCart: (req, res, next) => {
    const db = req.app.get('db')
    const { users_id } = req.session.user
    db.get_user_cart([users_id]).then(cart => {
        res.status(200).send(cart)
    })
  },

  emptyCart: (req, res, next) => {
    const db = req.app.get('db')
    const { users_id } = req.session.user

    db.empty_cart([users_id]).then(cart => {
        res.status(200).send(cart)
    })
  }


} 