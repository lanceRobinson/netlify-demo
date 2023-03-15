import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Cart from '@components/Cart';
import { useAppContext } from '../state';
import SiteMenu from "@components/SiteMenu";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function CartPage() {
  return (
    <>
      <Head>
        <title>Checkout Success</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <SiteMenu/>
      <Header />
      <main className="checkout-page">
        <article className="cart-page-content">
            <Paper>
                <h1>You have Successfully checked out</h1>
                <Button varient='text'>Buy More Stuff!</Button>
            </Paper>
        </article>
      </main>
      <Footer />
    </>
  );
}
