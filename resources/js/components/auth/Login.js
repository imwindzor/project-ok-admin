import React, { useState } from "react";
import {
    Container,
    Card,
    CardContent,
    Grid,
    Typography,
    IconButton,
    Box,
    TextField,
    LinearProgress,
    InputAdornment,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
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

const LoginForm = () => {
    const auth = useAuth();

    let history = useHistory();

    const classes = useStyles();

    const handleClose = (e) => {
        e.stopPropagation();
        history.goBack();
    };

    const [form, setForm] = useState({
        email: "",
        password: "",
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

    const [inputError, setInputError] = useState(false);
    const [fieldError, setFieldError] = useState({
        email: null,
        password: null,
    });

    const [onSubmit, setOnSubmit] = useState(false);
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setInputError(false);
        setOnSubmit(true);

        let response = await auth.login(form);
        switch (response.status) {
            case 200:
                if (response.data._type === "admin") {
                    history.push("/admin");
                } else {
                    history.push("/counsellor");
                }
                break;
            case 401:
                setOnSubmit(false);
                setInputError(true);
                break;
            case 422:
                setOnSubmit(false);
                setFieldError(response.data.errors);
                break;
        }
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
                                    Login
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
                                {inputError ? (
                                    <Grid item>
                                        <Typography
                                            variant="body2"
                                            color="error"
                                        >
                                            Please check your email and
                                            password.
                                        </Typography>
                                    </Grid>
                                ) : (
                                    ""
                                )}
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
                                                    label="Email"
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
                                        </Grid>
                                        <CustomButton
                                            type="submit"
                                            disabled={onSubmit}
                                            fullWidth
                                            background="primary"
                                        >
                                            Login
                                        </CustomButton>
                                    </form>
                                </Grid>
                            </Grid>
                            {/* <Grid item>
                                <Link
                                    to={{
                                        pathname: `/students/create`,
                                        state: { background: location },
                                    }}
                                >
                                    <Typography variant="body2">
                                        Don't have an account yet? Register
                                    </Typography>
                                </Link>
                            </Grid> */}
                        </Grid>
                    </Container>
                </CardContent>
            </Card>
        </Container>
    );
};

class Login extends React.Component {
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
                <LoginForm />
            </Box>
        );
    }
}

export default withStyles(styles)(Login);
