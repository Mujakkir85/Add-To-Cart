import React from 'react';
import {Box, Button, Grid, Stack, Typography} from "@mui/material";

const Gallery = () => {
    const image1 = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=288,h=368,fit=crop/tixlyvnpr7/nynne-schroder-unsplash-dOqw03VXpgcWNz19.jpg'
    const image2 = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=288,h=368,fit=crop/tixlyvnpr7/nynne-schroder-unsplash-d95O6yxk60i501wP.jpg'
    const image3 = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=288,h=368,fit=crop/tixlyvnpr7/nynne-schroder-unsplash-A85gykoOBoHpW6Q6.jpg'
    const image4 = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=288,h=368,fit=crop/tixlyvnpr7/nynne-schroder-unsplash-m6Lz1oaOJRcXRKD7.jpg'
    return(
        <Box>
            <Stack alignItems="center" mt={7} spacing={4}>
                <Typography variant="h2">An inside look to our inspirational gallery...</Typography>
            </Stack>
            <Grid container width="74%" mx="auto" spacing={1} mt={7} mb={5}>
                <Grid item xs={12} sm={6} md={3}>
                    <Stack alignItems="center" position="relative">
                        <img
                            src={`${image1}`}
                        />
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={3} position="relative">
                    <Stack alignItems="center">
                        <img
                            src={`${image2}`}
                        />
                    </Stack>
                </Grid>

                <Grid  item xs={12} sm={6} md={3} position="relative">
                    <Stack alignItems="center" >
                        <img
                            src={`${image3}`}
                        />
                    </Stack>

                </Grid>
                <Grid  item xs={12} sm={6} md={3} position="relative">
                    <Stack alignItems="center" >
                        <img
                            src={`${image4}`}
                        />
                    </Stack>

                </Grid>
            </Grid>
            <Stack alignItems="center" mb={10}>
                <Button variant="mainButton"
                        sx={{ "&:hover": { backgroundColor: "#000" }, width:"30%" }}>Discover more</Button>
            </Stack>
        </Box>
    )
};

export default Gallery;
