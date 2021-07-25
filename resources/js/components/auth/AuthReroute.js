import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const AuthReroute = ({ children, ...rest }) => {
    const auth = useAuth();

    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                    // {
                    //     if(auth.user && auth.user._type === "student"){
                    //         children
                    //     } else if(auth.user && auth.user._type === "counsellor") {
                    //         children
                    //     } else {

                    //     }
                    auth.user.isLoggedIn ? (
                        children
                    ) : (
                        <Redirect
                            to={{ pathname: "/", state: { from: location } }}
                        />
                    )
                // }
            }
        />
    );
};

export default AuthReroute;
