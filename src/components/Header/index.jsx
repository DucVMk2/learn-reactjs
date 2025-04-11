import { AccountCircle, Close } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles'; // Đảm bảo import từ '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../features/Auth/userSlice';
import Login from './../../features/Auth/components/Login/index';
import Register from './../../features/Auth/components/Register/index';

// Sử dụng styled để tạo các component với kiểu dáng
const Root = styled('div')(({ theme }) => ({
    flexGrow: 1,
}));

const MenuButton = styled(CodeIcon)(({ theme }) => ({
    marginRight: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
}));

const LinkStyled = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#fff',
}));

const NavLinkStyled = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: '#fff',
}));

const CloseButtonStyled = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
}))

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
};

export default function Header() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
    };

    return (
        <Root>
            <AppBar position="static">
                <Toolbar>
                    <MenuButton />

                    <Title variant="h6">
                        <LinkStyled to="/">
                            EZ SHOP
                        </LinkStyled>
                    </Title>

                    <NavLinkStyled to="/todos">
                        <Button color="inherit">Todos</Button>
                    </NavLinkStyled>

                    <NavLinkStyled to="/albums">
                        <Button color="inherit">Albums</Button>
                    </NavLinkStyled>

                    {!isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen}>
                            Login
                        </Button>
                    )}

                    {isLoggedIn && (
                        <IconButton color="inherit" onClick={handleUserClick}>
                            <AccountCircle />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            <Menu
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                aria-labelledby="demo-positioned-button"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>

            <Dialog
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                BackdropProps={{ onClick: () => { } }}
            >
                <CloseButtonStyled onClick={handleClose}>
                    <Close />
                </CloseButtonStyled>

                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />

                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Already have an account. Login here.
                                </Button>
                            </Box>
                        </>
                    )}

                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                    Don't have an account. Register here.
                                </Button>
                            </Box>
                        </>
                    )}

                </DialogContent>
            </Dialog>
        </Root>
    );
}
