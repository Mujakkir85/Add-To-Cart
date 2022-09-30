import React from 'react';
import {Box, Button, Stack, styled, Typography} from "@mui/material";

const CustomFooter = styled(Box)(({theme}) =>({
    height: 300,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.textColor.second,
}))

const Footer = () => {
    return (
        <CustomFooter>
            <Stack
                mx="100px"
                py="100px"
                direction="row"
                spacing={4}
            >
                <Box flexGrow={1}>
                    <Typography variant="h4">Address</Typography>
                    <Typography variant="h6">3721 Single Street <br></br> Quincy, MA 02169</Typography>
                </Box>

                <Box flexGrow={1}>
                    <Typography variant="h4">Contacts</Typography>
                    <Typography variant="h6">123 456 7890 <br></br> info@tixly.com</Typography>
                </Box>

                <Box flexGrow={1}>
                    <Typography variant="h4">FAQ</Typography>
                    <Typography variant="h6">Shipping & Return policy</Typography>
                </Box>

                <Box flexGrow={3} >
                    <Typography variant="h6">Subscribe to our newsLatter</Typography>
                    <Button
                        variant="mainButton"
                        sx={{
                            bgcolor: "primary.dark",
                            color: "primary.main",
                            width: "25%",
                            '&:hover':{
                                backgroundColor: "#fff"
                            }
                            //"&:hover": { backgroundColor: "#fff" }
                    }}>
                        Submit</Button>
                </Box>
            </Stack>
        </CustomFooter>

    );
};

export default Footer;
