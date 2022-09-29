import React from 'react'
import {Box, Grid, Button, Stack} from "@mui/material";


const Category = () =>{
    const image1 = 'https://images.unsplash.com/photo-1527627537292-b0c02afd7be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTgzfQ&w=392&q=70&auto=format&fit=crop&h=496'
    const image2 = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=392,h=496,fit=crop/tixlyvnpr7/nynne-schroder-unsplash-dOqw06G9g9C00pqx.jpg'
    const image3 = 'https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTgzfQ&w=392&q=70&auto=format&fit=crop&h=496'
    return(
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Stack justifyContent="center">
                    <img
                        width="80%"
                     src={`${image1}`}
                     />
                        <Button variant='mainButton' sx={{width:"40%"}}>Accessories</Button>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Stack>
                    <img
                        width="80%"
                        src={`${image2}`}
                    />
                        <Button variant='mainButton' sx={{width:"40%"}}>Clothes</Button>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Stack>
                    <img
                        width="80%"
                        src={`${image3}`}
                    />
                        <Button variant="mainButton" sx={{width:"40%"}} >Toys</Button>
                    </Stack>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Category