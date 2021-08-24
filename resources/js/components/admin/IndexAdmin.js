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
// import { Charts } from "./TableHome";
import SearchIcon from "@material-ui/icons/Search";
import ChartsImg from "../../../../public/images/Analytics-bro.svg";

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

    const [value, setValue] = useState("");
    const handleChange = (e) => setValue(e.target.value);

    const [click, setClick] = useState("");
    const handleClick = (e) => setClick(e.target.value);
    console.log(click);

    return (
        <>
            <Box id="admin-home" className={classes.homeMargin}>
                <Container>
                    <Grid container alignItems="center" direction="column">
                        <Typography variant="h2" className={classes.whiteText}>
                            Generate Reports
                        </Typography>
                        <Typography variant="h6" className={classes.whiteText}>
                            Filter reports from different Universities
                        </Typography>
                        <br />
                        <br />
                        <FormControl
                            id="university"
                            fullWidth
                            variant="outlined"

                            // disabled={onSubmit}
                            // error={fieldError.university ? true : false}
                        >
                            <InputLabel id="select-label">
                                University/College
                            </InputLabel>
                            <Select
                                labelId="select-label"
                                id="university"
                                label="University/College"
                                name="university"
                                onChange={handleChange}
                                // value={form.university}
                            >
                                <MenuItem value="None">None</MenuItem>
                                <MenuItem value="University of the Cordilleras">
                                    University of the Cordilleras
                                </MenuItem>
                                <MenuItem value="Apayao State College">
                                    Apayao State College
                                </MenuItem>
                                <MenuItem value="Abra State Institute of Science and Technology">
                                    Abra State Institute of Science and
                                    Technology
                                </MenuItem>
                                <MenuItem value="Baguio Central University">
                                    Baguio Central University
                                </MenuItem>
                                <MenuItem value="Cordillera Career Development College">
                                    Cordillera Career Development College
                                </MenuItem>
                                <MenuItem value="Divine Word College of Bangued">
                                    Divine Word College of Bangued
                                </MenuItem>
                                <MenuItem value="Ifugao State University - Lamut Campus">
                                    Ifugao State University - Lamut Campus
                                </MenuItem>
                                <MenuItem value="International School of Asia and Pacific">
                                    International School of Asia and Pacific
                                </MenuItem>
                                <MenuItem
                                    value="Kings College of the
                                            Philippines"
                                >
                                    Kings College of the Philippines
                                </MenuItem>
                                <MenuItem value="Kalinga State University">
                                    Kalinga State University
                                </MenuItem>
                                <MenuItem value="Saint Tonis College">
                                    Saint Tonis College
                                </MenuItem>
                                <MenuItem value="Pines City Colleges">
                                    Pines City Colleges
                                </MenuItem>
                                <MenuItem value="University of Baguio">
                                    University of Baguio
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <br />

                        <CustomButton
                            type="submit"
                            background="secondary"
                            value={value}
                            onClick={handleClick}
                        >
                            <SearchIcon />
                            &nbsp; Search
                        </CustomButton>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

function IndexAdmin() {
    return (
        <>
            <Router>
                <HomeBanner />
                <TableHome />
            </Router>
        </>
    );
}

export default IndexAdmin;
