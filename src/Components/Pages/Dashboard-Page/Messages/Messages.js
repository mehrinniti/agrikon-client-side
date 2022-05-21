import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useDocumentTitle from '../../../../hooks/useDocumentTitle';
import SingleMessages from './SingleMessages/SingleMessages';

const Messages = () => {

    // dynamic title
    useDocumentTitle("Messages");

    const [clientMessages, setClientMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        axios
            .get("https://dry-earth-68796.herokuapp.com/messages")
            .then((result) => {
                setClientMessages(result.data);
                setIsLoading(false);
            });
    }, []);

    // loading spinner
    if (isLoading) {
        return (
            <Box sx={{ textAlign: "center", py: 2 }}>
                <CircularProgress color="success" />
            </Box>
        );
    }



    //  Current date
    // var today = new Date(),
    //     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();



    return (
        <div>
            <div className="mb-3 mx-auto" style={{ maxWidth: "1000px" }}>
                <div className="row g-0">

                    {clientMessages.map((clientMessage) =>
                        <SingleMessages
                            key={clientMessage._id}
                            clientMessage={clientMessage}
                        // date={date}
                        ></SingleMessages>
                    )}


                    {/* <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="...">
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Messages;