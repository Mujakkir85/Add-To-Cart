import { Box, Stack } from '@mui/material';
import React from 'react';
import AllProduct from './AllProduct';
import Header from './Header';
import Basket from './Basket'
import data from '../data';
import {useState} from "react";
import Custom from "./Custom";

const Home = () => {

    const { products } = data;
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        const productExist = cartItems.find((item)=> item.id === product.id)

        if(productExist){
            setCartItems(
                cartItems.map((item)=>
                    item.id === product.id ? {...productExist, qty: productExist.qty + 1}: item)
            )
        }
        else{
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
    }

    const removeItem = (product) => {
        //console.log('clicked')
        const productCheck = cartItems.find((item)=>item.id === product.id)
        //console.log(productCheck)
        if(productCheck.qty === 1){
            setCartItems(cartItems.filter((item)=> item.id !== product.id))
        }
        else{
            setCartItems(
                cartItems.map((item)=>
                    item.id === product.id ? {...productCheck, qty: productCheck.qty - 1}: item)
            )
        }
    }

    return (
        <>
            <Header countCartItems={cartItems.length}></Header>

            <Stack direction="row" spacing={4} sx={{ p: 4 }}>
                <AllProduct products={products} addToCart={addToCart}></AllProduct>
                <Basket addToCart={addToCart} removeItem={removeItem} cartItems={cartItems}></Basket>
            </Stack>

            <Custom></Custom>

        </>
    );
};

export default Home;