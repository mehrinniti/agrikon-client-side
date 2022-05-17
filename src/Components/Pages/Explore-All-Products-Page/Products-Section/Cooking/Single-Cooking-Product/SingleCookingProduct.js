import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const SingleCookingProduct = (props) => {
    const { name, image, weight, price } = props.singleCookingProduct;
    return (
        <div>
            <Grid item xs={4} sm={4} md={12} sx={{}} spacing={2}>

                <Card className='products-card' sx={{ width: '250px', marginBottom: 5, mr: 4, border: 0, boxShadow: 3 }} >
                    <CardMedia
                        component="img"
                        // height="140"
                        style={{ height: '170px', width: 'auto', margin: '0 auto' }}
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {weight}
                        </Typography>
                        <Typography sx={{ fontSize: 20, fontWeight: 600, color: '#666362' }} gutterBottom variant="h5" component="div">
                            {price}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{
                        justifyContent: 'center'
                    }} >
                        <NavLink to='/order' className="purchase-btn">

                            <Button size="small" sx={{ color: '#00a848', fontWeight: 600, fontSize: 15 }} ><i class="fas fa-shopping-cart Purchase-icon"></i> Purchase</Button>
                        </NavLink>
                    </CardActions>
                </Card>

            </Grid>


        </div >
    );
};


export default SingleCookingProduct;