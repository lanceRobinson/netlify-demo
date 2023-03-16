import Link from 'next/link';
import React, {useEffect} from "react";
import {formatPrice} from "../utilityFunctions";
import FocusWrapper from "@components/FocusWrapper";

export default function ProductListing({ product }) {

    // useEffect(() => {
    //     console.log('ProductPageContent.js - product:', product)
    //
    //     if (product) {
    //         const body = {itemHandle: product.id}
    //         fetch("/.netlify/functions/getProduct", {
    //             method: "post",
    //             body: JSON.stringify(body),
    //             headers: {"Content-Type": "application/json"},
    //         }).then(p => console.log('[product].js',p)).catch(e => console.log(e));
    //
    //     }
    // }, [product]);



  let image = product.images.edges[0].node;
  return (

    <li className="product-card">
      <div className="product-card-frame">
        <img className="prodimg" src={image.src} alt={image.altText} />
      </div>
      <div className="product-card-text">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-description">
          {product.description.substring(0, 60)}...
        </p>
      </div>
      <Link href={`/product/${product.handle}`}>
        <a>
          <button>View Item {`>`} </button>
        </a>
      </Link>
    </li>

  );
}
