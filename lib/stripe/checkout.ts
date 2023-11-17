
import { loadStripe, Stripe } from '@stripe/stripe-js';

type LineItem = {
    price: string; // Assuming price is a string, adjust as needed
    quantity: number;
    type: 'one_time' | 'subscription';
  };
  
  type CheckoutProps = {
    lineItems: LineItem[];
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
  
  async function handleSubscriptionCheckout(subscriptionItems: LineItem[]) {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscriptionItems }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const responseBodyText = await response.text(); // Read the response body as text
  
      console.log(responseBodyText, 'response body'); // Log the response body text
  
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error processing subscription checkout:', error);
    }
  }

  export async function checkout({ lineItems }: CheckoutProps): Promise<void>  {
      const stripe = await getStripe()
      
      if (!stripe) {
        console.error('Stripe not initialized');
        return;
      }

      const oneTimeItems = lineItems.filter(item =>item.type === 'one_time')
      .map(({ price, quantity }) => ({ price, quantity }));
      const subscriptionItems = lineItems.filter(item => item.type === 'subscription');

      if (oneTimeItems.length > 0) {
        await stripe.redirectToCheckout({
          mode: 'payment',
          lineItems: oneTimeItems,
          successUrl: `${window.location.origin}/replay?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: window.location.origin,
        });
      }
      if (subscriptionItems.length > 0) {
        await handleSubscriptionCheckout(subscriptionItems);
      }
      // if (stripe) {
      //   await stripe.redirectToCheckout({

      //     mode: "payment",
      //     lineItems,
      //     successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      //     cancelUrl: window.location.origin,
      //   });
      // } else {
      //   console.error('Stripe not initialized');
      // }
     
    
  }