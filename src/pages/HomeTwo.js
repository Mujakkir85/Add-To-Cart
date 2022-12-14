import React from 'react';
import {Box} from "@mui/material";
import Nav from "./Nav";
import {ThemeProvider} from '@mui/material/styles';
import Main from "./Main";
import Category from "./Category";
import About from "./About";
import Gallery from "./Gallery";
import {theme} from "./theme"
import Footer from "./Footer";

const MyComponent = () => {
    return (
        // <ThemeProvider theme={theme}>
        <Box>
            {/*<Nav></Nav>*/}
            <Main></Main>
            <Category></Category>
            <About></About>
            <Gallery></Gallery>
        </Box>
       // </ThemeProvider>
    );
};

export default MyComponent;
