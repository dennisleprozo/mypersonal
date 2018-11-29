module.exports = {

   read: (req, res, next) => {
       const db = req.app.get("db");

       db.product.get_all_products().then(products => {
           res.status(200).send(products)
       })
   },

   addToCart: (req, res, next) => {
      const db = req.app.get('db');
      const { prod_id } = req.params
      const { users_id } = req.session.user

      db.add_to_cart([prod_id, users_id, 1]).then(() => {
          db.get_user_cart([users_id]).then(cart => {
              res.status(200).send(cart)
          })
      })
  },

} 