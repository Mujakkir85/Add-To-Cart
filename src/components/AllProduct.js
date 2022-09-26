import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import Product from './Product'

const AllProduct = ({ products }) => {

    return (
        <Box sx={{ bgcolor: "#e6ee9c", mx: "auto", my: '2' }}>
            <Stack direction="row" spacing={2} sx={{ pt: 2, pb: 2, pl: 2, pr: 2 }}>
                {
                    products.map((product) => <Product key={product.id} product={product}></Product>)
                }
            </Stack>
        </Box>
    )
}

export default AllProduct