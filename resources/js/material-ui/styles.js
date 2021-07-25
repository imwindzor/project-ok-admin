import React from "react";
import { makeStyles, withStyles, createTheme } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "@fontsource/comfortaa/300.css";
import "@fontsource/comfortaa/400.css";
import "@fontsource/comfortaa/500.css";
import "@fontsource/comfortaa/700.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

export const theme = createTheme({
    palette: {
        type: "light",
        common: {
            black: "#35363a",
            white: "#fafbfc",
            grey: "#E0E0E0",
        },
        primary: {
            main: "#289672",
            light: "#29BB89",
            dark: "#1C694F",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#e9d700",
            light: "#EDDF33",
            dark: "#FFCE89",
        },
        background: {
            default: "#fafbfc",
        },
    },
    text: {
        primary: "#35363A",
    },
    typography: {
        htmlFontSize: 16,
        fontFamily: "Comfortaa",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        button: {
            fontSize: "1.2rem",
            fontWeight: 500,
            letterSpacing: "0.11em",
        },
    },
    props: {
        MuiAppBar: {
            color: "default",
        },
        MuiButtonBase: {
            disableRipple: true,
        },
    },
});

const buttonStyles = makeStyles((theme) => ({
    root: {
        width: (props) => props.width,
        color: (props) =>
            props.background === "primary"
                ? theme.palette.common.white
                : theme.palette.primary.main,
        background: (props) =>
            props.background === "primary"
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
        borderRadius: (props) => props.radius,
        "&:hover": {
            background: (props) =>
                props.background === "primary"
                    ? theme.palette.primary.light
                    : theme.palette.secondary.dark,
        },
    },
    label: {
        padding: "6px 16px",
    },
}));

export const cardStyles = makeStyles((theme) => ({
    card: {
        width: 900,

        padding: 20,
    },
    avatar: {
        width: "240px",
        height: 240,
    },
    name: {
        color: theme.palette.secondary.main,
    },
    statement: {},
}));

export const customStyles = makeStyles((theme) => ({
    whiteText: {
        color: theme.palette.common.white,
    },
    yellowText: {
        color: theme.palette.secondary.main,
    },
    greenText: {
        color: theme.palette.primary.main,
    },

    margin: {
        marginTop: "40px",
    },

    subText: {
        textTransform: "uppercase",
        textAlign: "center",
    },
    logoLbl: {
        "&:after": {
            color: theme.palette.primary.main,
            content: "'Kumustahan'",
        },
    },
    navItems: {
        "&:hover": {
            color: theme.palette.secondary.main,
        },
    },
    aboutTxt: {
        "&:after": {
            color: theme.palette.secondary.main,
            content: "' Project OK?'",
        },
    },
    // login form
    paper: {
        marginBottom: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        backgroundColor: "white",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    paperCounsel: {
        marginBottom: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

// Modal Styles
const modalStyles = (theme) => ({
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

export const DialogTitle = withStyles(modalStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

export const StyledMenuItem = withStyles((theme) => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.secondary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export const StyledMenu = withStyles({})((props) => (
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

export function CustomButton(props) {
    const { background, ...other } = props;
    const buttonClasses = buttonStyles(props);
    return (
        <Button
            className={`${buttonClasses.root} ${buttonClasses.label}`}
            {...other}
        />
    );
}
