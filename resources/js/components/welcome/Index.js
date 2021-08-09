import React from "react";
import {
    Box,
    Grid,
    Card,
    CardContent,
    Container,
    Typography,
    Avatar,
} from "@material-ui/core";
import { Link, useLocation, Redirect } from "react-router-dom";

import {
    customStyles,
    cardStyles,
    CustomButton,
} from "../../material-ui/styles";
import { Phone } from "@material-ui/icons";
import NearMeIcon from "@material-ui/icons/NearMe";
import { useAuth } from "../auth/AuthProvider";
import AdminImg from "../../../../public/images/admin-home.svg";

const Home = () => {
    const classes = customStyles();

    return (
        <>
            <Box className={classes.homeMargin}>
                <Container>
                    <Grid container direction="column" alignItems="flex-start">
                        <Grid
                            className="grid-padding"
                            container
                            direction="column"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography
                                    className={`${classes.greenText} ${classes.margin}`}
                                    variant="h2"
                                >
                                    Online Kumustahan
                                </Typography>
                                <Typography
                                    className={`${classes.greenText} ${classes.subText}`}
                                    variant="h6"
                                >
                                    Admin Page
                                </Typography>
                                <center>
                                    <img src={AdminImg} className="admin-img" />
                                </center>
                                <center>
                                    <Typography
                                        className={classes.greenText}
                                        component="span"
                                    >
                                        Here, you can filter results and monitor
                                        individuals
                                    </Typography>
                                    <br />
                                    <Typography
                                        className={classes.greenText}
                                        component="span"
                                    >
                                        Register and Login to start.
                                    </Typography>
                                    <br />
                                    <br />
                                    <Grid item>
                                        <em style={{ color: "red" }}>
                                            Note: Only CHED Representative can
                                            register University Admin.
                                            Registered university admins can
                                            proceed to login.
                                        </em>
                                    </Grid>
                                </center>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

const Index = () => {
    const auth = useAuth();
    let location;
    if (auth.user.isLoggedIn && auth.user.data._type === "admin") {
        location = {
            pathname: "/admin",
        };
    } else if (auth.user.isLoggedIn && auth.user.data._type === "adminched") {
        location = {
            pathname: "/adminched",
        };
    } else {
        location = {
            pathname: "/",
        };
    }

    return (
        <>
            {auth.user.isLoggedIn ? (
                <Redirect to={location} />
            ) : (
                <>
                    <Home />
                </>
            )}
        </>
    );
};

export default Index;
