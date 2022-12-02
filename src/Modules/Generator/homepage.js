import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Orderstate } from '../../context/context';
import Container from './container';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Cart from './cart';
import "./home.css"
const drawerWidth = 240;
const navItems = ['token'];

function Homepage(props) {
  const navigate = useNavigate();
  const {
    state: { products }
  } = Orderstate();


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const {
    state: { Item },
    dispatch,
  } = Orderstate();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Token       </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <Box sx={{ display: 'flex' }}className="body" >
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontFamily: "Aladin" }, fontSize: { sm: "40px", xs: "40px" } }}
          >
            <span style={{ color: 'red' }}>Token</span><span style={{ color: 'azure' }}>Generator</span>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <Button sx={{ color: '#fff' }} onClick={() => navigate("/token")}>
              Token:<span style={{ fontSize: 12 }}>{Item.length}</span>
            </Button>

          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className='card' style={{ display: "flex", flexWrap: "wrap" }}>
              {products.map((prod) => (<Container prod={prod} key={prod.id} />))}
            </div>
          </Grid>
          <Grid item xs={4}>
            <Cart />
          </Grid>
        </Grid>




      </Box>


    </Box>

  );
}



export default Homepage;