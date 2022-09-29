import React from 'react';
import {Box, Stack, Typography} from "@mui/material";

const About = () => {
    return (
        <Box>
            <Stack direction="row">
                <Stack >
                    <Typography>OUR STORY</Typography>
                    <Typography variant='h2'>It's all about what they <br></br> love the most...</Typography>
                    <Typography variant='body1'>We are a boutique brand and online
                        store that specialises in all kinds of items for kids. Our goal is to help children grow and
                        feel comfortable in a world full of play, freedom, and fun.
                        We are dedicated to helping children of all ages enjoy the things that they love most.
                        At the end of the day,
                        we are about making the world a better place.</Typography>
                </Stack>

                <Stack>
                    <img
                    src={'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=496,h=560,fit=crop/tixlyvnpr7/nynne-schroder-unsplash-AR0QznlQ1vCZ8PqJ.jpg'}
                    />
                </Stack>
            </Stack>
        </Box>
    );
};

export default About;
