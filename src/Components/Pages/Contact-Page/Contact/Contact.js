import {
    Button,
    Container,
    Grid,
    TextareaAutosize,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import useDocumentTitle from '../../../../hooks/useDocumentTitle';
import './Contact.css';
import SharedBannar from '../../../Shared/SharedBannar/SharedBannar';
import useAuth from "../../../../hooks/useAuth";

const Contact = () => {

    // dynamic title
    useDocumentTitle("Contact");


    //  Current date
    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    const { user } = useAuth();
    // const [star, setStar] = useState(2);
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
        // data.rating = star;
        // axios
        //     .post("https://dry-earth-68796.herokuapp.com/reviews", data)
        //     .then((result) => {
        //         if (result.data?.insertedId) {
        //             swal("Thanks for your review!  🥰");
        //             reset();
        //         }
        //     });
        console.log('contact us ', data)
        axios.post("https://dry-earth-68796.herokuapp.com/messages", data)
            .then(result => {
                if (result.data?.insertedId) {
                    swal({
                        title: "Successfully Delivered the Message!",
                        icon: "success",
                    });
                    reset();
                }
            });
    };


    return (
        <div>
            <Navbar></Navbar>
            <div className='contact-section'>
                <SharedBannar>Contact Us</SharedBannar>

                <div className="card mx-auto my-5 shadow" style={{ maxWidth: "900px" }}>
                    <div className="row g-0">
                        <div className="col-md-4 left-contact">
                            <div className="contact-info text-start text-white">
                                <p><i className="fas fa-map-marker-alt pe-3"></i>Address <br /> <span className='ms-4 ps-1'>Green Road, Panthapath</span> <br /><span className='ms-4 ps-1'>Dhaka, Bangladesh</span> </p><br />
                                <p><i className="fas fa-phone-square pe-3"></i>Lets Talk <br /> <span className='ms-4 ps-1'>666 888 0000</span></p><br />
                                <p><i className="fas fa-envelope pe-3"></i>General Support <br /> <span className='ms-4 ps-1'>agrikon.company@gmail.com</span></p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <Container sx={{ py: 3 }}>
                                    <Typography
                                        sx={{ textAlign: "center", fontWeight: 600, color: 'rgb(37, 36, 36, 0.83)' }}
                                        variant="h5"
                                    >
                                        Send Us A Message
                                    </Typography>
                                    <br />
                                    <Container component="main" maxWidth="xs">
                                        <Box
                                            sx={{
                                                marginTop: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                width: "100%",
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
                                                            label="Name"
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
                                                            label="Email"
                                                            {...register("email", { required: true })}
                                                        />
                                                        {errors.email && (
                                                            <span className="error">User Email is required</span>
                                                        )}
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            type="number"
                                                            fullWidth
                                                            label="Phone Number"
                                                            multiline
                                                            {...register("phoneNumber")}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <Typography
                                                            sx={{ fontWeight: 600, color: 'rgb(37, 36, 36, 0.83)' }}
                                                            variant="paragraph"
                                                        >
                                                            If you want to hire the farmer, write the name of the farmer in this place
                                                        </Typography>
                                                        <TextField
                                                            type="text"
                                                            fullWidth
                                                            label="Farmer Name"
                                                            multiline
                                                            {...register("farmerName")}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>

                                                        <TextareaAutosize
                                                            minRows={3}
                                                            placeholder="Write us a message"
                                                            style={{ width: '100%' }}
                                                            type="text"
                                                            fullWidth
                                                            // label="Message"
                                                            required
                                                            multiline
                                                            {...register("message", { required: true })}
                                                        />
                                                        {errors.message && (
                                                            <span className="error">Message is required</span>
                                                        )}
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            type="text"
                                                            label="Date"
                                                            fullWidth
                                                            // disabled
                                                            multiline
                                                            value={date}
                                                            {...register("date")}
                                                        />
                                                    </Grid>
                                                    <Button
                                                        type="submit"
                                                        // fullWidth
                                                        variant="contained"
                                                        style={{ backgroundColor: "#008336", color: "white", borderRadius: "5px", padding: "8px 16px", marginBottom: 0, fontWeight: 600, letterSpacing: 1.2, marginTop: 17, marginLeft: '15px' }}
                                                    >
                                                        Send Message
                                                    </Button>
                                                </Grid>
                                            </Box>
                                        </Box>
                                    </Container>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div >
    );
};

export default Contact;