// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import { Container } from '@mui/material';

// import './Product_Section.css';

// export default function Product_Section() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <Container sx={{ width: '100%', bgcolor: 'background.paper' }}>
//             <Tabs




//                 value={selectedTab}
//                 onChange={handleChange}
//                 variant="scrollable"
//                 scrollButtons="auto"
//             aria-label="scrollable auto success tabs example"
//             >
//                 <Tab className=' fw-bolder products-bar' label="All Products" />
//                 <Tab className=' fw-bolder products-bar' label="Item Two" />
//                 <Tab className=' fw-bolder products-bar' label="Item Three" />
//                 <Tab className=' fw-bolder products-bar' label="Item Four" />
//                 <Tab className=' fw-bolder products-bar' label="Item Five" />
//                 <Tab className=' fw-bolder products-bar' label="Item Six" />
//                 <Tab className=' fw-bolder products-bar' label="Item Seven" />

//                 <Tab label="Item One" />
//                 <Tab label="Item Two" />
//                 <Tab label="Item Three" />
//                 <Tab label="Item Four" />
//                 <Tab label="Item Five" />
//                 <Tab label="Item Six" />
//                 <Tab label="Item Seven" />
//                 <Tab label="Item Seven" />

//                 <Tab label="Item One" />
//                 <Tab label="Item Two" />
//                 <Tab label="Item Three" />
//                 <Tab label="Item Four" />
//                 <Tab label="Item Five" />
//                 <Tab label="Item Six" />
//                 <Tab label="Item Seven" />
//                 <Tab label="Item Seven" />

//                 <Tab label="Item One" />
//                 <Tab label="Item Two" />
//                 <Tab label="Item Three" />
//                 <Tab label="Item Four" />
//                 <Tab label="Item Five" />
//                 <Tab label="Item Six" />
//                 <Tab label="Item Seven" />


//             </Tabs>
//         </Container>
//     );
// }
















import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CircularProgress, Container, Grid } from '@mui/material';
import SingleAllProduct from './All-Products/Single-All-Product/SingleAllProduct';
import SingleFruitsProduct from './Fruits/Single-Fruits-Product/SingleFruitsProduct';
import SingleVegetableProduct from './Vegetable/Single-Vegetable-Product/SingleVegetableProduct';
import SingleMeatAndFishProduct from './Meat&Fish/Single-Meat&fish-Product/SingleMeatAndFishProduct';
import SingleCookingProduct from './Cooking/Single-Cooking-Product/SingleCookingProduct';
import SingleHygenicProduct from './Hygenic/Single-Hygenic-Product/SingleHygenicProduct';
import SingleBreadAndBakeryProduct from './Bread&Bakery/Single-BreadAndBakery-Product/SingleBreadAndBakeryProduct';
import SingleBeautyAndHealthProduct from './Beauty&Health/Single-BeautyAndHealth-Product/SingleBeautyAndHealthProduct';
import SingleHomesAndKitchenProduct from './Homes&Kitchen/Single-HomesAndKitchen-Product/SingleHomesAndKitchenProduct';
import SinglePetCareProduct from './PetCare/Single-PetCare-Product/SinglePetCareProduct';
import SingleSnacksProduct from './Snacks/Single-Snacks-Product/SingleSnacksProduct';
import SingleToysAndFunProduct from './Toys&Fun/Single-ToysAndFun-Product/SingleToysAndFunProduct';
import SingleDairyProduct from './Dairy/Single-Dairy-Product/SingleDairyProduct';
import SingleCleaningSuppliesProduct from './CleaningSupplies/Single-CleaningSupplies-Product/SingleCleaningSuppliesProduct';
import SingleStationeryAndOfficeProduct from './Stationery&Office/Single-StationeryAndOffice-Product/SingleStationeryAndOfficeProduct';
import SingleSportAndFitnessProduct from './Sport&Fitness/Single-SportAndFitness-Product/SingleSportAndFitnessProduct';
import SingleCandyProduct from './Candy/Single-Candy-Product/SingleCandyProduct';
import SingleBeverageProduct from './Beverage/Single-Beverage-Product/SingleBeverageProduct';
import SingleBakingProduct from './Baking/Single-Baking-Product/SingleBakingProduct';
import SingleBabyCareProduct from './BabyCare/Single-BabyCare-Product/SingleBabyCareProduct';
import axios from 'axios';




