import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';


const Busket = () => {

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

                    <Stack direction="row" spacing={5} alignItems="center" pt={2}>
                        <Typography variant="h5">Frist items</Typography>
                        <Box>
                            <AddBoxIcon fontSize='large'></AddBoxIcon>
                            <IndeterminateCheckBoxIcon fontSize='large'></IndeterminateCheckBoxIcon>
                        </Box>
                        <Typography variant="5"> 6 × $240</Typography>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    )
}

export default Busket