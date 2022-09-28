import React from 'react';
import {Box} from "@mui/material";
import Nav from "./Nav";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import{blue} from '@mui/material/colors'
import Main from "./Main";

const theme = createTheme({
    palette:{
        primary:{
            main: '#000',
            dark: '#fff',
        },
        background:{
            bg_main: '#fff',
            bg_second: '#FADAAC',
        },
        textColor:{
            main: '#2E2E2E',
            second: '#fff',
        }
    },
    typography:{
        h2:{
            fontFamily: " 'Prata', serif",
            fontSize: "55px",
        }
    }
})

const MyComponent = () => {
    return (
        <ThemeProvider theme={theme}>
        <Box>
            <Nav></Nav>
            <Main></Main>
        </Box>
        </ThemeProvider>
    );
};

export default MyComponent;
