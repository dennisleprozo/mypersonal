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

// JOIN Product & Carts
  getTotal: (req, res) => {
    const db = req.app.get('db')
    const {users_id} = req.session.user

    db.total_price([users_id]).then(totalPrice => {
        res.status(200).send(totalPrice)
    })
  },

// JOIN Product & Carts with Users.users_id
  getCart: (req, res, next) => {
    const db = req.app.get('db')
    const { users_id } = req.session.user

    db.cart.get_user_cart([users_id]).then(cart => {
        res.status(200).send(cart)
    })
  },

// clears cart
  emptyCart: (req, res) => {
    const db = req.app.get('db')
    const { users_id } = req.session.user

    db.cart.empty_cart([users_id]).then(cart => {
        res.status(200).send(cart)
    }) 
  },

  removeFromCart: (req, res, next) => {
    const db = req.app.get('db');
    const { cartId } = req.params
    const { users_id } = req.session.user

    db.cart.remove_from_cart([users_id, cartId]).then(() => {
        db.cart.get_user_cart([users_id]).then(cart => {
            res.status(200).send(cart)
        })
    })
        .catch(err => console.log(err))
    },

    decreaseQuantity: (req, res) => {
        const db = req.app.get('db')

        let { cartId, quantity } = req.params
        const { users_id } = req.session.user
        db.decrease_quantity([quantity, cartId, users_id]).then(() => {
            db.cart.get_user_cart([users_id]).then(cart => {
                res.status(200).send(cart)
            })
        })
            .catch(err => console.log(err))
    },

    increaseQuantity: (req, res) => {
        const db = req.app.get('db');

        let { cartId, quantity } = req.params
        const { users_id } = req.session.user
        db.increase_quantity([quantity, cartId, users_id]).then(() => {
            db.cart.get_user_cart([users_id]).then(cart => {
                res.status(200).send(cart)
            })
        })
            .catch(err => console.log(err))
    },

} 