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
import './CropsDashboard.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import KaunCrops from '../KaunCrops/KaunCrops';
import VuttaCrops from '../VuttaCrops/VuttaCrops';
import GomInfo from '../GomInfo/GomInfo';
import JhingaInfo from '../JhingaInfo/JhingaInfo';
import MulaInfo from '../MulaInfo/MulaInfo';
import DherosInfo from '../DherosInfo/DherosInfo';
import BorbotiInfo from '../BorbotiInfo/BorbotiInfo';
import BadhakopiInfo from '../BadhakopiInfo/BadhakopiInfo';
import LawInfo from '../LawInfo/LawInfo';
import SimInfo from '../SimInfo/SimInfo';
import KorolaInfo from '../KorolaInfo/KorolaInfo';
import BegunInfo from '../BegunInfo/BegunInfo';
import MistiKumraInfo from '../MistiKumraInfo/MistiKumraInfo';
import LalSakInfo from '../LalSakInfo/LalSakInfo';
import GajorInfo from '../GajorInfo/GajorInfo';
import BadamInfo from '../BadamInfo/BadamInfo';
import PamOilInfo from '../PamOilInfo/PamOilInfo';
import TisiInfo from '../TisiInfo/TisiInfo';
import SunflowerInfo from '../SunflowerInfo/SunflowerInfo';
import TilInfo from '../TilInfo/TilInfo';
import SorishaInfo from '../SorishaInfo/SorishaInfo';
import HoludInfo from '../HoludInfo/HoludInfo';
import PeyajInfo from '../PeyajInfo/PeyajInfo';
import AdaInfo from '../AdaInfo/AdaInfo';
import RosunInfo from '../RosunInfo/RosunInfo';
import GulMorichInfo from '../GulMorichInfo/GulMorichInfo';
import MorichInfo from '../MorichInfo/MorichInfo';
import MeteAluInfo from '../MeteAluInfo/MeteAluInfo';
import AluInfo from '../AluInfo/AluInfo';
import KochuInfo from '../KochuInfo/KochuInfo';
import ChulaDalInfo from '../ChulaDalInfo/ChulaDalInfo';
import FelonInfo from '../FelonInfo/FelonInfo';
import KhesariDalInfo from '../KhesariDalInfo/KhesariDalInfo';
import MaskolaiDalInfo from '../MaskolaiDalInfo/MaskolaiDalInfo';
import MusurDalInfo from '../MusurDalInfo/MusurDalInfo';
import MugDalInfo from '../MugDalInfo/MugDalInfo';
import TulaInfo from '../TulaInfo/TulaInfo';
import AkhInfo from '../AkhInfo/AkhInfo';
import JuteInfo from '../JuteInfo/JuteInfo';
import PanInfo from '../PanInfo/PanInfo';
import AmInfo from '../AmInfo/AmInfo';
import KathalInfo from '../KathalInfo/KathalInfo';
import KomolaInfo from '../KomolaInfo/KomolaInfo';
import LotkonInfo from '../LotkonInfo/LotkonInfo';
import KolaInfo from '../KolaInfo/KolaInfo';
import StrawberryInfo from '../StrawberryInfo/StrawberryInfo';
import BatabiLeboInfo from '../BatabiLeboInfo/BatabiLeboInfo';
import NarikelInfo from '../NarikelInfo/NarikelInfo';
import SofedaInfo from '../SofedaInfo/SofedaInfo';
import RoseInfo from '../RoseInfo/RoseInfo';
import ChondromollikaInfo from '../ChondromollikaInfo/ChondromollikaInfo';
import GadaInfo from '../GadaInfo/GadaInfo';
import GladiolusInfo from '../GladiolusInfo/GladiolusInfo';
import CompostInfo from '../CompostInfo/CompostInfo';
import KechoCompostInfo from '../KechoCompostInfo/KechoCompostInfo';
import MowChassInfo from '../MowChassInfo/MowChassInfo';
import PahariKrishiInfo from '../PahariKrishiInfo/PahariKrishiInfo';
import DrumSeederInfo from '../DrumSeederInfo/DrumSeederInfo';
import GutiUreaInfo from '../GutiUreaInfo/GutiUreaInfo';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';