// const allProducts = [
//     {
//         "image": " https://i.ibb.co/VHhvtJf/agro-acres-safawi-dates-premium-500-gm.webp ",
//         "name": "safari khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/YcNtqD2/paka-pape-50-gm-1-kg.webp ",
//         "name": "paka-pepe ",
//         "weight": " 1 pc",
//         "price": "৳ 100 "
//     },
//     {
//         "image": " https://i.ibb.co/sjbNtpb/narikel-coconut-1-pcs.webp ",
//         "name": "Narikel-coconut ",
//         "weight": " 2 pcs",
//         "price": " ৳ 130"

//     },
//     {
//         "image": " https://i.ibb.co/6Pz7fCn/ajwa-dates-sealed-250-gm.webp ",
//         "name": "ajwa khejur",
//         "weight": "250 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/zWcRN43/sofeda-sapodilla-1-kg.webp ",
//         "name": "Sofeda",
//         "weight": "1pc",
//         "price": "৳ 20"
//     },
//     {
//         "image": " https://i.ibb.co/HXdBwCL/sobuj-angur-green-grapes-12-gm-250-gm.webp ",
//         "name": "green-grapes",
//         "weight": "200gm",
//         "price": "৳ 65"
//     },
//     {
//         "image": " https://i.ibb.co/Zdc85PG/ajwa-dates-standard-500-gm.webp",
//         "name": "ajwa khejur",
//         "weight": "500 gm",
//         "price": "৳ 350"
//     },
//     {
//         "image": " https://i.ibb.co/X5ckZFf/al-dhafra-dates-khejur-400-gm.webp ",
//         "name": "al dafra khejur",
//         "weight": "400 gm",
//         "price": "৳ 250"
//     },
//     {
//         "image": " https://i.ibb.co/bgnFjcV/daab-green-coconut-1-pcs.webp ",
//         "name": " Daab ",
//         "weight": " 2pcs",
//         "price": "৳ 120 "
//     },
//     {
//         "image": " https://i.ibb.co/Qd760Mq/arabian-knight-mabroom-dates-standard-500-gm.webp ",
//         "name": "arabian mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"
//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"
//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"
//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "
//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },
//     {
//         "image": " https://i.ibb.co/s1XK2pj/crown-dabbas-dates-1-kg.webp ",
//         "name": "khas food khejur",
//         "weight": "200 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/gjQjwmp/watermelon-black-4-kg-1-pcs.webp",
//         "name": "Watermelon ",
//         "weight": "1kg",
//         "price": "৳ 150"

//     },
//     {
//         "image": " https://i.ibb.co/17gtJpN/mabroom-al-madina-premium-dates-sealed-500-gm.webp",
//         "name": "mabroom al madina khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/hd1n8zd/madina-amber-dates-premium-500-gm.webp ",
//         "name": "madina amber khejur",
//         "weight": "500 gm",
//         "price": "৳ 120"
//     },
//     {
//         "image": " https://i.ibb.co/WpzkLmF/mariam-al-madina-premium-dates-sealed-500-gm.webp ",
//         "name": "mariam al madina khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/VWwqxMD/dragon-fruit-imported-50-gm-14-kg.webp ",
//         "name": " Dragon",
//         "weight": "2pcs ",
//         "price": " ৳ 87"
//     },
//     {
//         "image": " https://i.ibb.co/xDkWW3x/neghal-premium-emirates-dates-crown-800-gm.webp ",
//         "name": "neghal emirates khejur",
//         "weight": "800 gm",
//         "price": "৳ 480"
//     },
//     {
//         "image": "https://ibb.co/Q82d7ZS",
//         "name": "royal deglet khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/rHBM2TF/dalim-pomegranate-2-pcs.webp ",
//         "name": "Dalim ",
//         "weight": " 4pcs",
//         "price": " ৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/vL8L1W1/amloki-amla-12-gm-250-gm.webp ",
//         "name": " Amloki",
//         "weight": " 100gm",
//         "price": "৳ 40 "
//     },
//     {
//         "image": " https://i.ibb.co/Ldvwx64/anaros-pineapple-1-pcs.webp ",
//         "name": "Anaros - pineapple ",
//         "weight": " 2pcs",
//         "price": " ৳ 110 "
//     },
//     {
//         "image": "https://ibb.co/YPBpC4k",
//         "name": "sugai khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/P5nXg3q/uchche-local-bitter-gourd-25-gm-500-gm.webp ",
//         "name": "Korola",
//         "weight": "250gm",
//         "price": "৳ 15"

//     },
//     {
//         "image": " https://i.ibb.co/2k4jMzQ/shosha-cucumber-25-gm-500-gm.webp ",
//         "name": "Sosha",
//         "weight": "500gm",
//         "price": "৳ 20"

