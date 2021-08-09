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
    Modal,
    Fade,
    Backdrop,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useRouteMatch, Link, useHistory } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";
import { useAuth } from "./auth/AuthProvider";
import { theme, CustomButton } from "../material-ui/styles";
import ProjectLogo from "../../../public/images/projectok-logo.svg";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

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
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: "white",
        padding: "2% 7% 2% 7%",
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
    } else if (auth.user.isLoggedIn && auth.user._type === "adminched") {
        location = {
            pathname: "/adminched",
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
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Radio
    const [value, setValue] = React.useState("ched_admin");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // console.log(value);

    let proceed;
    if (value === "ched_admin") {
        proceed = (
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
                <CustomButton
                    background="primary"
                    onClick={handleClose}
                    style={{
                        width: "250px",
                    }}
                >
                    Proceed
                </CustomButton>
            </Link>
        );
    } else {
        proceed = (
            <Link
                to={{
                    pathname: `/auth/univ`,
                    state: {
                        background: {
                            pathname: "/",
                        },
                    },
                }}
                className={classes.linkRoute}
            >
                <CustomButton
                    background="primary"
                    onClick={handleClose}
                    style={{
                        width: "250px",
                    }}
                >
                    Proceed
                </CustomButton>
            </Link>
        );
    }
    return (
        <>
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

                    {/* <Link
                    to={{
                        pathname: `/auth/login`,
                        state: {
                            background: {
                                pathname: "/",
                            },
                        },
                    }}
                    className={classes.linkRoute}
                > */}
                    <CustomButton background="primary" onClick={handleOpen}>
                        Login
                    </CustomButton>
                    {/* </Link> */}
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <h2
                                    id="transition-modal-title"
                                    style={{ color: "#289672" }}
                                >
                                    Login as
                                </h2>
                                <br />

                                <FormControl component="fieldset">
                                    {/* <FormLabel component="legend">
                                        Gender
                                    </FormLabel> */}
                                    <RadioGroup
                                        aria-label="admin"
                                        name="admins"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel
                                            value="ched_admin"
                                            control={<Radio />}
                                            label={
                                                <Typography
                                                    style={{
                                                        fontSize: "1.5rem",
                                                        color: "black",
                                                    }}
                                                >
                                                    CHED Admin
                                                </Typography>
                                            }
                                        />
                                        <FormControlLabel
                                            value="univ_admin"
                                            control={<Radio />}
                                            label={
                                                <Typography
                                                    style={{
                                                        fontSize: "1.5rem",
                                                        color: "black",
                                                    }}
                                                >
                                                    University Admin
                                                </Typography>
                                            }
                                        />
                                        <br />
                                        {proceed}
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </Fade>
                    </Modal>
                </Grid>
            </Grid>
        </>
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
