import React from 'react'
import {Box, Typography, AppBar, Toolbar, IconButton, styled, List, Button, Stack} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const SimpleAppBar = styled(AppBar)(({theme}) =>({
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.bg_main,
    boxShadow: 'none',
}))

const Nav = () =>{
    const navItems = ['HOME', 'SHOP', 'ABOUT', 'CONTACT']
    return(
        <Box>
            <SimpleAppBar component="nav">
                <Toolbar>
                    <IconButton sx={{display:{sm:'none'}}}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Stack sx={{ display: 'flex',
                        flexDirection:'row' ,
                        flexGrow: 1,
                        justifyContent: 'space-between',
                        py: '30px',
                        px: '100px'
                    }}>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ display: {xs:'none', sm:'block'}}}
                    > TIXLY FURNITURE</Typography>

                    <Box sx={{display: {xs:'none', sm:'block'}}}>
                        {navItems.map((item)=>(
                            <Button>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    </Stack>
                </Toolbar>
            </SimpleAppBar>

        </Box>
    )
}

export default Nav