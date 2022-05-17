import React from 'react';
import useAuth from '../../../../../hooks/useAuth';

const SingleMessages = ({ clientMessage }) => {
    const { userName, email, phoneNumber, farmerName, message, date } = clientMessage;
    // const { date } = Contact;
    // const {date} = date
    const { user } = useAuth();


    //  Current date
    // var today = new Date(),
    //     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    return (
        <div>
            {/* <div className="col-md-4">
                {user?.photoURL ? (
                    <div>
                        <img
                            // style={{ width: 60, height: 60, borderRadius: "50%", marginBottom: 5, marginTop: 5 }}
                            src={user?.photoURL}
                            alt=""
                        />
                        <p>{user?.displayName}</p>
                    </div>
                ) : (
                    <div>
                        <img
                            style={{ width: 60, height: 60, }}
                            src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png"
                            alt="" />
                    </div>
                )}
            </div> */}
            <div className="col">
                <div className="card-body pb-3 shadow-lg rounded-3 text-start mb-3" style={{ backgroundColor: 'rgba(245, 245, 245, 0.751)' }}>
                    <h5 className="card-title"><b>Name :</b> {userName}</h5>
                    <h5 className="card-text"><b>Email :</b> {email}</h5>
                    <h5 className="card-text"><b>Phone Number :</b> {phoneNumber}</h5>
                    <h5 className="card-text"><b>Farmer Name :</b> {farmerName}</h5>
                    <h5 className="card-text"><b>Message :</b> {message}</h5>
                    <h5 className="card-text"><b>Date :</b> {date}</h5>
                </div>
            </div>
        </div>
    );
};

export default SingleMessages;