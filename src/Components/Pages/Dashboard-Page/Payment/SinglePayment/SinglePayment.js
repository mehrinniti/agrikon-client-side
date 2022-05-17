import PaymentIcon from "@mui/icons-material/Payment";
import {
    Button,
    CircularProgress,
    Container,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import useDocumentTitle from "../../../../../hooks/useDocumentTitle";

const SinglePayment = () => {

    // dynamic title
    useDocumentTitle("Payment");

    // const [orders, setOrders] = useState([]);
    const [orderPayments, setOrderPayments] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { user, token } = useAuth();
    const history = useHistory();

    // load ordes by email
    useEffect(() => {
        setIsLoading(true);
        axios({
            method: "get",
            // url: `https://afternoon-tor-94038.herokuapp.com/orders?email=${user?.email}`,
            url: `http://localhost:5000/orders?email=${user.email}`,
            headers: {
                'authorization': `Bearer ${token}`,
            },
        }).then((result) => {
            setOrderPayments(result.data);
            console.log('single Payment data ', result.data);
            setIsLoading(false);
        });
    }, [user?.email]);

    // handlePay
    const handlePay = (id) => {
        console.log(id);
        history.push(`/dashboard/payment/${id}`);
        // navigate(`/dashboard/payment/${id}`);
    };

    // loading spinner
    if (isLoading) {
        return (
            <Box sx={{ textAlign: "center", py: 2 }}>
                <CircularProgress color="success" />
            </Box>
        );
    }



    return (
        <Container>
            <Typography
                sx={{ textAlign: "center", pb: 2 }}
                variant="h4"
                color="secondary"
            >
                Make Payment
            </Typography>
            <Divider />
            <TableContainer sx={{ my: 3 }} component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="Appointment table">
                    <TableHead sx={{ bgcolor: "#f0f4ef" }}>
                        <TableRow>
                            <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">Weight</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center"> payment Status</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderPayments.map((row) => (
                            <TableRow
                                hover
                                key={row._id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell align="center">{row.productName}</TableCell>
                                <TableCell align="center">{row.productWeight}</TableCell>
                                <TableCell align="center">৳ {row.productPrice}</TableCell>
                                <TableCell align="center">
                                    {row.payment ? "Paid" : "Pending"}
                                </TableCell>
                                <TableCell align="center">
                                    {row.payment ? (
                                        "Paid"
                                    ) : (
                                        <Button
                                            onClick={() => handlePay(row._id)}
                                            variant="text"
                                            startIcon={<PaymentIcon />}
                                        >
                                            Pay
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default SinglePayment;