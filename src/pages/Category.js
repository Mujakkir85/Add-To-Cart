import React from 'react'
import {Box, Grid} from "@mui/material";


const Category = () =>{
    const image1 = 'https://images.unsplash.com/photo-1527627537292-b0c02afd7be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTgzfQ&w=392&q=70&auto=format&fit=crop&h=496'
    const image2 = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=392,h=496,fit=crop/tixlyvnpr7/nynne-schroder-unsplash-dOqw06G9g9C00pqx.jpg'
    const image3 = 'https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTgzfQ&w=392&q=70&auto=format&fit=crop&h=496'
    return(
        <Box>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <Grid container justifyContent="center">
                     <img
                     src={`${image1}`}
                     />
                    <button>Accessories</button>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Grid container justifyContent="center">
                    <img
                        src={`${image2}`}
                    />
                    <button>Clothes</button>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Grid container justifyContent="center">
                    <img
                        src={`${image3}`}
                    />
                    <button>Toys</button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Category