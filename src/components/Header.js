import { AppBar, Box, Toolbar, Typography, Badge } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'

const Header = ({countCartItems}) => {
    return (
        <Box sx={{ display: "flex" }}>
            <AppBar component="nav" sx={{ bgcolor: '#4caf50' }} position="static">
                <Toolbar>
                    <MenuIcon
                        sx={{ display: { xs: "block", sm: "none" }, cursor: "pointer" }}
                    />

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        Add TO Cart
                    </Typography>
                    <Box>
                        <Badge badgeContent={countCartItems} color={"primary"}>
                        <ShoppingCartIcon fontSize='large' />
                        </Badge>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;