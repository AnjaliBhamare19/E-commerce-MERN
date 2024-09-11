import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { assets } from '../../assets/assets';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import Add from '../../pages/Add/Add';
import AList from '../../pages/List/AList';
import Orders from '../../pages/Orders/Orders';

// Menu items for navigation
const menuItems = [
  { text: 'Add Items', icon: assets.add_icon, to: '/add' },
  { text: 'List Items', icon: assets.list_icon, to: '/list' },
  { text: 'Orders', icon: assets.order_icon, to: '/orders' },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const drawerWidth = 200;

// Styles for the drawer when opened
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  zIndex: theme.zIndex.drawer,
});

// Styles for the drawer when closed
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  zIndex: theme.zIndex.drawer,
});

// Styled Drawer component
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 36,
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        marginTop: 36,
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        marginTop: 36,
      },
    }),
  }),
);

// Styled AppBar component
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const ANavbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle opening the drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Function to handle menu item click and navigation
  const handleMenuClick = (to) => {
    navigate(to);
    handleDrawerClose();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: '#ffff', color: '#2f2f2f' }} elevation={1}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => { setOpen(!open); }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <img
            alt=""
            src={assets.logo}
            className="logo"
            style={{ width: '130px' }}
          />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" style={{ width: '50px', height: '50px' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {['Profile', 'Account', 'Dashboard', 'Logout'].map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{ fontFamily: 'Balsamiq Sans, sans-serif' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => handleMenuClick(item.to)}
                sx={{
                  fontFamily: 'Balsamiq Sans',
                  ...(location.pathname === item.to && {
                    backgroundColor: 'white',
                    color: 'black',
                    '&:hover': {
                      backgroundColor: '#55e045',
                      color: 'white',
                    },
                  }),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={item.icon}
                    alt={`${item.text} icon`}
                    style={{ width: '24px', height: '24px', marginLeft: '7px' }}
                  />
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
          marginTop: 12, // Adjust top margin if needed
          marginLeft: open ? `${drawerWidth}px` : `calc(${theme.spacing(10)} + 40px)`,
          marginRight: 8,
          p: 3,
        }}
      >
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<AList />} />
          <Route path="/orders" element={<Orders />} />
          {/* Add a default route or a catch-all route if needed */}
        </Routes>
      </Box>
    </Box>
  );
};

export default ANavbar;