//     },
//     {
//         "image": " https://i.ibb.co/MNHMdsm/roshun-garlic-imported-25-gm-500-gm.webp ",
//         "name": "Roshun",
//         "weight": "250gm",
//         "price": "৳ 80"

//     },
//     {
//         "image": " https://i.ibb.co/D9dLZGK/red-tomato-25-gm-500-gm.webp ",
//         "name": "Tomato",
//         "weight": "500gm",
//         "price": "৳ 15"

//     },
//     {
//         "image": " https://i.ibb.co/JtCzhLT/pui-shak-pui-spinach-1-bundle.webp ",
//         "name": "Puishak",
//         "weight": "1kg",
//         "price": "৳ 10"

//     },
//     {
//         "image": " https://i.ibb.co/B4JyZzJ/potol-pointed-gourd-25-gm-500-gm.webp",
//         "name": "Potol",
//         "weight": "500gm",
//         "price": "৳ 30"

//     },
//     {
//         "image": " https://i.ibb.co/kXK5hDS/misti-kumra-sweet-pumpkin-1-pcs.webp ",
//         "name": "Misti Kumra",
//         "weight": "1kg",
//         "price": "৳ 65"

//     },
//     {
//         "image": " https://i.ibb.co/n3hrMCP/lomba-kochu-1-pcs.webp ",
//         "name": "lomba-kochu",
//         "weight": "1pcs",
//         "price": "৳ 35"

//     },
//     {
//         "image": " https://i.ibb.co/0r1CDT1/lau-shak-sweet-bitter-melon-leaves-1-bundle.webp ",
//         "name": "lau-sakh",
//         "weight": "500gm",
//         "price": "৳ 20"

//     },
//     {
//         "image": " https://i.ibb.co/sPTS0pr/lau-bottle-gourd-1-pcs.webp ",
//         "name": "lau",
//         "weight": "1pc",
//         "price": "৳ 35"

//     },
//     {
//         "image": " https://i.ibb.co/SPQXJGn/lal-shak-red-spinach-1-bundle.webp ",
//         "name": "lal-sakh",
//         "weight": "1 bundle",
//         "price": "৳ 15"

//     },
//     {
//         "image": " https://i.ibb.co/F3yrYg1/lal-alu-red-potato-25-gm-500-gm.webp ",
//         "name": "lal alu",
//         "weight": "500 gm",
//         "price": "৳ 30"

//     },
//     {
//         "image": " https://i.ibb.co/x1CSRxb/kochur-mukhi-taro-roots-25-gm-500-gm.webp",
//         "name": "Kochur mukhi",
//         "weight": "500gm",
//         "price": "৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/3vWC0tM/kochur-loti-stolon-of-taro-25-gm-500-gm.webp ",
//         "name": "kochur loti",
//         "weight": "500 gm",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/7R3cK0C/kalo-gol-begun-round-brinjals-black-35-gm-700-gm.webp ",
//         "name": "Begun",
//         "weight": "500 gm",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/VVLscW5/kacha-pepe-green-papaya-70-gm-14-kg.webp ",
//         "name": "kacha pepe",
//         "weight": "1 kg",
//         "price": "৳ 20"

//     },
//     {
//         "image": " https://i.ibb.co/4JLQ6hT/kacha-morich-green-chilli-12-gm-250-gm.webp ",
//         "name": "kacha morich",
//         "weight": "250 gm",
//         "price": "৳ 30"

//     },
//     {
//         "image": " https://i.ibb.co/TYq8sJn/kacha-kola-banana-green-4-pcs.webp ",
//         "name": "kacha kola",
//         "weight": "4 pcs",
//         "price": "৳ 20"

//     },
//     {
//         "image": " https://i.ibb.co/yB0h4Rj/jali-kumra-water-pumpkin-1-pcs.webp ",
//         "name": "jalo kumra",
//         "weight": "1 pcs",
//         "price": "৳ 80"

//     },
//     {
//         "image": " https://i.ibb.co/0D8cc7p/gol-lebu-round-lemon-4-pcs.webp ",
//         "name": "lebu",
//         "weight": "4 pcs",
//         "price": "৳ 30"

//     },
//     {
//         "image": " https://i.ibb.co/X251NVh/fulkopi-cauliflower-1-pcs.webp ",
//         "name": "fulkopi",
//         "weight": "1 pcs",
//         "price": "৳ 50"

//     },
//     {
//         "image": " https://i.ibb.co/6nRMk11/flat-bean-sheem-500-gm.webp ",
//         "name": "sheem",
//         "weight": "500 gm",
//         "price": "৳ 30"

//     },
// ]




