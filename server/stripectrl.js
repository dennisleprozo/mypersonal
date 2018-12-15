require ('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);

module.exports = {
   handlePayment: (req, res) => {
      const { amount, token:{id} } = req.body //destruct
      stripe.charges.create(                 //create new
         {
            amount: amount,
            currency: "usd",
            source: id,
            description: "Charge it to Stripe Test..."
         },


         (err, charge) => {                  //err handling 
            if(err){
               console.log(err)
               return res.status(500).send(err) //webserver err
            } else {
               console.log(charge)
               return res.status(200).send(charge)
            }
         }
      )
   }
}

