import React, {useState} from 'react'
import {Box, Typography, AppBar, Toolbar, IconButton, styled, List, Button, Stack, Drawer} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const SimpleAppBar = styled(AppBar)(({theme}) =>({
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.bg_main,
    boxShadow: 'none',
   // position: 'static',
}))

const NavButton = styled(Button)(({theme})=>({
    color: theme.palette.textColor.main,
}))

const Nav = () =>{
    const [manuState, setManuState] = useState(false)
    const navItems = ['HOME', 'SHOP', 'ABOUT', 'CONTACT', 'SHOPPING BAG']

    const openMenu = () =>{
        setManuState(true)
    }

    const closeMenu = () =>{
        setManuState(false)
    }
    return(
        <Box>
            <SimpleAppBar component="nav">
                <Toolbar>
                        <MenuIcon onClick={openMenu} sx={{display:{sm:'none'}}}>
                        </MenuIcon>
                            <Drawer
                                anchor= "left"
                                open={manuState}
                                onclose={closeMenu}
                                sx={{display:{sm:'none'}}}
                            >
                                <Stack direction="column" role="presentation" onClick={closeMenu}>
                                    {navItems.map((item)=>(
                                        <NavButton component={Link} to ={`${item}`} >
                                            {item}
                                        </NavButton>
                                    ))}
                                </Stack>
                            </Drawer>

                    <Stack sx={{ display: 'flex',
                        flexDirection:'row' ,
                        flexGrow: 1,
                        justifyContent: 'space-between',
                        py: '30px',
                        px: '90px'
                    }}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ display: {xs:'none', sm:'block'}, fontWeight: '700px'}}
                    > TIXLY FURNITURE</Typography>

                    <Box sx={{display: {xs:'none', sm:'block'}}}>
                        {navItems.map((item)=>(
                            <NavButton
                                component={Link} to ={`${item}`}
                                sx={{px:4,}}>
                                {item}
                            </NavButton>
                        ))}
                    </Box>
                    </Stack>
                </Toolbar>
            </SimpleAppBar>

        </Box>
    )
}

export default Nav