

const { postToShopify } = require("./utils/postToShopify");

exports.handler = async (event) => {
  const { cartId } = JSON.parse(event.body);

  try {
    console.log("--------------------------------");
    console.log("Retrieving existing cart details");
    console.log("--------------------------------");
    const shopifyResponse = await postToShopify({
      query: `
         query getCart($cartId: ID!) {
           cart(id: $cartId) {
             id
             totalQuantity
           }
         }
       `,
      variables: {
        cartId,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    };
  } catch (error) {
    console.log(error);
  }
};