const drawerWidth = 240;

function CropsDashboard(props) {


    // dynamic title
    useDocumentTitle("Crops Information");


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
                দানাদার ফসল
            </Typography>

            <NavLink to={`${url}/kaunInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">কাউন</Button></NavLink>
            <NavLink to={`${url}/vuttaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">ভুট্টা</Button></NavLink>
            <NavLink to={`${url}/gomInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">গম</Button></NavLink>

            <Typography paragraph sx={{ color: "#000", backgroundColor: "rgba(122, 124, 126, 0.494)", fontSize: 16, fontWeight: 600, fontFamily: 'serif', paddingBottom: 1, paddingTop: 1, marginBottom: 1 }}>
                সবজি
            </Typography>

            <NavLink to={`${url}/jhingaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">ঝিঙ্গা</Button></NavLink>
            <NavLink to={`${url}/mulaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">মূলা</Button></NavLink>
            <NavLink to={`${url}/dherosInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">ঢেঁড়শ</Button></NavLink>
            <NavLink to={`${url}/borbotiInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                বরবটি</Button></NavLink>
            <NavLink to={`${url}/badhakopiInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                বাঁধা কপি</Button></NavLink>
            <NavLink to={`${url}/lawInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                লাউ</Button></NavLink>
            <NavLink to={`${url}/simInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                শিম</Button></NavLink>
            <NavLink to={`${url}/korolaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                করলা</Button></NavLink>
            <NavLink to={`${url}/begunInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                বেগুন</Button></NavLink>
            <NavLink to={`${url}/mistiKumraInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                মিষ্টি কুমড়া</Button></NavLink>
            <NavLink to={`${url}/lalSakInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                লালশাক</Button></NavLink>
            <NavLink to={`${url}/gajorInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                গাজর</Button></NavLink>

            <Typography paragraph sx={{ color: "#000", backgroundColor: "rgba(122, 124, 126, 0.494)", fontSize: 16, fontWeight: 600, fontFamily: 'serif', paddingBottom: 1, paddingTop: 1, marginBottom: 1 }}>
                তেল জাতীয় ফসল
            </Typography>

            <NavLink to={`${url}/badamInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                বাদাম</Button></NavLink>
            <NavLink to={`${url}/pamOilInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                পামওয়েল</Button></NavLink>
            <NavLink to={`${url}/tisiInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                তিসি</Button></NavLink>
            <NavLink to={`${url}/sunflowerInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                সুর্যমুখী</Button></NavLink>
            <NavLink to={`${url}/tilInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                গর্জন তিল</Button></NavLink>
            <NavLink to={`${url}/sorishaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                সরিষা</Button></NavLink>

            <Typography paragraph sx={{ color: "#000", backgroundColor: "rgba(122, 124, 126, 0.494)", fontSize: 16, fontWeight: 600, fontFamily: 'serif', paddingBottom: 1, paddingTop: 1, marginBottom: 1 }}>
                মসলা জাতীয় ফসল
            </Typography>

            <NavLink to={`${url}/holudInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                হলুদ</Button></NavLink>
            <NavLink to={`${url}/peyajInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                পেঁয়াজ</Button></NavLink>
            <NavLink to={`${url}/adaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                আদা</Button></NavLink>
            <NavLink to={`${url}/rosunInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                রসুন</Button></NavLink>
            <NavLink to={`${url}/gulMorichInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                গোল মরিচ</Button></NavLink>
            <NavLink to={`${url}/morichInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                মরিচ</Button></NavLink>

            <Typography paragraph sx={{ color: "#000", backgroundColor: "rgba(122, 124, 126, 0.494)", fontSize: 16, fontWeight: 600, fontFamily: 'serif', paddingBottom: 1, paddingTop: 1, marginBottom: 1 }}>
                কন্দাল জাতীয় ফসল
            </Typography>

            <NavLink to={`${url}/meteAluInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                মেটে আলু</Button></NavLink>
            <NavLink to={`${url}/aluInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                আলু</Button></NavLink>
            <NavLink to={`${url}/kochuInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                কচু</Button></NavLink>

            <Typography paragraph sx={{ color: "#000", backgroundColor: "rgba(122, 124, 126, 0.494)", fontSize: 16, fontWeight: 600, fontFamily: 'serif', paddingBottom: 1, paddingTop: 1, marginBottom: 1 }}>
                অর্থকরী ফসল
            </Typography>

            <NavLink to={`${url}/chulaDalInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                ছোলা</Button></NavLink>
            <NavLink to={`${url}/felonInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                ফেলন</Button></NavLink>
            <NavLink to={`${url}/khesariDalInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                খেসারী</Button></NavLink>
            <NavLink to={`${url}/maskolaiDalInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                মাসকলাই</Button></NavLink>
            <NavLink to={`${url}/musurDalInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                মসুর</Button></NavLink>
            <NavLink to={`${url}/mugDalInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                মুগ</Button></NavLink>

            <Typography paragraph sx={{ color: "#000", backgroundColor: "rgba(122, 124, 126, 0.494)", fontSize: 16, fontWeight: 600, fontFamily: 'serif', paddingBottom: 1, paddingTop: 1, marginBottom: 1 }}>
                অর্থকরী ফসল
            </Typography>

            <NavLink to={`${url}/tulaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                তুলা</Button></NavLink>
            <NavLink to={`${url}/akhInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                আখ</Button></NavLink>
            <NavLink to={`${url}/juteInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                পাট</Button></NavLink>
            <NavLink to={`${url}/panInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                পান</Button></NavLink>

            <Typography paragraph sx={{ color: "#000", backgroundColor: "rgba(122, 124, 126, 0.494)", fontSize: 16, fontWeight: 600, fontFamily: 'serif', paddingBottom: 1, paddingTop: 1, marginBottom: 1 }}>
                ফল
            </Typography>

            <NavLink to={`${url}/amInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                আম</Button></NavLink>
            <NavLink to={`${url}/kathalInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                কাঁঠাল</Button></NavLink>
            <NavLink to={`${url}/lotkonInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                লটকন</Button></NavLink>
            <NavLink to={`${url}/komolaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                কমলা</Button></NavLink>
            <NavLink to={`${url}/kolaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                কলা</Button></NavLink>
            <NavLink to={`${url}/strawberryInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                স্ট্রবেরি</Button></NavLink>
            <NavLink to={`${url}/batabiLeboInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                বাতাবি লেবু</Button></NavLink>
            <NavLink to={`${url}/narikelInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                নারিকেল</Button></NavLink>
            <NavLink to={`${url}/sofedaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                সফেদা</Button></NavLink>

            <Typography paragraph sx={{ color: "#000", backgroundColor: "rgba(122, 124, 126, 0.494)", fontSize: 16, fontWeight: 600, fontFamily: 'serif', paddingBottom: 1, paddingTop: 1, marginBottom: 1 }}>
                ফুল
            </Typography>

            <NavLink to={`${url}/roseInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                গোলাপ</Button></NavLink>
            <NavLink to={`${url}/chondromollikaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                চন্দ্রমল্লিকা</Button></NavLink>
            <NavLink to={`${url}/gadaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                গাঁদা</Button></NavLink>
            <NavLink to={`${url}/gladiolusInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                গ্লাডিওলাস</Button></NavLink>

            <Typography paragraph sx={{ color: "#000", backgroundColor: "rgba(122, 124, 126, 0.494)", fontSize: 16, fontWeight: 600, fontFamily: 'serif', paddingBottom: 1, paddingTop: 1, marginBottom: 1 }}>
                অন্যান্য ফসল/প্রযুক্তি
            </Typography>

            <NavLink to={`${url}/compostInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                কম্পোস্ট</Button></NavLink>
            <NavLink to={`${url}/kechoCompostInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                কেচোঁ কম্পোস্ট</Button></NavLink>
            <NavLink to={`${url}/mowChassInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                মৌ চাষ</Button></NavLink>
            <NavLink to={`${url}/pahariKrishiInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                পাহাড়ী কৃষি</Button></NavLink>
            <NavLink to={`${url}/drumSeederInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                ড্রাম সিডার</Button></NavLink>
            <NavLink to={`${url}/gutiUreaInfo`} className="dashboard-btns-link" activeClassName="selected selected-dashboard-link"><Button className="dashboard-btns" sx={{ color: "black" }} variant="text">
                গুটি ইউরিয়া যন্ত্র</Button></NavLink>

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
                        All Crops Information
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
                        <KaunCrops></KaunCrops>
                    </Route>
                    <Route path={`${path}/kaunInfo`}>
                        <KaunCrops></KaunCrops>
                    </Route>
                    <Route path={`${path}/vuttaInfo`}>
                        <VuttaCrops></VuttaCrops>
                    </Route>
                    <Route path={`${path}/gomInfo`}>
                        <GomInfo></GomInfo>
                    </Route>
                    <Route path={`${path}/jhingaInfo`}>
                        <JhingaInfo></JhingaInfo>
                    </Route>
                    <Route path={`${path}/mulaInfo`}>
                        <MulaInfo></MulaInfo>
                    </Route>
                    <Route path={`${path}/dherosInfo`}>
                        <DherosInfo></DherosInfo>
                    </Route>
                    <Route path={`${path}/borbotiInfo`}>
                        <BorbotiInfo></BorbotiInfo>
                    </Route>
                    <Route path={`${path}/badhakopiInfo`}>
                        <BadhakopiInfo></BadhakopiInfo>
                    </Route>
                    <Route path={`${path}/lawInfo`}>
                        <LawInfo></LawInfo>
                    </Route>
                    <Route path={`${path}/simInfo`}>
                        <SimInfo></SimInfo>
                    </Route>
                    <Route path={`${path}/korolaInfo`}>
                        <KorolaInfo></KorolaInfo>
                    </Route>
                    <Route path={`${path}/begunInfo`}>
                        <BegunInfo></BegunInfo>
                    </Route>
                    <Route path={`${path}/mistiKumraInfo`}>
                        <MistiKumraInfo></MistiKumraInfo>
                    </Route>
                    <Route path={`${path}/lalSakInfo`}>
                        <LalSakInfo></LalSakInfo>
                    </Route>
                    <Route path={`${path}/gajorInfo`}>
                        <GajorInfo></GajorInfo>
                    </Route>
                    <Route path={`${path}/badamInfo`}>
                        <BadamInfo></BadamInfo>
                    </Route>
                    <Route path={`${path}/pamOilInfo`}>
                        <PamOilInfo></PamOilInfo>
                    </Route>
                    <Route path={`${path}/tisiInfo`}>
                        <TisiInfo></TisiInfo>
                    </Route>
                    <Route path={`${path}/sunflowerInfo`}>
                        <SunflowerInfo></SunflowerInfo>
                    </Route>
                    <Route path={`${path}/tilInfo`}>
                        <TilInfo></TilInfo>
                    </Route>
                    <Route path={`${path}/sorishaInfo`}>
                        <SorishaInfo></SorishaInfo>
                    </Route>
                    <Route path={`${path}/holudInfo`}>
                        <HoludInfo></HoludInfo>
                    </Route>
                    <Route path={`${path}/peyajInfo`}>
                        <PeyajInfo></PeyajInfo>
                    </Route>
                    <Route path={`${path}/adaInfo`}>
                        <AdaInfo></AdaInfo>
                    </Route>
                    <Route path={`${path}/rosunInfo`}>
                        <RosunInfo></RosunInfo>
                    </Route>
                    <Route path={`${path}/gulMorichInfo`}>
                        <GulMorichInfo></GulMorichInfo>
                    </Route>
                    <Route path={`${path}/morichInfo`}>
                        <MorichInfo></MorichInfo>
                    </Route>
                    <Route path={`${path}/meteAluInfo`}>
                        <MeteAluInfo></MeteAluInfo>
                    </Route>
                    <Route path={`${path}/aluInfo`}>
                        <AluInfo></AluInfo>
                    </Route>
                    <Route path={`${path}/kochuInfo`}>
                        <KochuInfo></KochuInfo>
                    </Route>
                    <Route path={`${path}/chulaDalInfo`}>
                        <ChulaDalInfo></ChulaDalInfo>
                    </Route>
                    <Route path={`${path}/felonInfo`}>
                        <FelonInfo></FelonInfo>
                    </Route>
                    <Route path={`${path}/khesariDalInfo`}>
                        <KhesariDalInfo></KhesariDalInfo>
                    </Route>
                    <Route path={`${path}/maskolaiDalInfo`}>
                        <MaskolaiDalInfo></MaskolaiDalInfo>
                    </Route>
                    <Route path={`${path}/musurDalInfo`}>
                        <MusurDalInfo></MusurDalInfo>
                    </Route>
                    <Route path={`${path}/mugDalInfo`}>
                        <MugDalInfo></MugDalInfo>
                    </Route>
                    <Route path={`${path}/tulaInfo`}>
                        <TulaInfo></TulaInfo>
                    </Route>
                    <Route path={`${path}/akhInfo`}>
                        <AkhInfo></AkhInfo>
                    </Route>
                    <Route path={`${path}/juteInfo`}>
                        <JuteInfo></JuteInfo>
                    </Route>
                    <Route path={`${path}/panInfo`}>
                        <PanInfo></PanInfo>
                    </Route>
                    <Route path={`${path}/amInfo`}>
                        <AmInfo></AmInfo>
                    </Route>
                    <Route path={`${path}/kathalInfo`}>
                        <KathalInfo></KathalInfo>
                    </Route>
                    <Route path={`${path}/komolaInfo`}>
                        <KomolaInfo></KomolaInfo>
                    </Route>
                    <Route path={`${path}/lotkonInfo`}>
                        <LotkonInfo></LotkonInfo>
                    </Route>
                    <Route path={`${path}/kolaInfo`}>
                        <KolaInfo></KolaInfo>
                    </Route>
                    <Route path={`${path}/strawberryInfo`}>
                        <StrawberryInfo></StrawberryInfo>
                    </Route>
                    <Route path={`${path}/batabiLeboInfo`}>
                        <BatabiLeboInfo></BatabiLeboInfo>
                    </Route>
                    <Route path={`${path}/narikelInfo`}>
                        <NarikelInfo></NarikelInfo>
                    </Route>
                    <Route path={`${path}/sofedaInfo`}>
                        <SofedaInfo></SofedaInfo>
                    </Route>
                    <Route path={`${path}/roseInfo`}>
                        <RoseInfo></RoseInfo>
                    </Route>
                    <Route path={`${path}/chondromollikaInfo`}>
                        <ChondromollikaInfo></ChondromollikaInfo>
                    </Route>
                    <Route path={`${path}/gadaInfo`}>
                        <GadaInfo></GadaInfo>
                    </Route>
                    <Route path={`${path}/gladiolusInfo`}>
                        <GladiolusInfo></GladiolusInfo>
                    </Route>
                    <Route path={`${path}/compostInfo`}>
                        <CompostInfo></CompostInfo>
                    </Route>
                    <Route path={`${path}/kechoCompostInfo`}>
                        <KechoCompostInfo></KechoCompostInfo>
                    </Route>
                    <Route path={`${path}/mowChassInfo`}>
                        <MowChassInfo></MowChassInfo>
                    </Route>
                    <Route path={`${path}/pahariKrishiInfo`}>
                        <PahariKrishiInfo></PahariKrishiInfo>
                    </Route>
                    <Route path={`${path}/drumSeederInfo`}>
                        <DrumSeederInfo></DrumSeederInfo>
                    </Route>
                    <Route path={`${path}/gutiUreaInfo`}>
                        <GutiUreaInfo></GutiUreaInfo>
                    </Route>


                </Switch>

            </Box>
        </Box>
    );
}

CropsDashboard.propTypes = {

    window: PropTypes.func,
};

export default CropsDashboard;

