import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SingleAllProduct.css'
import { useHistory } from 'react-router-dom';

const SingleAllProduct = ({ singleAllProduct }) => {
    const { name, image, weight, price, _id } = singleAllProduct;
    // const { name, image, weight, price, _id } = props.singleAllProduct;
    let history = useHistory();

    const handlePurchasesBtn = (id) => {
        history.push(`/order/${id}`);
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
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {weight}
                        </Typography>
                        <Typography sx={{ fontSize: 20, fontWeight: 600, color: '#666362' }} gutterBottom variant="h5" component="div">
                            ৳ {price}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{
                        justifyContent: 'center'
                    }} >

                        <Button onClick={() => handlePurchasesBtn(_id)} className="purchase-btn" size="small" sx={{ color: '#00a848', fontWeight: 600, fontSize: 15 }} ><i class="fas fa-shopping-cart Purchase-icon"></i> Purchase</Button>

                    </CardActions>
                </Card>

            </Grid>
            {/* </Grid> */}



            {/* <div class="container">
                <div class="row align-items-start">
                    <div class="col-3 ">
                        <div class="card-group">
                            <div class="card">
                                <img src={image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{name}</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                    <small class="text-muted">{weight}</small>
                                </div>
                                <div class="card-footer">
                                    <button type="button" class="btn btn-primary">Purchase</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}








            {/* <div class="card-group">
                <div class="card">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                        <small class="text-muted">{weight}</small>
                    </div>
                    <div class="card-footer">
                        <button type="button" class="btn btn-primary">Purchase</button>
                    </div>
                </div> */}
            {/*                 
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div> */}
            {/* </div> */}



















        </div >
    );
};

export default SingleAllProduct;