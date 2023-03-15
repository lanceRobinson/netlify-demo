const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    console.log("--------------------------------");
    console.log("Creating Stripe Payment Intent...");
    console.log("--------------------------------");
    const { amount, currency } = JSON.parse(event.body);



    // Create a PaymentIntent with the order amount and currency
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 2000,
            currency: 'usd',
            automatic_payment_methods: {enabled: true},
        });
        // console.log('paymentIntent', paymentIntent)

        return {
            statusCode: 200,
            body: JSON.stringify({
                clientSecret: paymentIntent.client_secret,
            }),
        };
    }
    catch (e) {
        console.log('create-payment-intent.error', e)

    }

};