import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {

    const { user, admin, isLoading, adminIsLoading } = useAuth();

    console.log(admin);
    console.log(isLoading);

    if (isLoading) {
        return (
            <div className="spinner-border text-success" style={{ marginTop: "300px" }} role="status" >
                <span className="visually-hidden" > Loading...</span >
            </div >
        )
    }
    if (adminIsLoading) {
        return (
            <div className="spinner-border text-success" style={{ marginTop: "300px" }} role="status" >
                <span className="visually-hidden" > Loading...</span >
            </div >
        )
    }


    return (
        <Route

            {...rest}
            render={({ location }) =>
                user.displayName && admin ?
                    children :
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location }
                        }}
                    >

                    </Redirect>}

        >

        </Route>
    );
};

export default AdminRoute;