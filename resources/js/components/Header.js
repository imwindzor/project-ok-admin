import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Container,
    Grid,
    Button,
    Typography,
    IconButton,
    Menu,
    MenuItem,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useRouteMatch, Link, useHistory } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";
import { useAuth } from "./auth/AuthProvider";
import { theme, CustomButton } from "../material-ui/styles";
import ProjectLogo from "../../../public/images/projectok-logo.svg";

const useStyle = makeStyles((theme) => ({
    logo: {
        "&:hover": {
            textDecoration: "none",
        },
    },
    title: {
        "&:after": {
            color: theme.palette.primary.main,
            content: "'Kumustahan'",
        },
    },
    link: {
        "&:hover": {
            color: theme.palette.secondary.main,
        },
    },
    linkRoute: {
        "&:hover": {
            textDecoration: "none",
        },
    },
    gridItem: {
        padding: "0 4px",
    },
}));

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
));

const Logo = () => {
    const auth = useAuth();
    let location;

    if (auth.user.isLoggedIn && auth.user._type === "admin") {
        location = {
            pathname: "/admin",
        };
    } else if (auth.user.isLoggedIn && auth.user._type === "counsellor") {
        location = {
            pathname: "/counsellor",
        };
    } else {
        location = {
            pathname: "/",
        };
    }

    const classes = useStyle();

    return (
        <Grid item>
            <Link to={location} className={classes.logo}>
                <IconButton>
                    <img src={ProjectLogo} />
                    <Typography
                        className={classes.title}
                        variant="h4"
                        color="secondary"
                    >
                        Online
                    </Typography>
                </IconButton>
            </Link>
        </Grid>
    );
};

const LoginRegisterButtons = () => {
    let history = useHistory();

    const classes = useStyle();

    return (
        <Grid
            container
            item
            direction="row"
            justify="flex-end"
            alignItems="center"
        >
            <Grid item className={classes.gridItem}>
                {/* href={`${url}register`} */}
                <Link
                    to={{
                        pathname: `/admins/create`,
                        state: {
                            background: {
                                pathname: "/",
                            },
                        },
                    }}
                    className={classes.linkRoute}
                >
                    <CustomButton>Register</CustomButton>
                </Link>
            </Grid>
            <Grid item className={classes.gridItem}>
                {/*href={`${url}login`}*/}

                <Link
                    to={{
                        pathname: `/auth/login`,
                        state: {
                            background: {
                                pathname: "/",
                            },
                        },
                    }}
                    className={classes.linkRoute}
                >
                    <CustomButton background="primary">Login</CustomButton>
                </Link>
            </Grid>
        </Grid>
    );
};

const AccountButton = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container item direction="row" justify="flex-end">
            <CustomButton
                aria-controls="menu-items"
                aria-haspopup="true"
                onClick={handleClick}
                startIcon={<AccountCircle fontSize="large" />}
                background="primary"
            >
                {props._name}
            </CustomButton>
            <StyledMenu
                id="menu-items"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Log out</MenuItem>
            </StyledMenu>
        </Grid>
    );
};

const Header = () => {
    const auth = useAuth();
    let headerItems;
    if (auth.user.isLoggedIn) {
        headerItems = (
            <AccountButton
                _name={`${auth.user.data._firstname}  ${auth.user.data._lastname} `}
                _type={auth.user.data._type}
            />
        );
    } else {
        headerItems = <LoginRegisterButtons />;
    }

    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar disableGutters={true}>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        wrap="nowrap"
                    >
                        <Logo />
                        {headerItems}
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