// const fruits = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/YcNtqD2/paka-pape-50-gm-1-kg.webp ",
//         "name": "paka-pepe ",
//         "weight": " 1 pc",
//         "price": "৳ 100 "

//     },
//     {
//         "image": " https://i.ibb.co/sjbNtpb/narikel-coconut-1-pcs.webp ",
//         "name": "Narikel-coconut ",
//         "weight": " 2 pcs",
//         "price": " ৳ 130"

//     },
//     {
//         "image": " https://i.ibb.co/6Pz7fCn/ajwa-dates-sealed-250-gm.webp ",
//         "name": "ajwa khejur",
//         "weight": "250 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/zWcRN43/sofeda-sapodilla-1-kg.webp ",
//         "name": "Sofeda",
//         "weight": "1pc",
//         "price": "৳ 20"

//     },
//     {
//         "image": " https://i.ibb.co/HXdBwCL/sobuj-angur-green-grapes-12-gm-250-gm.webp ",
//         "name": "green-grapes",
//         "weight": "200gm",
//         "price": "৳ 65"

//     },
//     {
//         "image": " https://i.ibb.co/Zdc85PG/ajwa-dates-standard-500-gm.webp",
//         "name": "ajwa khejur",
//         "weight": "500 gm",
//         "price": "৳ 350"
//     },
//     {
//         "image": " https://i.ibb.co/X5ckZFf/al-dhafra-dates-khejur-400-gm.webp ",
//         "name": "al dafra khejur",
//         "weight": "400 gm",
//         "price": "৳ 250"
//     },
//     {
//         "image": " https://i.ibb.co/bgnFjcV/daab-green-coconut-1-pcs.webp ",
//         "name": " Daab ",
//         "weight": " 2pcs",
//         "price": "৳ 120 "

//     },
//     {
//         "image": " https://i.ibb.co/Qd760Mq/arabian-knight-mabroom-dates-standard-500-gm.webp ",
//         "name": "arabian mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]




// const vegetable = [
//     //   Its Fruits section


//     {
//         "image": " https://i.ibb.co/sjbNtpb/narikel-coconut-1-pcs.webp ",
//         "name": "Narikel-coconut ",
//         "weight": " 2 pcs",
//         "price": " ৳ 130"

//     },
//     {
//         "image": " https://i.ibb.co/6Pz7fCn/ajwa-dates-sealed-250-gm.webp ",
//         "name": "ajwa khejur",
//         "weight": "250 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/zWcRN43/sofeda-sapodilla-1-kg.webp ",
//         "name": "Sofeda",
//         "weight": "1pc",
//         "price": "৳ 20"

//     },
//     {
//         "image": " https://i.ibb.co/HXdBwCL/sobuj-angur-green-grapes-12-gm-250-gm.webp ",
//         "name": "green-grapes",
//         "weight": "200gm",
//         "price": "৳ 65"

//     },
//     {
//         "image": " https://i.ibb.co/Zdc85PG/ajwa-dates-standard-500-gm.webp",
//         "name": "ajwa khejur",
//         "weight": "500 gm",
//         "price": "৳ 350"
//     },
//     {
//         "image": " https://i.ibb.co/X5ckZFf/al-dhafra-dates-khejur-400-gm.webp ",
//         "name": "al dafra khejur",
//         "weight": "400 gm",
//         "price": "৳ 250"
//     },
//     {
//         "image": " https://i.ibb.co/bgnFjcV/daab-green-coconut-1-pcs.webp ",
//         "name": " Daab ",
//         "weight": " 2pcs",
//         "price": "৳ 120 "

//     },
//     {
//         "image": " https://i.ibb.co/Qd760Mq/arabian-knight-mabroom-dates-standard-500-gm.webp ",
//         "name": "arabian mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]



// const meatAndFish = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/6Pz7fCn/ajwa-dates-sealed-250-gm.webp ",
//         "name": "ajwa khejur",
//         "weight": "250 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/zWcRN43/sofeda-sapodilla-1-kg.webp ",
//         "name": "Sofeda",
//         "weight": "1pc",
//         "price": "৳ 20"

//     },
//     {
//         "image": " https://i.ibb.co/HXdBwCL/sobuj-angur-green-grapes-12-gm-250-gm.webp ",
//         "name": "green-grapes",
//         "weight": "200gm",
//         "price": "৳ 65"

