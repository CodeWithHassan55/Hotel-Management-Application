import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { BsBook } from "react-icons/bs";

const ResponsiveAppBar = ({ onclick, onclick2 }) => {
    const pages = ["Hotels", "Pricing", "Login", "Signup"]

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="static" sx={{ backgroundColor: "white", }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <BsBook style={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        color: "black",
                    }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            letterSpacing: '0.1rem',
                            fontSize: "23px",
                            ml: 2,
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        Book Me
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                fontFamily: 'Poppins',
                                display: { xs: 'block', md: 'none', },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Book Me
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "end", }}>
                        <Button
                            href="#Hotels"
                            sx={{ my: 2, color: 'black', display: 'block', fontWeight: "bold", fontFamily: "Poppins", }}
                        >
                            Hotels
                        </Button>
                        <Button
                            href="#Hotels"
                            sx={{ my: 2, color: 'black', display: 'block', fontWeight: "bold", fontFamily: "Poppins", }}
                        >
                            Pricing
                        </Button>
                        <Button
                            onClick={onclick2}
                            sx={{ my: 2, color: 'black', display: 'block', fontWeight: "bold", fontFamily: "Poppins", }}
                        >
                            Login
                        </Button>
                        <Button
                            onClick={onclick}
                            sx={{ my: 2, color: 'black', display: 'block', fontWeight: "bold", fontFamily: "Poppins", }}
                        >
                            Signup
                        </Button>
                        ))
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
