import React, { useState } from 'react';
import './Signin.css';
import signupImage from './../../../../images/signup.svg';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import { sendPasswordResetEmail } from 'firebase/auth';
import useDocumentTitle from '../../../../hooks/useDocumentTitle';
import swal from 'sweetalert';
import { Button } from '@mui/material';

const Signin = () => {

    const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook, emailSignIn, resetEmailPassword, saveUser, user, email, password, setEmail, setPassword, setIsLoading, setError, auth } = useAuth();

    // redirect private route
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const [isEmailSend, setIsEmailSend] = useState(false);


    // dynamic title
    useDocumentTitle("Sign in");

    // google redirect
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                console.log('google user details ', result.user);
                // setUser(result.user);
                console.log('email', result.user.email);

                //  save user to the database
                // saveUser(email, user.displayName, 'PUT');
                saveSocialUser(result.user.email, result.user.displayName, 'PUT');

                history.push(redirect_uri);

                swal({
                    title: "Successfully!",
                    text: "You are logged in!",
                    icon: "success",
                });

            })
            .catch(error => {
                // setError(error.message);

                swal({
                    text: error.message,
                    icon: "error",
                });

            })
            .finally(() => setIsLoading(false));
    }

    // github redirect
    const handleGithubSignIn = () => {
        signInUsingGithub()
            .then(result => {
                console.log('GitHub user details ', result.user);
                saveSocialUser(result.user.email, result.user.displayName, 'PUT');
                history.push(redirect_uri);

                swal({
                    title: "Successfully!",
                    text: "You are logged in!",
                    icon: "success",
                });

            })
            .catch(error => {

                swal({
                    text: error.message,
                    icon: "error",
                });

            })
            .finally(() => setIsLoading(false));
    }

    // facebook redirect
    const handleFacebookSignIn = () => {
        signInUsingFacebook()
            .then(result => {
                saveSocialUser(result.user.email, result.user.displayName, 'PUT');
                history.push(redirect_uri);
                console.log(result.user);
                console.log('Facebook user details ', result.user);

                swal({
                    title: "Successfully!",
                    text: "You are logged in!",
                    icon: "success",
                });

            })
            .catch(error => {

                swal({
                    text: error.message,
                    icon: "error",
                });

            })
            .finally(() => setIsLoading(false));
    }



    const saveSocialUser = (userEmail, displayName, method) => {
        const user = { userEmail, displayName };
        console.log('displayName : ', displayName);
        console.log('userEmail : ', userEmail);
        fetch('https://dry-earth-68796.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    // Email sign in
    const handleSignIn = e => {
        e.preventDefault();
        console.log(email, password);

        emailSignIn(email, password)
    }

    // Email reset/forget password

    // const handleResetPassword = () => {
    //     resetEmailPassword()
    //         .then(result => {

    //             alert("Successfuly send email");
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //         })
    // }

    const handleResetPassword = () => {
        setIsLoading(true);
        // resetEmailPassword(email);
        console.log(email);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // console.log(result);

                // alert("Please check your email.");
                swal({
                    text: "Please check your email.",
                    icon: "success",
                });

                // setIsEmailSend(true);

            })
            .catch(error => {
                // setError(error.message)

                swal({
                    text: error.message,
                    icon: "error",
                });

            })
            .finally(() => setIsLoading(false));
    }






    // const handleUserNameChange = e => {
    //     setUsername(e.target.value);
    //     console.log(username);
    // }

    const handleSignInEmail = e => {
        setEmail(e.target.value);
    }

    const handleSignInPassword = e => {
        setPassword(e.target.value);
    }



    return (
        <div>
            <Navbar></Navbar>
            {/* {
                isEmailSend && <div>
                    <h2 className='text-success'>Check Email </h2>
                </div>
            } */}
            <div className='sign-in-section'>
                <div className='container login-container'>
                    <div className="signin ">
                        <form onSubmit={handleSignIn} action="" className='sign-in-form form-container signin-panel-container'>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className='fas fa-envelope'></i>
                                <input onBlur={handleSignInEmail} type="email" placeholder='Email' />
                            </div>

                            <div className="input-field">
                                <i className='fas fa-lock'></i>
                                <input onBlur={handleSignInPassword} type="password" placeholder='Password' />
                            </div>

                            <div>
                                {/* <Link onClick={handleResetPassword} className="forgot-password"><p>Forgot your password?</p></Link> */}
                                <a onClick={handleResetPassword} className="forgot-password" href=''>Forgot your password?</a>
                                {/* <Button onClick={handleResetPassword}>Forgot your password?</Button> */}
                            </div>

                            <input type="submit" value="Login" className="signin-button" />

                            <p className="social-text">Or Sign in with social platform</p>

                            <div className="social-media">
                                <a onClick={handleFacebookSignIn} href="#" className="social-icon">
                                    <i className='fab fa-facebook'></i>
                                </a>
                                <a onClick={handleGoogleSignIn} href="#" className="social-icon">
                                    <i className='fab fa-google'></i>
                                </a>
                                <a onClick={handleGithubSignIn} href="#" className="social-icon">
                                    <i className='fab fa-github'></i>
                                </a>
                            </div>
                            <p className="account-text">Don't have an account ? <Link to="/signup">Sign up</Link></p>
                        </form>


                        <div className="panel right-panel signin-panel-container">
                            <div className="content">
                                <h3>New to Agrikon?</h3>
                                <br />
                                <Link className='text-decoration-none' to="/signup"><button className='signin-button panel-btn shadow'>Sign up</button></Link>
                            </div>
                            <img className='signin-image right-panel-img' src={signupImage} alt="" />
                        </div>

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Signin;