//     },
//     {
//         "image": " https://i.ibb.co/Zdc85PG/ajwa-dates-standard-500-gm.webp",
//         "name": "ajwa khejur",
//         "weight": "500 gm",
//         "price": "৳ 350"
//     },
//     {
//         "image": " https://i.ibb.co/X5ckZFf/al-dhafra-dates-khejur-400-gm.webp ",
//         "name": "al dafra khejur",
//         "weight": "400 gm",
//         "price": "৳ 250"
//     },
//     {
//         "image": " https://i.ibb.co/bgnFjcV/daab-green-coconut-1-pcs.webp ",
//         "name": " Daab ",
//         "weight": " 2pcs",
//         "price": "৳ 120 "

//     },
//     {
//         "image": " https://i.ibb.co/Qd760Mq/arabian-knight-mabroom-dates-standard-500-gm.webp ",
//         "name": "arabian mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]



// const cooking = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/zWcRN43/sofeda-sapodilla-1-kg.webp ",
//         "name": "Sofeda",
//         "weight": "1pc",
//         "price": "৳ 20"

//     },
//     {
//         "image": " https://i.ibb.co/HXdBwCL/sobuj-angur-green-grapes-12-gm-250-gm.webp ",
//         "name": "green-grapes",
//         "weight": "200gm",
//         "price": "৳ 65"

//     },
//     {
//         "image": " https://i.ibb.co/Zdc85PG/ajwa-dates-standard-500-gm.webp",
//         "name": "ajwa khejur",
//         "weight": "500 gm",
//         "price": "৳ 350"
//     },
//     {
//         "image": " https://i.ibb.co/X5ckZFf/al-dhafra-dates-khejur-400-gm.webp ",
//         "name": "al dafra khejur",
//         "weight": "400 gm",
//         "price": "৳ 250"
//     },
//     {
//         "image": " https://i.ibb.co/bgnFjcV/daab-green-coconut-1-pcs.webp ",
//         "name": " Daab ",
//         "weight": " 2pcs",
//         "price": "৳ 120 "

//     },
//     {
//         "image": " https://i.ibb.co/Qd760Mq/arabian-knight-mabroom-dates-standard-500-gm.webp ",
//         "name": "arabian mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]



// const hygenic = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/HXdBwCL/sobuj-angur-green-grapes-12-gm-250-gm.webp ",
//         "name": "green-grapes",
//         "weight": "200gm",
//         "price": "৳ 65"

//     },
//     {
//         "image": " https://i.ibb.co/Zdc85PG/ajwa-dates-standard-500-gm.webp",
//         "name": "ajwa khejur",
//         "weight": "500 gm",
//         "price": "৳ 350"
//     },
//     {
//         "image": " https://i.ibb.co/X5ckZFf/al-dhafra-dates-khejur-400-gm.webp ",
//         "name": "al dafra khejur",
//         "weight": "400 gm",
//         "price": "৳ 250"
//     },
//     {
//         "image": " https://i.ibb.co/bgnFjcV/daab-green-coconut-1-pcs.webp ",
//         "name": " Daab ",
//         "weight": " 2pcs",
//         "price": "৳ 120 "

//     },
//     {
//         "image": " https://i.ibb.co/Qd760Mq/arabian-knight-mabroom-dates-standard-500-gm.webp ",
//         "name": "arabian mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]



// const breadAndBakery = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/Zdc85PG/ajwa-dates-standard-500-gm.webp",
//         "name": "ajwa khejur",
//         "weight": "500 gm",
//         "price": "৳ 350"
//     },
//     {
//         "image": " https://i.ibb.co/X5ckZFf/al-dhafra-dates-khejur-400-gm.webp ",
//         "name": "al dafra khejur",
//         "weight": "400 gm",
//         "price": "৳ 250"
//     },
//     {
//         "image": " https://i.ibb.co/bgnFjcV/daab-green-coconut-1-pcs.webp ",
//         "name": " Daab ",
//         "weight": " 2pcs",
//         "price": "৳ 120 "

//     },
//     {
//         "image": " https://i.ibb.co/Qd760Mq/arabian-knight-mabroom-dates-standard-500-gm.webp ",
//         "name": "arabian mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]



// const beautyAndHealth = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/X5ckZFf/al-dhafra-dates-khejur-400-gm.webp ",
//         "name": "al dafra khejur",
//         "weight": "400 gm",
//         "price": "৳ 250"
//     },
//     {
//         "image": " https://i.ibb.co/bgnFjcV/daab-green-coconut-1-pcs.webp ",
//         "name": " Daab ",
//         "weight": " 2pcs",
//         "price": "৳ 120 "

//     },
//     {
//         "image": " https://i.ibb.co/Qd760Mq/arabian-knight-mabroom-dates-standard-500-gm.webp ",
//         "name": "arabian mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]



