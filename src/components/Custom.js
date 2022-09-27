import React from 'react'
import {Box, Button, styled} from "@mui/material";

const CustomButton = styled(Button)({
    width: 300,
    height: 40,
    backgroundColor: 'black'
})

const Custom = () => {

    return (
        <>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <CustomButton> Custom Button</CustomButton>
            </Box>
        </>
    )
}

export default Custom