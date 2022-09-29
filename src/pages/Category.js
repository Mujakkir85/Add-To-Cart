import React from 'react'
import {Box, Grid, Button, Stack, styled, Typography} from "@mui/material";

const CustomButton = styled(Button)({
    position: 'absolute',
    bottom: '-40px',
    '&:hover':{
        backgroundColor: "#000"
    },
    width: '40%'
})


const Category = () =>{
    const image1 = 'https://images.unsplash.com/photo-1527627537292-b0c02afd7be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTgzfQ&w=392&q=70&auto=format&fit=crop&h=496'
    const image2 = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=392,h=496,fit=crop/tixlyvnpr7/nynne-schroder-unsplash-dOqw06G9g9C00pqx.jpg'
    const image3 = 'https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTgzfQ&w=392&q=70&auto=format&fit=crop&h=496'
    return(
        <Box>
            <Stack alignItems="center" mt={7} spacing={4}>
               <Typography variant="h2">Explore your baby's needs...</Typography>
                <Stack alignItems="center">
               <Typography variant="body1" >From baby accessories to children's clothing, there's something for
               </Typography>
               <Typography variant='body1'>everyone in our store.</Typography>
                </Stack>
            </Stack>
            <Grid container width="74%" mx="auto" spacing={1} mt={7} mb={15}>
                <Grid item xs={12} sm={6} md={4}>
                    <Stack alignItems="center" position="relative">
                    <img
                     src={`${image1}`}
                     />
                        <CustomButton variant='mainButton' >Accessories</CustomButton>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4} position="relative">
                    <Stack alignItems="center">
                    <img
                        src={`${image2}`}
                    />
                        <CustomButton variant='mainButton'>Clothes</CustomButton>
                    </Stack>
                </Grid>

                <Grid  item xs={12} sm={6} md={4} position="relative">
                    <Stack alignItems="center" >
                    <img
                        src={`${image3}`}
                    />
                        <CustomButton variant="mainButton" >Toys</CustomButton>
                    </Stack>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Category