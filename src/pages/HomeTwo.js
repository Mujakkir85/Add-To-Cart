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
            main: '#9e9e9e',
            second: '#fff',
        }
    },
    typography:{
        h2:{
            fontFamily: " 'Prata', serif",
            fontSize: "55px",
        },
        body1:{
            fontSize: '1rem',
            lineHeight: 1.5,
            color: '#9e9e9e'
        }
    },
    components:{
        MuiButton:{
            variants:[
                {
                    props: {variant: 'mainButton'},
                    style: {
                        backgroundColor: "#000",
                        color: "white",
                        cursor: "pointer",
                        paddingTop: '15px',
                        paddingBottom: '15px',
                        paddingLeft: '45px',
                        paddingRight: '45px',
                        borderRadius: '0px'
                    }
                }
            ],
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
