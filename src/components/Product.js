import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Product = ({ product, addToCart }) => {
    //console.log(product)
    return (
        <Card sx={{ maxWidth: 315 }}>
            <CardMedia
                component="img"
                height="200"
                image={`${product.image}`}
                alt="green iguana"
                sx={{objectFit:'cover'}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    PRICE : ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium"
                        variant="contained"
                        onClick={()=> addToCart(product)}
                >Add To Cart</Button>
            </CardActions>
        </Card>
    );
};

export default Product;