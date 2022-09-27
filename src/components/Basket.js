import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';


const Busket = ({addToCart, cartItems, removeItem}) => {

    //console.log(cartItems)
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 450,
                    height: 360,
                },
                bgcolor: "#81d4fa "
            }}
        >
            <Paper elevation={3}>
                <Box sx={{ p: 2 }}>
                    <Typography variant="h4">Cart Items</Typography>
                    {
                        cartItems.map((item)=>
                    <Stack display="flex" direction="row" spacing={5} alignItems="center" pt={2}>
                        <Typography flexGrow="1" variant="h5">{item.name}</Typography>
                        <Box flexGrow="1">
                            <AddBoxIcon fontSize='large' onClick={()=>addToCart(item)}></AddBoxIcon>
                            {' '}
                            <IndeterminateCheckBoxIcon fontSize='large' onClick={()=>removeItem(item)}></IndeterminateCheckBoxIcon>
                        </Box>
                        <Typography flexGrow="1" variant="5"> {item.qty} x ${item.price.toFixed(2)} </Typography>
                    </Stack>
                        )
                    }
                </Box>
            </Paper>
        </Box>
    )
}

export default Busket