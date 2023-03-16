import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ButtonGroup from "@mui/material/ButtonGroup";
import Link from "next/link";
import {useAppContext} from "../state";
import {useEffect, useState} from "react";
import Image from 'next/image'
import Badge from "@mui/material/Badge";
import Script from "next/script";


var classes = {
    logo: {
        // margin: 'auto',
        height: 'auto',
        textAlign: 'center',
        maxWidth: 160,


    },
    button: {
        ':hover': {
            bgcolor: 'light gray', // theme.palette.primary.main
            color: 'black',
        },
    }
}

const MenuButtons = [
    'Cardio',
    'Strength',
    'Accessories',
    'Outlet',
    'Tools',

]
const MenuButton = ({name, index}) => {
    return (
        <Link href="/" key={`menu-button-link-${index}`}>
            <Button color="inherit" sx={classes.button} key={`menu-button-${index}`}>{name}</Button>
        </Link>
    )
}


export default function SiteMenu() {
    const {cartId, setCartId} = useAppContext();
    const [cartCount, setCartCount] = useState(0);

    useEffect(async () => {
        const localCart = cartId;

        if (localCart === null) {
            setCartCount(0)
        } else {
            setCartId(localCart);
            const response = await fetch("/.netlify/functions/get-cart-item-count", {
                method: "post",
                body: JSON.stringify({
                    cartId: localCart,
                }),
                headers: {"Content-Type": "application/json"},
            });
            const json = await response.json();
            console.log('get-cart-item-count response', json.cart.totalQuantity)
            setCartCount(json?.cart?.totalQuantity);
            return json;
        }


    }, []);

    console.log('Total Items in Cart', cartCount)
    return (
        <Box sx={{flexGrow: 1}}>
            <div position="static" color="transparent">
                <Toolbar sx={{justifyContent: "space-between", flexGrow: 1}}>
                    <Link href="/">
                        <img src="/logo.png" alt="logo" style={classes.logo}/>
                    </Link>
                    <ButtonGroup variant="text" aria-label="text button group" display="flex" color="inherit">
                        {MenuButtons.map((button,i) => <MenuButton name={button} index={i}/>)}
                    </ButtonGroup>
                    <ButtonGroup variant="text" color="inherit">
                            <div id={'search'} margin={'auto'}></div>

                        <Button color="inherit" sx={classes.button}>Login</Button>
                        <Link href="/cart">
                            <Badge badgeContent={cartCount} color="primary">
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                sx={classes.button}
                            >
                                <ShoppingCartIcon color="inherit"/>
                            </IconButton>
                            </Badge>
                        </Link>
                    </ButtonGroup>
                </Toolbar>
            </div>
        </Box>
    );
}