// import Link from 'next/link';
// import algoliasearch from 'algoliasearch/lite';
// import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import React, { useEffect } from 'react';
import Script from 'next/script'
// import SiteMenu from "@components/SiteMenu";
// import ButtonGroup from "@mui/material/ButtonGroup";



export default function Header() {
    // const searchClient = algoliasearch('PVXTT5VWPI', 'cb4894b0dd752c34ce8748d79c11021686585553a65841f5e8ba26c8705e60b7');

    // useEffect(() => {
    //
    //     const addScripts = async () => {
    //         const script = document.createElement('script');
    //         script.src = 'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js';
    //         // script.async = true;
    //
    //         await document.body.appendChild(script);
    //
    //         const inlineScript = document.createElement('script');
    //         inlineScript.innerHTML = `algoliasearchNetlify({
    //             appId: '${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}',
    //             apiKey: '${process.env.NEXT_PUBLIC_ALGOLIA_API_KEY}',
    //             siteId: '81d7b5da-7f5f-464e-ab48-5093bbd5a0e4',
    //             branch: 'main',
    //             selector: 'div#search',
    //             })`
    //
    //         document.body.appendChild(inlineScript);
    //
    //         return () => {
    //             document.body.removeChild(script);
    //             document.body.removeChild(inlineScript);
    //         }
    //     }
    //
    //     addScripts().catch(e => console.log(e))
    //
    // }, []);
  return (
    <header className="app-header">
      <Script
          src='https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js'
          strategy="beforeInteractive"
          onLoad={() => {
            algoliasearchNetlify({
              appId: 'PVXTT5VWPI',
              apiKey: '3a89a9c31ea536f9ed2c2034f5f899c8',
              siteId: '81d7b5da-7f5f-464e-ab48-5093bbd5a0e4',
              branch: 'main',
              selector: 'div#search',
              detached:true
            });
          }}
          strategy="lazyOnload"
          onError={(e) => console.log(e)}
      />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />

      {/*<nav className="main-nav">*/}
      {/*  <ul>*/}
      {/*    <li className="main-nav-item">*/}
      {/*      <Link href="/">*/}
      {/*        <a>All Products</a>*/}
      {/*      </Link>*/}
      {/*    </li>*/}
          {/* <li className="main-nav-item">
            <Link href="/cheeses"><a>Cheeses</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/meats"><a>Meats</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/boards"><a>Boards</a></Link>
          </li> */}
      {/*    <li className="main-nav-item">*/}
      {/*      <Link href="/cart">*/}
      {/*        <a className="cart cartLink">Shopping Cart</a>*/}
      {/*      </Link>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</nav>*/}
      {/*<InstantSearch searchClient={searchClient} indexName="netlify_main_all">*/}
      {/*  <SearchBox />*/}
      {/*  <Hits />*/}
      {/*</InstantSearch>*/}


    </header>
  );
}
