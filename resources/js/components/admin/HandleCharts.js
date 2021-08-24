// import React from "react";
// import { Container, Grid } from "@material-ui/core";
// import { customStyles, CustomButton } from "../../material-ui/styles";
// import ChartsImg from "../../../../public/images/Analytics-bro.svg";

// class HandleCharts extends React.Component {
//     state = {
//         chartContainer: false,
//     };
//     render() {
//         const classes = customStyles();
//         const handleChange = (e) => {
//             this.setState({ chartContainer: !this.state.chartContainer });
//         };

//         const x = this.state.chartCointainter;

//         return (
//             <>
//                 <Container style={{ marginTop: "3%" }}>
//                     <Grid
//                         container
//                         direction="row"
//                         justifyContent="center"
//                         alignItems="center"
//                     >
//                         <Grid item xs={6}>
//                             <img
//                                 src={ChartsImg}
//                                 style={{ width: "500px" }}
//                                 alt="chart-image"
//                             />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <Typography variant="h5" style={{ color: "black" }}>
//                                 Charts are one way to summarize a large data set
//                                 in visual form. Charts also clarifies trends
//                                 better than tables do.
//                             </Typography>
//                             <br />
//                             <CustomButton
//                                 background="primary"
//                                 onClick={handleChange}
//                             >
//                                 {x ? "Show Charts" : "Hide Charts"}
//                             </CustomButton>
//                             {x && <div>Hello</div>}
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </>
//         );
//     }
// }

// export default HandleCharts;
