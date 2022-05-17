// import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import WelcomePage from './Components/Pages/WellcomePage/Welcomepage/WelcomePage';
import Home from './Components/Pages/Home-Page/Home/Home';
// import Navbar from './Components/Shared/Navbar/Navbar';
// import Footer from './Components/Shared/Footer/Footer';
import About from './Components/Pages/About-Page/About/About';
import Agri_Information from './Components/Pages/Agri-Information-Page/Agri-Information/Agri_Information';
import Our_Farmers from './Components/Pages/Our-Farmers-Page/Our-Farmers/Our_Farmers';
import Explore_All_Products from './Components/Pages/Explore-All-Products-Page/Explore-All-Products/Explore_All_Products';
import Dashboard from './Components/Pages/Dashboard-Page/Dashboard/Dashboard';
import Contact from './Components/Pages/Contact-Page/Contact/Contact';
// import NotFound from './Components/Pages/NotFound/NotFound';
import NotFound from './Components/Pages/NotFound/NotFound';
import SignUp from './Components/Pages/Login/signup/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signin from './Components/Pages/Login/signin/Signin ';
import Order from './Components/Pages/Explore-All-Products-Page/Products-Section/All-Products/Product-Order/Order/Order';
import CropsDashboard from './Components/Pages/Agri-Information-Page/CropsDashboard/CropsDashboard/CropsDashboard';
import AnimalsDashboard from './Components/Pages/Agri-Information-Page/AnimalsDashboards/AnimalsDashboard/AnimalsDashboard';
import FishDashboard from './Components/Pages/Agri-Information-Page/FishDashboards/FishDashboard/FishDashboard';


function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>

                    {/* <WelcomePage></WelcomePage> */}
                    {/* <Navbar></Navbar> */}
                    {/* <Home></Home> */}
                    <Switch>

                        <Route exact path="/">
                            <WelcomePage></WelcomePage>
                        </Route>
                        {/* <Route exact path="/">
              <Home></Home>
            </Route> */}
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/info">
                            <Agri_Information></Agri_Information>
                        </Route>
                        <PrivateRoute path="/cropsInfo">
                            <CropsDashboard></CropsDashboard>
                        </PrivateRoute>
                        <PrivateRoute path="/animalsInfo">
                            <AnimalsDashboard></AnimalsDashboard>
                        </PrivateRoute>
                        <PrivateRoute path="/fishInfo">
                            <FishDashboard></FishDashboard>
                        </PrivateRoute>
                        <Route path="/farmers">
                            <Our_Farmers></Our_Farmers>
                        </Route>
                        <PrivateRoute path="/order/:id">
                            <Order></Order>
                        </PrivateRoute>
                        <Route path="/products">
                            <Explore_All_Products></Explore_All_Products>
                        </Route>
                        <PrivateRoute path="/dashboard">
                            <Dashboard></Dashboard>
                        </PrivateRoute>
                        {/* <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route> */}
                        <Route path="/contact">
                            <Contact></Contact>
                        </Route>
                        <Route path="/signin">
                            <Signin></Signin>
                        </Route>
                        <Route path="/signup">
                            <SignUp></SignUp>
                        </Route>






                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>

                    </Switch>
                    {/* <Footer></Footer> */}

                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;