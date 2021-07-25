import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Container,
    Card,
    CardContent,
    Grid,
    Typography,
    IconButton,
    Box,
    MenuItem,
    InputLabel,
    TextField,
    FormControl,
    Select,
    LinearProgress,
    InputAdornment,
    FormHelperText,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useHistory, useLocation, Link } from "react-router-dom";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import { CloseRounded, Visibility, VisibilityOff } from "@material-ui/icons";
import { useAuth } from "./AuthProvider";
import { theme, CustomButton } from "../../material-ui/styles";

const styles = (theme) => ({
    box: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        paddingTop: "6%",
        background: "rgba(0, 0, 0, 0.15)",
    },
});

const useStyles = makeStyles((theme) => ({
    spacing: {
        paddingTop: 8,
        paddingBottom: 10,
    },
}));

const RegisterForm = () => {
    const auth = useAuth();

    let history = useHistory();
    let location = useLocation();

    const classes = useStyles();

    const handleClose = (e) => {
        e.stopPropagation();
        history.goBack();
    };

    const [form, setForm] = useState({
        last_name: "",
        first_name: "",
        middle_name: "",
        university: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const [fieldError, setFieldError] = useState({
        last_name: null,
        first_name: null,
        middle_name: null,
        university: null,
        email: null,
        password: null,
        password_confirmation: null,
    });

    const [onSubmit, setOnSubmit] = useState(false);
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setOnSubmit(true);

        let response = await auth.register(form);
        switch (response.status) {
            case 200:
                if (response.data._type === "admin") {
                    history.push("/admin");
                } else {
                    history.push("/counsellor");
                }
                break;
            case 422:
                setOnSubmit(false);
                setFieldError(response.data.errors);
                break;
        }

        console.log(response);
    };

    return (
        <Container maxWidth="sm">
            <Card>
                <CardContent>
                    <Container>
                        <Grid
                            container
                            directon="row"
                            justify="space-between"
                            alignContent="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography variant="h4" component="span">
                                    Register
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={handleClose}>
                                    <CloseRounded />
                                </IconButton>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                className={classes.spacing}
                            >
                                <Grid item xs={12} className={classes.spacing}>
                                    {onSubmit ? <LinearProgress /> : ""}
                                </Grid>
                                <Grid item xs={12}>
                                    <form
                                        autoComplete="off"
                                        onSubmit={handleOnSubmit}
                                    >
                                        <Grid
                                            container
                                            direction="column"
                                            spacing={2}
                                            className={classes.spacing}
                                        >
                                            <Grid item xs={12}>
                                                <TextField
                                                    autoFocus
                                                    id="last_name"
                                                    disabled={onSubmit}
                                                    error={
                                                        fieldError.last_name
                                                            ? true
                                                            : false
                                                    }
                                                    fullWidth
                                                    helperText={
                                                        fieldError.last_name
                                                            ? fieldError.last_name
                                                            : ""
                                                    }
                                                    label="Last Name"
                                                    name="last_name"
                                                    onChange={handleFormChange}
                                                    value={form.last_name}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="first_name"
                                                    disabled={onSubmit}
                                                    error={
                                                        fieldError.first_name
                                                            ? true
                                                            : false
                                                    }
                                                    fullWidth
                                                    helperText={
                                                        fieldError.first_name
                                                            ? fieldError.first_name
                                                            : "Note: Please include your second name if applicable"
                                                    }
                                                    label="First Name"
                                                    name="first_name"
                                                    onChange={handleFormChange}
                                                    value={form.first_name}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="middle_name"
                                                    disabled={onSubmit}
                                                    error={
                                                        fieldError.middle_name
                                                            ? true
                                                            : false
                                                    }
                                                    fullWidth
                                                    helperText={
                                                        fieldError.middle_name
                                                            ? fieldError.middle_name
                                                            : ""
                                                    }
                                                    label="Middle Name"
                                                    name="middle_name"
                                                    onChange={handleFormChange}
                                                    value={form.middle_name}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl
                                                    id="university"
                                                    fullWidth
                                                    variant="outlined"
                                                    disabled={onSubmit}
                                                    error={
                                                        fieldError.university
                                                            ? true
                                                            : false
                                                    }
                                                >
                                                    <InputLabel id="select-label">
                                                        University/College
                                                    </InputLabel>
                                                    <Select
                                                        labelId="select-label"
                                                        id="university"
                                                        label="University/College"
                                                        name="university"
                                                        onChange={
                                                            handleFormChange
                                                        }
                                                        value={form.university}
                                                    >
                                                        <MenuItem value="None">
                                                            None
                                                        </MenuItem>
                                                        <MenuItem value="University of the Cordilleras">
                                                            University of the
                                                            Cordilleras
                                                        </MenuItem>
                                                        <MenuItem value="Apayao State College">
                                                            Apayao State College
                                                        </MenuItem>
                                                        <MenuItem value="Abra State Institute of Science and Technology">
                                                            Abra State Institute
                                                            of Science and
                                                            Technology
                                                        </MenuItem>
                                                        <MenuItem value="Baguio Central University">
                                                            Baguio Central
                                                            University
                                                        </MenuItem>
                                                        <MenuItem value="Cordillera Career Development College">
                                                            Cordillera Career
                                                            Development College
                                                        </MenuItem>
                                                        <MenuItem value="Divine Word College of Bangued">
                                                            Divine Word College
                                                            of Bangued
                                                        </MenuItem>
                                                        <MenuItem value="Ifugao State University - Lamut Campus">
                                                            Ifugao State
                                                            University - Lamut
                                                            Campus
                                                        </MenuItem>
                                                        <MenuItem value="International School of Asia and Pacific">
                                                            International School
                                                            of Asia and Pacific
                                                        </MenuItem>
                                                        <MenuItem
                                                            value="Kings College of the
                                            Philippines"
                                                        >
                                                            Kings College of the
                                                            Philippines
                                                        </MenuItem>
                                                        <MenuItem value="Kalinga State University">
                                                            Kalinga State
                                                            University
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
                                                    <FormHelperText>
                                                        {fieldError.university
                                                            ? fieldError.university
                                                            : ""}
                                                    </FormHelperText>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="email"
                                                    disabled={onSubmit}
                                                    error={
                                                        fieldError.email
                                                            ? true
                                                            : false
                                                    }
                                                    fullWidth
                                                    helperText={
                                                        fieldError.email
                                                            ? fieldError.email
                                                            : ""
                                                    }
                                                    label="Email Address"
                                                    name="email"
                                                    onChange={handleFormChange}
                                                    value={form.email}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    disabled={onSubmit}
                                                    error={
                                                        fieldError.password
                                                            ? true
                                                            : false
                                                    }
                                                    fullWidth
                                                    helperText={
                                                        fieldError.password
                                                            ? fieldError.password
                                                            : ""
                                                    }
                                                    id="password"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={
                                                                        handleClickShowPassword
                                                                    }
                                                                    onMouseDown={
                                                                        handleMouseDownPassword
                                                                    }
                                                                    edge="end"
                                                                >
                                                                    {!showPassword ? (
                                                                        <Visibility />
                                                                    ) : (
                                                                        <VisibilityOff />
                                                                    )}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    label="Password"
                                                    name="password"
                                                    onChange={handleFormChange}
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    value={form.password}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    disabled={onSubmit}
                                                    error={
                                                        fieldError.password_confirmation
                                                            ? true
                                                            : false
                                                    }
                                                    fullWidth
                                                    helperText={
                                                        fieldError.password_confirmation
                                                            ? fieldError.password_confirmation
                                                            : ""
                                                    }
                                                    id="password_confirmation"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={
                                                                        handleClickShowPassword
                                                                    }
                                                                    onMouseDown={
                                                                        handleMouseDownPassword
                                                                    }
                                                                    edge="end"
                                                                >
                                                                    {!showPassword ? (
                                                                        <Visibility />
                                                                    ) : (
                                                                        <VisibilityOff />
                                                                    )}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    label="Confirm Password"
                                                    name="password_confirmation"
                                                    onChange={handleFormChange}
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    value={
                                                        form.password_confirmation
                                                    }
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                        <CustomButton
                                            type="submit"
                                            fullWidth
                                            background="primary"
                                        >
                                            Create Account
                                        </CustomButton>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </CardContent>
            </Card>
        </Container>
    );
};

class Register extends React.Component {
    constructor() {
        super();
        this.modalRef = React.createRef();
    }

    componentDidMount() {
        disableBodyScroll(this.modalRef.current);
    }

    componentWillUnmount() {
        clearAllBodyScrollLocks();
    }

    render() {
        const { classes } = this.props;

        return (
            <Box ref={this.modalRef} className={classes.box}>
                <RegisterForm />
            </Box>
        );
    }
}

export default withStyles(styles)(Register);
