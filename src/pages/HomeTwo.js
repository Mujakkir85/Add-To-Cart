import React from 'react';
import {Box} from "@mui/material";
import Nav from "./Nav";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import{blue} from '@mui/material/colors'

const theme = createTheme({
    palette:{
        primary:{
            main: '#000',
            dark: '#fff',
        },
        background:{
            bg_main: '#f5f5f5',
            bg_second: '#FADAAC',
        }
    }
})

const MyComponent = () => {
    return (
        <ThemeProvider theme={theme}>
        <Box>
            <Nav></Nav>
        </Box>
        </ThemeProvider>
    );
};

export default MyComponent;
