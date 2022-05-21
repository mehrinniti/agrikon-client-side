import {
    Button,
    Container,
    Divider,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import './MakeAdmin.css';
import swal from 'sweetalert';
import useAuth from "../../../../hooks/useAuth";


const MakeAdmin = () => {

    // dynamic title
    useDocumentTitle("Make Admin");

    const { token } = useAuth();


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({});
    const onSubmit = (data) => {
        axios({
            method: "put",
            url: "https://dry-earth-68796.herokuapp.com/users/admin",
            headers: {
                'authorization': `Bearer ${token}`,
                // 'content-type': 'application/json'
            },
            data: data,
        }).then((result) => {
            if (result.data?.modifiedCount > 0) {
                swal({
                    title: "Successfully!",
                    text: "Make an Admin!",
                    icon: "success",
                });
                // toast.success("Admin made successfully");
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
                Make Admin
            </Typography>
            <Divider />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    marginX: "auto",
                    width: { xs: "80%", md: "50%" },
                    py: 9,
                }}
            >
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                fullWidth
                                label="Email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <span className="error">Email is required</span>
                            )}
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit" className="adminBtn" sx={{ backgroundColor: "#008336", fontSize: 15, fontWeight: 600 }} fullWidth variant="contained">
                                Make Admin
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    );
};

export default MakeAdmin;