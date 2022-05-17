import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import './SingleAllProduct.css'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const SingleFarmer = ({ singleFarmer }) => {
    const { farmerName, image, price, _id } = singleFarmer;
    // const { name, image, weight, price, _id } = props.singleAllProduct;
    let history = useHistory();

    const handleHiredBtn = (id) => {
        // history.push(`/order/${id}`);
        swal("Please contact us and give us a message about hiring farmers.");
        history.push(`/contact`);
    };

    return (
        <div>
            {/* <h3>This is all product</h3> */}
            {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
            <Grid item xs={4} sm={4} md={12} sx={{}} spacing={2}>

                <Card className='products-card' sx={{ width: '250px', marginBottom: 5, mr: 4, border: 0, boxShadow: 3 }} >
                    <CardMedia
                        component="img"
                        // height="140"
                        style={{ height: '170px', width: 'auto', margin: '0 auto' }}
                        image={image}
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} gutterBottom variant="h5" component="div">
                            {farmerName}
                        </Typography>
                        <Typography sx={{ fontWeight: 600, color: '#666362' }} gutterBottom variant="paragraph" component="div">
                            Price: {price}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{
                        justifyContent: 'center'
                    }} >

                        <Button onClick={() => handleHiredBtn(_id)} className="purchase-btn" size="small" sx={{ color: '#00a848', fontWeight: 600, fontSize: 15 }} >
                            {/* <i class="fas fa-handshake fs-5 Purchase-icon"></i> */}
                            Hire</Button>

                    </CardActions>
                </Card>

            </Grid>

        </div >
    );
};

export default SingleFarmer;