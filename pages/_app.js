import React from "react";
import {AppWrapper} from '../state.js'; // import based on where you put it
import '@styles/globals.css';
import Search from "@components/Search";


export function Application({Component, pageProps}) {
    return (
        <AppWrapper>
            <Search/>
            <Component {...pageProps} />
        </AppWrapper>
    );
}

export default Application;
