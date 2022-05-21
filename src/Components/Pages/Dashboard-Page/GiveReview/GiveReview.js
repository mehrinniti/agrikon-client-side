import {
    Button,
    Container,
    Divider,
    Grid,
    Rating,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../../../hooks/useAuth";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";

const GiveReview = () => {

    // dynamic title
    useDocumentTitle("Review");


    const { user } = useAuth();
    const [star, setStar] = useState(2);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            userName: user?.displayName,
            email: user?.email,
        },
    });
    const onSubmit = (data) => {
        data.rating = star;
        axios
            .post("https://dry-earth-68796.herokuapp.com/reviews", data)
            .then((result) => {
                console.log(result);
                if (result.data?.insertedId) {
                    swal("Thanks for your review!  🥰");
                    reset();
                }
            });
    };
    return (
        <Container sx={{ py: 2 }}>
            <Typography
                sx={{ textAlign: "center", pb: 3, fontWeight: 600, color: 'rgb(37, 36, 36, 0.83)' }}
                variant="h4"
            >
                Please give your review
            </Typography>
            <Divider />
            <br />
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "90%",
                        marginX: "auto",
                    }}
                >
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    type="text"
                                    fullWidth
                                    required
                                    label="Your Name"
                                    {...register("userName", { required: true })}
                                />
                                {errors.userName && (
                                    <span className="error">User Name is required</span>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="email"
                                    fullWidth
                                    required
                                    label="Email Address"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <span className="error">User Email is required</span>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="text"
                                    fullWidth
                                    label="Review"
                                    required
                                    multiline
                                    {...register("review", { required: true })}
                                />
                                {errors.review && (
                                    <span className="error">Review is required</span>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    sx={{ mb: 1, color: 'black', fontSize: 17 }}
                                    variant="subtitle1"
                                >
                                    Give us your rating
                                </Typography>
                                <Rating
                                    precision={0.5}
                                    size="large"
                                    value={star}
                                    required
                                    onChange={(event, newValue) => {
                                        setStar(newValue);
                                    }}
                                />
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{ backgroundColor: "#008336", color: "white", borderRadius: "5px", padding: "8px 16px", marginBottom: 26, fontWeight: 600, letterSpacing: 1.4, marginTop: 17 }}
                            >
                                Give Review
                            </Button>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Container>
    );
};

export default GiveReview;