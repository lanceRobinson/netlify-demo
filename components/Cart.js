import { useState, useEffect } from "react";
import { useAppContext } from "../state";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
import CheckOutForm from "./CheckOutForm";
import Grid from "@mui/material/Grid";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Cart() {
  const [showProducts, setShowProducts] = useState(true);
  const [products, setProducts] = useState([]);
  const [cost, setCost] = useState({});
  const { cartId, setCartId } = useAppContext();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(async () => {
    const localCart = cartId;

    if (localCart === null) {
      setShowProducts(false);
    } else {

      setCartId(localCart);
      const response = await fetch("/.netlify/functions/get-cart", {
        method: "post",
        body: JSON.stringify({
          cartId: localCart,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      setProducts(json?.cart?.lines.edges);
      setCost(json?.cart?.estimatedCost);

      fetch("/.netlify/functions/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount:100, currency:'usd' }),
      })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret))
          .catch(e => console.log('error creating payment intent',e));

      return json;
    }
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {showProducts && products?.length > 0 ? (
        <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
        >
          <Grid item xs={7}>
          <CartTable
            cartItems={products}
            cartId={cartId}
            removeItem={setProducts}
          />
          <CartTotal cost={cost} />
          </Grid>
          <Grid item xs={4}>
          {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckOutForm />
              </Elements>
          )}
          </Grid>
        </Grid>
      ) : (
        <div className="cart-page-message">
          No products to show! Get shopping!
        </div>
      )}
    </div>
  );
}
