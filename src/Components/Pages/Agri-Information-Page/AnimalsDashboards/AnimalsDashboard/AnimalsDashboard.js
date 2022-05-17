import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';
import KoyelInfo from '../KoyelInfo/KoyelInfo';
import DeshiChagolInfo from '../DeshiChagolInfo/DeshiChagolInfo';
import MurgiInfo from '../MurgiInfo/MurgiInfo';
import GoruInfo from '../GoruInfo/GoruInfo';
import HashInfo from '../HashInfo/HashInfo';




const drawerWidth = 240;

function AnimalsDashboard(props) {


    // dynamic title
    useDocumentTitle("Animals Information");


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Box>
                <Typography paragraph sx={{ color: "#008336", fontSize: 36, fontWeight: 600, fontFamily: 'serif', marginBottom: 1 }}>
                    agrikon
                </Typography>
            </Box>
            <Divider />

            <NavLink to="/home" className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black", marginTop: '10px' }} variant="text">Home</Button></NavLink>

            <NavLink to="/info" className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black", marginBottom: '10px' }} variant="text">Agri Information</Button></NavLink>

            <Divider />

            <Typography paragraph sx={{ color: "#000", backgroundColor: "rgba(122, 124, 126, 0.494)", fontSize: 16, fontWeight: 600, fontFamily: 'serif', paddingBottom: 1, paddingTop: 1, marginBottom: 1 }}>
                প্রাণিসম্পদ
            </Typography>

            <NavLink to={`${url}/koyelInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">কোয়েল পালন</Button></NavLink>
            <NavLink to={`${url}/deshiChagolInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">দেশি ছাগল</Button></NavLink>
            <NavLink to={`${url}/murgiInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">মুরগি পালন</Button></NavLink>
            <NavLink to={`${url}/goruInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">গরু</Button></NavLink>
            <NavLink to={`${url}/hashInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">হাঁসের জাত</Button></NavLink>



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className='agrinfoDashboardContainer' sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: '#008336' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        All Animals Information
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
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
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, px: 6, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>

                    <Route exact path={path}>
                        <KoyelInfo></KoyelInfo>
                    </Route>
                    <Route path={`${path}/koyelInfo`}>
                        <KoyelInfo></KoyelInfo>
                    </Route>
                    <Route path={`${path}/deshiChagolInfo`}>
                        <DeshiChagolInfo></DeshiChagolInfo>
                    </Route>
                    <Route path={`${path}/murgiInfo`}>
                        <MurgiInfo></MurgiInfo>
                    </Route>
                    <Route path={`${path}/goruInfo`}>
                        <GoruInfo></GoruInfo>
                    </Route>
                    <Route path={`${path}/hashInfo`}>
                        <HashInfo></HashInfo>
                    </Route>



                </Switch>

            </Box>
        </Box>
    );
}

AnimalsDashboard.propTypes = {

    window: PropTypes.func,
};


export default AnimalsDashboard;