// const homesAndKitchen = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/bgnFjcV/daab-green-coconut-1-pcs.webp ",
//         "name": " Daab ",
//         "weight": " 2pcs",
//         "price": "৳ 120 "

//     },
//     {
//         "image": " https://i.ibb.co/Qd760Mq/arabian-knight-mabroom-dates-standard-500-gm.webp ",
//         "name": "arabian mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]



// const petCare = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/Qd760Mq/arabian-knight-mabroom-dates-standard-500-gm.webp ",
//         "name": "arabian mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]



// const snacks = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/Qd760Mq/arabian-knight-mabroom-dates-standard-500-gm.webp ",
//         "name": "arabian mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 300"
//     },
//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]



// const toysAndFun = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/37VrfDh/arzish-black-kalmi-safawi-dates-500-gm.webp ",
//         "name": "arzish black khejur",
//         "weight": "500 gm",
//         "price": "৳ 150"
//     },
//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]




// const dairy = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/f0YH1Kd/arzish-combo-dates-500-gm.webp ",
//         "name": "arzish combo khejur",
//         "weight": "500 gm",
//         "price": "৳ 230"
//     },
//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]




// const cleaningSupplies = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/YXN09CD/arzish-mabroom-al-madina-premium-dates-500-gm.webp ",
//         "name": "arzish mabroom khejur",
//         "weight": "500 gm",
//         "price": "৳ 270"
//     },
//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]




// const stationeryAndOffice = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/cQYKnpP/barari-dates-sealed-500-gm.webp ",
//         "name": "arzish medhjool khejur",
//         "weight": "250 gm",
//         "price": "৳ 200"
//     },
//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]




// const sportAndFitness = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/5hsBcM8/barari-tunisian-dates-500-gm.webp",
//         "name": "barari khejur",
//         "weight": "500 gm",
//         "price": "৳ 180"
//     },
//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]




// const candy = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/BVpVnrn/black-kalmi-safawi-dates-sealed-500-gm.webp ",
//         "name": "barari tunishian khejur",
//         "weight": "500 gm",
//         "price": "৳ 200"

//     },
//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]




// const beverage = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/PQLLpm6/guava-premium-50-gm-1-kg.webp ",
//         "name": "Guava",
//         "weight": " 500gm",
//         "price": " ৳ 45"

//     },
//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]




// const baking = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/5YGNGkB/gala-apple-50-gm-1-kg.webp",
//         "name": " Apple",
//         "weight": " 500gm",
//         "price": " ৳ 70"

//     },
//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]




// const babyCare = [
//     //   Its Fruits section

//     {
//         "image": " https://i.ibb.co/cwTmktC/arzish-medjool-premium-dates-sealed-250-gm.webp ",
//         "name": "black kalmi khejur",
//         "weight": "500 gm",
//         "price": "৳ 220"
//     },
//     {
//         "image": " https://i.ibb.co/Y8Z0sBn/shagor-kola-banana-sagor-4-pcs.webp ",
//         "name": "Banana",
//         "weight": "4pcs",
//         "price": "৳ 25"

//     },
//     {
//         "image": " https://i.ibb.co/mX8pKBL/orange-indian-50-gm-1-kg.webp ",
//         "name": "Orange ",
//         "weight": "2pcs ",
//         "price": "৳ 50 "

//     },
//     {
//         "image": " https://i.ibb.co/9ptdmJB/khaas-food-dates-chutney-200-gm.webp",
//         "name": "crown dabbas khejur",
//         "weight": "1 kg",
//         "price": "৳ 450"
//     },

