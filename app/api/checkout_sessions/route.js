import {NextResponse} from 'next/server';
import Stripe from 'stream';

const formatAmountForStripe=(amount) =>{
    return Math.round(amount*100)
}
export async function POST(req){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const params= {
        submit_type: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data:{
                currency:'usd',
                product_data:{
                    name:'Pro Subscription',
                },
                unit_amount: formatAmountForStripe(10),
            },
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      };
      const checkoutSession =
        await stripe.checkout.sessions.create(params);
}