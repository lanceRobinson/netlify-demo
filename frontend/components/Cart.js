import { useState, useEffect } from "react";
import { useAppContext } from "../state";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";

export default function Cart() {
  const [showProducts, setShowProducts] = useState(true);
  const [products, setProducts] = useState([]);
  const [cost, setCost] = useState({});
  const { cartId, setCartId } = useAppContext();

  useEffect(() => {
    const localCart = cartId;

    let data;

    if (localCart === null) {
      setShowProducts(false);
    } else {
      setCartId(localCart);
      data = fetch(
        `${process.env.FUNCTIONS_ENDPOINT}/.netlify/functions/get-cart`,
        {
          method: "post",
          body: JSON.stringify({
            cartId: localCart,
          }),
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((response) => {
          setProducts(response?.cart?.lines.edges);
          setCost(response?.cart?.estimatedCost);
          return response;
        });
    }
  }, []);

  return (
    <div>
      {showProducts && products?.length > 0 ? (
        <div>
          <CartTable
            cartItems={products}
            cartId={cartId}
            removeItem={setProducts}
          />
          <CartTotal cost={cost} />
        </div>
      ) : (
        <div className="cart-page-message">
          No products to show! Get shopping!
        </div>
      )}
    </div>
  );
}
