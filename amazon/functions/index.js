const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors')
const stripe = require('stripe')
('sk_test_51J8tvhBaRV6ucR0Orz7SNBokievaXmc9sOb2BmDXLnJfh8knDJq5xTuNwqvc2sDLTpnmBE2ECBmshhgFYNMOv4HF00tI1mU1KU')


//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());




//API routes
app.get('/', (req, res)=> res.status(200).send('hello world'))
 
app.post('/payments/create', async (req,res) => {
    const total = req.query.total;
    console.log('Payment Request Recieved BOOM!', total)
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,// in cents
        currency: "usd",
    });
     

    //OK created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})


//Listen

exports.api = functions.https.onRequest(app)
//example endpoint
//  http://localhost:5001/clone-1f9bf/us-central1/api
 