// ]




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Product_Section() {
    const [selectedTab, setSelectedTab] = React.useState(0);


    const [allProducts, setAllProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true);
        //  Email er url eta dite hobe
        // const url = `http://localhost:5000/orders?email=${user.email}&date=${date}`
        // const url = `http://localhost:5000/products`
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
                console.log(data);
                setIsLoading(false);
            })
    }, [])



    // loading spinner
    if (isLoading) {
        return (
            <Box sx={{ textAlign: "center", py: 2 }}>
                <CircularProgress color="success" />
            </Box>
        );
    }






    // const [isLoading, setIsLoading] = React.useState(true);
    // React.useEffect(() => {
    //     setIsLoading(true);
    //     axios
    //         .get("http://localhost:5000/products")
    //         .then((result) => {
    //             setAllProducts(result.data);
    //             setIsLoading(false);
    //         });
    // }, []);

    // // loading spinner
    // if (isLoading) {
    //     return (
    //         <Box sx={{ textAlign: "center", py: 2 }}>
    //             <CircularProgress color="success" />
    //         </Box>
    //     );
    // }











    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Container sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 5 }}>
                <Tabs

                    variant="scrollable"
                    scrollButtons="auto"
                    centered value={selectedTab} onChange={handleChange} aria-label="basic tabs example">
                    <Tab sx={{ fontWeight: 600 }} label="All Products" {...a11yProps(0)} />
                    <Tab sx={{ fontWeight: 600 }} label="Fresh Fruits" {...a11yProps(1)} />
                    <Tab sx={{ fontWeight: 600 }} label="Fresh Vegetables" {...a11yProps(2)} />

                    <Tab sx={{ fontWeight: 600 }} label="Meat & Fish " {...a11yProps(3)} />
                    <Tab sx={{ fontWeight: 600 }} label="Cooking" {...a11yProps(4)} />
                    <Tab sx={{ fontWeight: 600 }} label="Snacks" {...a11yProps(5)} />

                    <Tab sx={{ fontWeight: 600 }} label="Bread & Bakery" {...a11yProps(6)} />
                    <Tab sx={{ fontWeight: 600 }} label="Beauty & Health" {...a11yProps(7)} />
                    <Tab sx={{ fontWeight: 600 }} label="Homes & Kitchen" {...a11yProps(8)} />

                    <Tab sx={{ fontWeight: 600 }} label="Pet Care" {...a11yProps(9)} />
                    <Tab sx={{ fontWeight: 600 }} label="Hygenic" {...a11yProps(10)} />
                    <Tab sx={{ fontWeight: 600 }} label="Toys & Fun" {...a11yProps(11)} />
                    <Tab sx={{ fontWeight: 600 }} label="Dairy" {...a11yProps(12)} />
                    <Tab sx={{ fontWeight: 600 }} label="Cleaning Supplies" {...a11yProps(13)} />
                    <Tab sx={{ fontWeight: 600 }} label="Stationery & Office" {...a11yProps(14)} />
                    <Tab sx={{ fontWeight: 600 }} label="Sport & Fitness" {...a11yProps(15)} />
                    <Tab sx={{ fontWeight: 600 }} label="Candy" {...a11yProps(16)} />
                    <Tab sx={{ fontWeight: 600 }} label="Beverage" {...a11yProps(17)} />
                    <Tab sx={{ fontWeight: 600 }} label="Baking" {...a11yProps(18)} />
                    <Tab sx={{ fontWeight: 600 }} label="Baby Care " {...a11yProps(19)} />
                </Tabs>
            </Box>
            <TabPanel value={selectedTab} index={0}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            allProducts.map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }
                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            fruits.map(singleFruitsProduct => <SingleFruitsProduct
                                key={singleFruitsProduct.name}
                                singleFruitsProduct={singleFruitsProduct}
                            ></SingleFruitsProduct>)
                        } */}

                        {
                            allProducts.slice(0, 34).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={2}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            vegetable.map(singleVegetableProduct => <SingleVegetableProduct
                                key={singleVegetableProduct.name}
                                singleVegetableProduct={singleVegetableProduct}
                            ></SingleVegetableProduct>)
                        } */}

                        {/* eta main */}

                        {/* {
                            allProducts.slice(34, 62).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        } */}
                        {
                            allProducts.slice(34, 40).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>

            <TabPanel value={selectedTab} index={3}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            meatAndFish.map(singleMeatAndFishProduct => <SingleMeatAndFishProduct
                                key={singleMeatAndFishProduct.name}
                                singleMeatAndFishProduct={singleMeatAndFishProduct}
                            ></SingleMeatAndFishProduct>)
                        } */}
                        {
                            allProducts.slice(62, 87).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }
                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={4}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            cooking.map(singleCookingProduct => <SingleCookingProduct
                                key={singleCookingProduct.name}
                                singleCookingProduct={singleCookingProduct}
                            ></SingleCookingProduct>)
                        } */}

                        {
                            allProducts.slice(87, 131).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={5}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            snacks.map(singleSnacksProduct => <SingleSnacksProduct
                                key={singleSnacksProduct.name}
                                singleSnacksProduct={singleSnacksProduct}
                            ></SingleSnacksProduct>)
                        } */}

                        {
                            allProducts.slice(222, 245).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>

            <TabPanel value={selectedTab} index={6}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            breadAndBakery.map(singleBreadAndBakeryProduct => <SingleBreadAndBakeryProduct
                                key={singleBreadAndBakeryProduct.name}
                                singleBreadAndBakeryProduct={singleBreadAndBakeryProduct}
                            ></SingleBreadAndBakeryProduct>)
                        } */}

                        {
                            allProducts.slice(140, 159).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={7}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            beautyAndHealth.map(singleBeautyAndHealthProduct => <SingleBeautyAndHealthProduct
                                key={singleBeautyAndHealthProduct.name}
                                singleBeautyAndHealthProduct={singleBeautyAndHealthProduct}
                            ></SingleBeautyAndHealthProduct>)
                        } */}

                        {
                            allProducts.slice(159, 187).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={8}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            homesAndKitchen.map(singleHomesAndKitchenProduct => <SingleHomesAndKitchenProduct
                                key={singleHomesAndKitchenProduct.name}
                                singleHomesAndKitchenProduct={singleHomesAndKitchenProduct}
                            ></SingleHomesAndKitchenProduct>)
                        } */}

                        {
                            allProducts.slice(187, 208).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>

            <TabPanel value={selectedTab} index={9}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            petCare.map(singlePetCareProduct => <SinglePetCareProduct
                                key={singlePetCareProduct.name}
                                singlePetCareProduct={singlePetCareProduct}
                            ></SinglePetCareProduct>)
                        } */}

                        {
                            allProducts.slice(208, 222).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={10}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            hygenic.map(singleHygenicProduct => <SingleHygenicProduct
                                key={singleHygenicProduct.name}
                                singleHygenicProduct={singleHygenicProduct}
                            ></SingleHygenicProduct>)
                        } */}

                        {
                            allProducts.slice(131, 140).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={11}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            toysAndFun.map(singleToysAndFunProduct => <SingleToysAndFunProduct
                                key={singleToysAndFunProduct.name}
                                singleToysAndFunProduct={singleToysAndFunProduct}
                            ></SingleToysAndFunProduct>)
                        } */}

                        {
                            allProducts.slice(245, 266).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={12}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            dairy.map(singleDairyProduct => <SingleDairyProduct
                                key={singleDairyProduct.name}
                                singleDairyProduct={singleDairyProduct}
                            ></SingleDairyProduct>)
                        } */}

                        {
                            allProducts.slice(266, 290).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={13}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            cleaningSupplies.map(singleCleaningSuppliesProduct => <SingleCleaningSuppliesProduct
                                key={singleCleaningSuppliesProduct.name}
                                singleCleaningSuppliesProduct={singleCleaningSuppliesProduct}
                            ></SingleCleaningSuppliesProduct>)
                        } */}

                        {
                            allProducts.slice(290, 310).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={14}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            stationeryAndOffice.map(singleStationeryAndOfficeProduct => <SingleStationeryAndOfficeProduct
                                key={singleStationeryAndOfficeProduct.name}
                                singleStationeryAndOfficeProduct={singleStationeryAndOfficeProduct}
                            ></SingleStationeryAndOfficeProduct>)
                        } */}

                        {
                            allProducts.slice(310, 333).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={15}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            sportAndFitness.map(singleSportAndFitnessProduct => <SingleSportAndFitnessProduct
                                key={singleSportAndFitnessProduct.name}
                                singleSportAndFitnessProduct={singleSportAndFitnessProduct}
                            ></SingleSportAndFitnessProduct>)
                        } */}

                        {
                            allProducts.slice(333, 342).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={16}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            candy.map(singleCandyProduct => <SingleCandyProduct
                                key={singleCandyProduct.name}
                                singleCandyProduct={singleCandyProduct}
                            ></SingleCandyProduct>)
                        } */}

                        {
                            allProducts.slice(342, 349).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={17}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            beverage.map(singleBeverageProduct => <SingleBeverageProduct
                                key={singleBeverageProduct.name}
                                singleBeverageProduct={singleBeverageProduct}
                            ></SingleBeverageProduct>)
                        } */}

                        {
                            allProducts.slice(349, 372).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={18}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            baking.map(singleBakingProduct => <SingleBakingProduct
                                key={singleBakingProduct.name}
                                singleBakingProduct={singleBakingProduct}
                            ></SingleBakingProduct>)
                        } */}

                        {
                            allProducts.slice(372, 381).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={selectedTab} index={19}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {
                            babyCare.map(singleBabyCareProduct => <SingleBabyCareProduct
                                key={singleBabyCareProduct.name}
                                singleBabyCareProduct={singleBabyCareProduct}
                            ></SingleBabyCareProduct>)
                        } */}

                        {
                            allProducts.slice(381, 398).map(singleAllProduct => <SingleAllProduct
                                key={singleAllProduct.name}
                                singleAllProduct={singleAllProduct}
                            ></SingleAllProduct>)
                        }

                    </Grid>
                </Box>
            </TabPanel>
        </Container>
    );
}
