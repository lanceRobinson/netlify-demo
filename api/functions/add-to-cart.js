/**
 * Add to Cart API Endpoint
 *
 * * Purpose: Add a single item to the cart
 * @param {string} cartId (Optional)
 * @param {string} itemId - Usually it's the product variant id
 * @param {number} quantity - Minimum 1
 *
 * @returns {object} cart that contains lines of items inside
 * See './utils/createCartWithItem' for the data structure
 *
 * Examples:
 *
 * If a cart does not exist yet,
 * ```
 * fetch('/.netlify/functions/add-to-cart', {
 *   method: 'POST',
 *   body: JSON.stringify({
 *     cardId: '', // cardId can also be omitted if desired
 *     itemId: 'Z2lkOi8vc2hvcGlmFyaWFudC8zOTc0NDEyMDEyNzY5NA==',
 *     quantity: 4
 *   })
 * })
 * ```
 *
 * Add item to an existing cart
 * ```
 * fetch('/.netlify/functions/add-to-cart', {
 *   method: 'POST',
 *   body: JSON.stringify({
 *     cartId: 'S9Qcm9kdWN0VmFyaWFudC8zOTc0NDEyMDEyNzY5NA',
 *     itemId: 'Z2lkOi8vc2hvcGlmFyaWFudC8zOTc0NDEyMDEyNzY5NA==',
 *     quantity: 4
 *   })
 * })
 * ```
 */

const { createCartWithItem } = require("./utils/createCartWithItem");
const { addItemToCart } = require("./utils/addItemToCart");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    };
  }

  const { cartId, itemId, quantity } = JSON.parse(event.body);

  if (cartId) {
    console.log("--------------------------------");
    console.log("Adding item to existing cart...");
    console.log("--------------------------------");

    const shopifyResponse = await addItemToCart({
      cartId,
      itemId,
      quantity,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse.cartLinesAdd.cart),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  } else {
    console.log("--------------------------------");
    console.log("Creating new cart with item...");
    console.log("--------------------------------");
    const createCartResponse = await createCartWithItem({
      itemId,
      quantity,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(createCartResponse.cartCreate.cart),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }
};
