module.exports = {

   read: (req, res, next) => {
       const db = req.app.get("db");

       db.product.get_all_products().then(products => {
           res.status(200).send(products)
       })
   },

   addToCart: (req, res, next) => {
      const db = req.app.get('db');
      const { prodId } = req.params
      const { users_id } = req.session.user
      
      console.log(prodId, users_id)

      db.cart.add_to_cart([prodId, users_id, 1]).then(() => {
          db.cart.get_user_cart([users_id]).then(cart => {
              res.status(200).send(cart)
          })
      })
  },

} 