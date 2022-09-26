import { Box, Stack } from '@mui/material';
import React from 'react';
import AllProduct from './AllProduct';
import Header from './Header';
import Basket from './Basket'
import data from '../data';

const Home = () => {

    const { products } = data
    return (
        <>
            <Header></Header>

            <Stack direction="row" spacing={4} sx={{ p: 4 }}>
                <AllProduct products={products}></AllProduct>
                <Basket></Basket>
            </Stack>

        </>
    );
};

export default Home;