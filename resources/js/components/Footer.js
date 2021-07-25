import React from "react";
import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../material-ui/styles.js";
import FooterBg from "../../../public/images/footer-bg.png";
import ProjectLogo from "../../../public/images/projectok-logo-white.svg";

const useStyle = makeStyles((theme) => ({
    box: {
        backgroundSize: "cover",
        backgroundImage: `url(${FooterBg})`,
        backgroundRepeat: "no-repeat",
        padding: "60px 0",
    },
    title: {
        "&:after": {
            color: theme.palette.common.white,
            content: "'Kumustahan'",
        },
    },
    link: {
        color: theme.palette.common.white,
        cursor: "pointer",
    },
    copyright: {
        color: theme.palette.common.white,
    },
    padding: {
        padding: "18px 0",
    },
}));

const Footer = () => {
    const classes = useStyle();

    return (
        <>
            <Box id="footer" className={classes.box}>
                <Container>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            container
                            direction="row"
                            justify="space-between"
                            className={classes.padding}
                        >
                            <Grid
                                item
                                container
                                md={3}
                                lg={3}
                                direction="column"
                            >
                                <Grid item>
                                    <img src={ProjectLogo} />
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="h4"
                                        color="textSecondary"
                                        className={classes.title}
                                    >
                                        Online
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container md={7} lg={7} direction="row">
                                <Grid
                                    item
                                    container
                                    md={4}
                                    lg={4}
                                    direction="column"
                                >
                                    <Grid item>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            ABOUT
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            variant="subtitle1"
                                            className={classes.link}
                                        >
                                            About
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            variant="subtitle1"
                                            className={classes.link}
                                        >
                                            CHED
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            variant="subtitle1"
                                            className={classes.link}
                                        >
                                            CHED-CAR
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    md={4}
                                    lg={4}
                                    direction="column"
                                >
                                    <Grid item>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            SERVICES
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            variant="subtitle1"
                                            className={classes.link}
                                        >
                                            Forums
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            variant="subtitle1"
                                            className={classes.link}
                                        >
                                            Private Session
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            variant="subtitle1"
                                            className={classes.link}
                                        >
                                            Diary
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    md={4}
                                    lg={4}
                                    direction="column"
                                >
                                    <Grid item>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            SUPPORT
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            variant="subtitle1"
                                            className={classes.link}
                                        >
                                            Contact Us
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            variant="subtitle1"
                                            className={classes.link}
                                        >
                                            Help
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.padding}>
                            <Typography className={classes.copyright}>
                                Copyright © 2021 UC-CITCS IT GROUP 1
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
