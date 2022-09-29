import React from 'react'
import {Box, Grid, Button, Stack, styled} from "@mui/material";

const CustomButton = styled(Button)({
    position: 'absolute',
    bottom: '-40px',
    '&:hover':{
        backgroundColor: "#000"
    }
})


const Category = () =>{
    const image1 = 'https://images.unsplash.com/photo-1527627537292-b0c02afd7be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTgzfQ&w=392&q=70&auto=format&fit=crop&h=496'
    const image2 = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=392,h=496,fit=crop/tixlyvnpr7/nynne-schroder-unsplash-dOqw06G9g9C00pqx.jpg'
    const image3 = 'https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTgzfQ&w=392&q=70&auto=format&fit=crop&h=496'
    return(
        <Box>
            <Grid container width="74%" mx="auto" spacing={1} my={10}>
                <Grid item xs={12} sm={6} md={4}>
                    <Stack alignItems="center" position="relative">
                    <img
                     src={`${image1}`}
                     />
                        <CustomButton variant='mainButton' sx={{width:"40%"}}>Accessories</CustomButton>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4} position="relative">
                    <Stack alignItems="center">
                    <img
                        src={`${image2}`}
                    />
                        <CustomButton variant='mainButton' sx={{width:"40%"}}>Clothes</CustomButton>
                    </Stack>
                </Grid>

                <Grid  item xs={12} sm={6} md={4} position="relative">
                    <Stack alignItems="center" >
                    <img
                        src={`${image3}`}
                    />
                        <CustomButton variant="mainButton" sx={{width:"40%"}} >Toys</CustomButton>
                    </Stack>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Category