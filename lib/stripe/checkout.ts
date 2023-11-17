
import { loadStripe, Stripe } from '@stripe/stripe-js';

type LineItem = {
    price: string; 
    quantity: number;

  };
  


  let stripePromise: Promise<Stripe | null> | undefined;

  const getStripe = () =>{
    if(!stripePromise){
      stripePromise= loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')
    } else {
        stripePromise.then(stripe =>{
            console.log('Stripe Promise resolved to:', stripe);
        })
    }
    return stripePromise;
  }
  
  export async function checkout( lineItems : LineItem[]): Promise<void>  {
      const stripe = await getStripe()
      if (stripe) {
        await stripe.redirectToCheckout({
          mode: "payment",
          lineItems,
          successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: window.location.origin,
        });
      } else {
        console.error('Stripe not initialized');
      }
     
    
  }