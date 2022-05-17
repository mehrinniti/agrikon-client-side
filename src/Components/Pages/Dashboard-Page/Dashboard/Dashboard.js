
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
import MyOrder from '../MyOrder/MyOrder';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import './Dashboard.css';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import AddFarmer from '../AddFarmer/AddFarmer';
import useAuth from '../../../../hooks/useAuth';
import AdminRoute from '../../../AdminRoute/AdminRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import GiveReview from '../GiveReview/GiveReview';
import Messages from '../Messages/Messages';
import ManageFarmers from '../ManageFarmers/ManageFarmers';
import Payment from '../Payment/Payment/Payment';
import UpdateStatus from '../UpdateStatus/UpdateStatus';
import Home from '../../Home-Page/Home/Home';
import SinglePayment from '../Payment/SinglePayment/SinglePayment';
// import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    console.log(path);
    const { user, signout, admin, isLoading, adminIsLoading } = useAuth();

    // redirect private route
    // const history = useHistory();
    // const redirectUrl = "/home";

    // history.push(redirectUrl)
    console.log(`${path}/manageAllOrders/:id`)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Box>
                {user?.photoURL ? (
                    <div>
                        <img
                            style={{ width: 60, height: 60, borderRadius: "50%", marginBottom: 5, marginTop: 5 }}
                            src={user?.photoURL}
                            alt=""
                        />
                        <p><b>{user?.displayName}</b></p>
                    </div>
                ) : (
                    <p className='mt-3'><b>{user?.displayName}</b></p>
                )}
            </Box>
            <Divider />
            <NavLink to="/home" className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black", marginTop: '20px' }} variant="text">Home</Button></NavLink>

            <NavLink to="/info" className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">Agri-Information</Button></NavLink>

            <NavLink to="/products" className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">Explore All Products</Button></NavLink>


            {!admin && !isLoading && <Box>

                <NavLink to={`${url}/myOrders`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">My Orders</Button></NavLink>
                <NavLink to={`${url}/singlePayment`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">Pay</Button></NavLink>

                <NavLink to={`${url}/review`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">Review</Button></NavLink>

            </Box>}

            {admin && !adminIsLoading && <Box>

                <NavLink to={`${url}/manageAllOrders`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">Manage All Orders</Button></NavLink>

                <NavLink to={`${url}/manageProducts`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">Manage Products</Button></NavLink>

                <NavLink to={`${url}/addProduct`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">Add Product</Button></NavLink>

                <NavLink to={`${url}/addFarmer`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">Add Farmer</Button></NavLink>

                <NavLink to={`${url}/manageFarmers`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">Manage Farmers</Button></NavLink>

                <NavLink to={`${url}/makeAdmin`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">Make Admin</Button></NavLink>

                <NavLink to={`${url}/messages`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">Messages</Button></NavLink>

            </Box>}
            <br /><br />
            <Divider />
            <Button onClick={signout} color="inherit" className="dashboard-btns" sx={{ color: "black" }} variant="text" >Log Out</Button>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className='dashboard-container' sx={{ display: 'flex' }}>
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
                        Dashboard
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
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {!admin && <Route exact path={path}>
                        <MyOrder></MyOrder>
                    </Route>}
                    {admin && <Route exact path={path}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>}


                    <Route path={`${path}/myOrders`}>
                        <MyOrder></MyOrder>
                    </Route>
                    {/* <Route path={`${path}/singlePayment`}>
                        <SinglePayment></SinglePayment>
                    </Route> */}
                    <Route path={`${path}/payment/:orderId`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/review`}>
                        <GiveReview></GiveReview>
                    </Route>

                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/updateStatus/:id`}>
                        <UpdateStatus></UpdateStatus>
                        {/* <Home></Home> */}
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/manageFarmers`}>
                        <ManageFarmers></ManageFarmers>
                    </Route>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addFarmer`}>
                        <AddFarmer></AddFarmer>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/messages`}>
                        <Messages></Messages>
                    </AdminRoute>

                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
