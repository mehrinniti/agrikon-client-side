import { useEffect, useState } from "react"
import initializeAuthentication from "../Components/Pages/Login/Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    GithubAuthProvider,
    FacebookAuthProvider,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    sendPasswordResetEmail,
    getIdToken
} from "firebase/auth";
import swal from "sweetalert";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [adminIsLoading, setAdminIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    console.log(admin);
    console.log(isLoading);
    const [token, setToket] = useState('');
    // const [isPaid, setIsPaid] = useState(false);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    // Google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
        // .then(result => {
        //     console.log(result.user);
        //     setUser(result.user);
        // })
        // .catch(error => {
        //     setError(error.message);
        // })
    }

    // Github
    const signInUsingGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider);
        // .then(result => {
        //     setUser(result.user)
        // })
    }

    // Facebook
    const signInUsingFacebook = () => {
        setIsLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    // Email sign up
    const emailSignUp = (username, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const signupUser = result.user;
                console.log(signupUser);
                setError('');
                verifyEmail();
                //  save user to the database
                saveUser(email, username, 'POST')
                // setEmailUsername();
                updateProfile(auth.currentUser, { displayName: username })
                    .then(result => { })


                // swal({
                //     title: "Successfully!",
                //     text: "You are sign up!",
                //     icon: "success",
                // });

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

    // Email Verification

    const verifyEmail = () => {
        setIsLoading(true);
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);

                alert("You must verify your email");

                // swal({
                //     title: "Successfully!",
                //     text: "You are sign up!",
                //     icon: "success",
                // });

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

    // reset/forgot password
    const resetEmailPassword = (email) => {
        setIsLoading(true);
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result.user);
                // alert("Successfuly send email");

                swal({
                    title: "Are you sure?",
                    text: "You will change the password!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            swal("Check email to reset password!", {
                                icon: "success",
                            });
                        } else {
                            swal("Password not changed!");
                        }
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



    // Email sign in
    const emailSignIn = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const signinUser = result.user;
                console.log(signinUser);
                setError('');

                swal({
                    title: "Successfully!",
                    text: "You are logged in!",
                    icon: "success",
                });


                // setEmailUsername();
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

    // Update user name
    const setEmailUsername = () => {

    }

    //  Admin
    useEffect(() => {
        setAdminIsLoading(true);
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data.admin)
            })
            .finally(() => setAdminIsLoading(false));
    }, [user.email])


    const signout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false))

    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToket(idToken);
                    })
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })

    }, [])


    return {
        user,
        admin,
        token,
        error,
        auth,
        email,
        password,
        username,
        isLoading,
        adminIsLoading,
        // isPaid,
        // setIsPaid,
        setAdminIsLoading,
        setEmail,
        setPassword,
        setUsername,
        setError,
        setIsLoading,
        signInUsingGoogle,
        signInUsingGithub,
        signInUsingFacebook,
        emailSignUp,
        emailSignIn,
        resetEmailPassword,
        saveUser,
        signout
    }


}

export default useFirebase;