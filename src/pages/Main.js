import React from 'react';
import {Box, Button, Stack, Typography} from "@mui/material";


const Main = () => {
    const image = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/tixlyvnpr7/nynne-schroder-unsplash-A0xnbgZ4WxTJlN3R.jpg'
    return (
        <Box>
            <Stack sx={{position: 'relative'}}>
                <Box sx={{position: 'absolute', width: '30%', top: '260px' , left: '95px'}}>
            <Typography variant="h2" sx={{mb:'30px'}} >Shop Together</Typography>
            <Typography sx={{mb:'30px'}} variant='body1'>We want your child to feel comfortable, loved and free. Our organic and
                fairtrade clothing ensures that your baby can
                play and be happy</Typography>
            <Button  sx={{ "&:hover": { backgroundColor: "#000" }, width:"40%" }} variant="mainButton">VIEW MORE</Button>
                </Box>

                <Box>
                    <img
                        width="100%"
                        src={`${image}`}
                        srcSet={`${image}`}
                        alt={'title'}
                        // sx={{objectFit:'cover'}}
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default Main;
