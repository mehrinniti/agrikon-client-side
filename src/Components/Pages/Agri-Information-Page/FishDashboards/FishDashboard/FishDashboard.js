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
import ShingMagurKoiInfo from '../ShingMagurKoiInfo/ShingMagurKoiInfo';
import MisroMasInfo from '../MisroMasInfo/MisroMasInfo';
import ChingrimasInfo from '../ChingrimasInfo/ChingrimasInfo';
import PanggasMasInfo from '../PanggasMasInfo/PanggasMasInfo';
import TelapiyaMasInfo from '../TelapiyaMasInfo/TelapiyaMasInfo';
import MaserRogInfo from '../MaserRogInfo/MaserRogInfo';
import PabdaMasInfo from '../PabdaMasInfo/PabdaMasInfo';
import MolaDelaPutiMasInfo from '../MolaDelaPutiMasInfo/MolaDelaPutiMasInfo';
import KhachayMasChasInfo from '../KhachayMasChasInfo/KhachayMasChasInfo';


const drawerWidth = 240;

function FishDashboard(props) {


    // dynamic title
    useDocumentTitle("Fish Information");


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
                মৎস্য সম্পদ
            </Typography>

            <NavLink to={`${url}/shingMagurKoiInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">শিং-মাগুর ও কৈ মাছ</Button></NavLink>
            <NavLink to={`${url}/misroMasInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">মিশ্র মাছ</Button></NavLink>
            <NavLink to={`${url}/chingrimasInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">চিংড়ির রোগ</Button></NavLink>
            <NavLink to={`${url}/panggasMasInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">পাঙ্গাস মাছ</Button></NavLink>
            <NavLink to={`${url}/telapiyaMasInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">তেলাপিয়া মাছ</Button></NavLink>
            <NavLink to={`${url}/maserRogInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">মাছের রোগ</Button></NavLink>
            <NavLink to={`${url}/pabdaMasInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">পাবদা মাছ</Button></NavLink>
            <NavLink to={`${url}/molaDelaPutiMasInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">মলা, ঢেলা ও পুঁটি মাছ</Button></NavLink>
            <NavLink to={`${url}/khachayMasChasInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">খাঁচায় মাছ চাষ</Button></NavLink>



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
                        All Fish Information
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
                        <ShingMagurKoiInfo></ShingMagurKoiInfo>
                    </Route>
                    <Route path={`${path}/shingMagurKoiInfo`}>
                        <ShingMagurKoiInfo></ShingMagurKoiInfo>
                    </Route>
                    <Route path={`${path}/misroMasInfo`}>
                        <MisroMasInfo></MisroMasInfo>
                    </Route>
                    <Route path={`${path}/chingrimasInfo`}>
                        <ChingrimasInfo></ChingrimasInfo>
                    </Route>
                    <Route path={`${path}/panggasMasInfo`}>
                        <PanggasMasInfo></PanggasMasInfo>
                    </Route>
                    <Route path={`${path}/telapiyaMasInfo`}>
                        <TelapiyaMasInfo></TelapiyaMasInfo>
                    </Route>
                    <Route path={`${path}/maserRogInfo`}>
                        <MaserRogInfo></MaserRogInfo>
                    </Route>
                    <Route path={`${path}/pabdaMasInfo`}>
                        <PabdaMasInfo></PabdaMasInfo>
                    </Route>
                    <Route path={`${path}/molaDelaPutiMasInfo`}>
                        <MolaDelaPutiMasInfo></MolaDelaPutiMasInfo>
                    </Route>
                    <Route path={`${path}/khachayMasChasInfo`}>
                        <KhachayMasChasInfo></KhachayMasChasInfo>
                    </Route>




                </Switch>

            </Box>
        </Box>
    );
}

FishDashboard.propTypes = {

    window: PropTypes.func,
};


export default FishDashboard;