import React ,{useState,useEffect}from "react";
import { Orderstate } from "../../context/context";
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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { textAlign } from "@mui/system";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;
const navItems = ['Logout'];
function Cart(props) {
    
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
      const {
        state: { Item},
        dispatch,
    } = Orderstate();
    const navigate = useNavigate();
      
    


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handelSubmit = async (e) => {

        e.preventDefault();
      
        try {
            const responce = await axios.post("https://foodtoken.onrender.com/order/token", { ...Item });
            console.log(responce)
            if(responce){
                navigate("/token")
            }
        } catch (err) {
            console.log(err)
        }
    }



    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Token       </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={()=>navigate("/")>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    let showDate = new Date();
    let display = "Date :"+showDate.getDate()+"/"+showDate.getDay()+"/"+showDate.getFullYear()+'............................'+"Time :"+showDate.getHours()+":"+showDate.getMinutes()
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav" sx={{backgroundColor:"#585255"}}>
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
                           
            
            <Button sx={{ color: '#fff' }} onClick={() => navigate("/home")}>
              Home
            </Button>
            <Button sx={{ color: '#fff' }} onClick={() => navigate("/")}>
             Logout
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
                    <div style={{paddingLeft:"80px"}}>
                        <Card sx={{ minWidth: 275 ,}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 25 ,textAlign:"center" }} color="black" gutterBottom>
                                    Token Generator 
                                </Typography>
                                <Typography sx={{ fontSize: 12 }} color="black" gutterBottom>
                                   {display}
                                </Typography>
                                {Item.map((p) => (<Typography sx={{ fontSize: 15} } color="text.secondary" gutterBottom>
                                   <h5>{p.name}</h5> 
                                </Typography>))}
                                <Typography sx={{ fontSize: 18}} color="Green">
                                    Have a Great Meal
                                </Typography>
                               
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" sx={{marginLeft:"50px"}} onClick={handelSubmit}>Confirm Token</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <br/>
            

                </Box>


            </Box>





        </>
    )

}

export default Cart;
