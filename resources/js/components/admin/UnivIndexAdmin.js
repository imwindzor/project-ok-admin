import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
    Box,
    Grid,
    Container,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import { customStyles, CustomButton } from "../../material-ui/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TableHome from "./TableHome";
import SearchIcon from "@material-ui/icons/Search";

function HomeBanner() {
    const history = useHistory();

    const classes = customStyles();

    // for modal
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box id="admin-home" className={classes.homeMargin}>
                <Container>
                    <Grid container alignItems="center" direction="column">
                        <Typography variant="h2" className={classes.whiteText}>
                            Generate Report (univ)
                        </Typography>
                        <Typography variant="h6" className={classes.whiteText}>
                            Filter reports from your university
                        </Typography>
                        <br />
                        <br />
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

function UnivIndexAdmin() {
    return (
        <>
            <Router>
                <HomeBanner />
                <TableHome />
            </Router>
        </>
    );
}

export default UnivIndexAdmin;
