import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import swal from "sweetalert";
import useDocumentTitle from '../../../../hooks/useDocumentTitle';

const ManageFarmers = () => {

    // dynamic title
    useDocumentTitle("Manage All Farmers");

    const [allFarmers, setAllFarmers] = useState([]);
    useEffect(() => {
        fetch('https://dry-earth-68796.herokuapp.com/farmers')
            .then(res => res.json())
            .then(data => setAllFarmers(data))
    }, []);

    const handleFarmer = id => {
        const proceed = window.confirm('are you sure, you want to delete?')


        if (proceed) {
            const url = `https://dry-earth-68796.herokuapp.com/farmers/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal({
                            title: "Successfully Deleted!",
                            icon: "success",
                        });
                        const remaining = allFarmers.filter(allFarmer => allFarmer._id !== id)
                        setAllFarmers(remaining);
                    }
                });
        };
    };
    return (
        <div>
            {/* <h1>Manage All Products</h1> */}
            <Typography
                sx={{ textAlign: "center", pb: 3, fontWeight: 600, color: 'rgb(37, 36, 36, 0.83)' }}
                variant="h4"
            >
                Manage All Farmers
            </Typography>
            <Divider />
            <br />
            <br />
            <div className="allProduct-container">
                <Grid container columns={{ xs: 4, sm: 4, md: 12 }}>
                    {
                        allFarmers.map(allFarmer => <div className="single-allProduct" key={allFarmer._id}>
                            {/* <img style={{ width: "100%" }} src={allProduct.image} alt="" />
                        <h2>{allProduct.name}</h2>
                        <p>{allProduct.weight}</p>
                        <h3>{allProduct.price}</h3>
                        <br /> */}




                            <Box sx={{ flexGrow: 1 }}>

                                <Grid item xs={4} sm={4} md={12} sx={{ display: 'flex' }} spacing={2} >

                                    <Card className='products-card' sx={{ width: '250px', marginBottom: 3, mr: 1.9, border: 0, boxShadow: 3, }} >
                                        <CardMedia
                                            component="img"
                                            // height="140"
                                            style={{ height: '170px', width: 'auto', margin: '0 auto' }}
                                            image={allFarmer.image}
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 20 }} gutterBottom variant="h5" component="div">
                                                {allFarmer.farmerName}
                                            </Typography>
                                            <Typography sx={{ fontSize: 15, fontWeight: 600, color: '#666362' }} gutterBottom variant="paragraph" component="div">
                                                Price: {allFarmer.price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{
                                            justifyContent: 'center'
                                        }} >
                                            <Button variant="contained" style={{ backgroundColor: "#008336", color: "white", borderRadius: "5px", padding: "8px 16px", marginBottom: 5, fontWeight: 600, letterSpacing: 1.4 }} onClick={() => handleFarmer(allFarmer._id)}><i className="fas fa-trash-alt pe-2"></i> Delete</Button>
                                        </CardActions>
                                    </Card>

                                </Grid>

                            </Box>

                        </div>)
                    }
                </Grid>
            </div>
        </div>
    );
};

export default ManageFarmers;