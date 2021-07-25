import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Redirect,
} from "react-router-dom";
import { theme } from "../material-ui/styles";
import { AuthProvider } from "./auth/AuthProvider";
import AuthReroute from "./auth/AuthReroute";
import Header from "./Header";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Index from "./welcome/Index";
import Footer from "./Footer";
import Admin from "../components/admin/Admin";

const AppRoute = () => {
    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <>
            <Header />
            <Switch location={background || location}>
                <Route exact path="/">
                    <Index />
                </Route>
                <AuthReroute path="/admin">
                    <Admin />
                </AuthReroute>
            </Switch>
            <Footer />

            {background && (
                <Route path="/admins/create" children={<Register />} />
            )}
            {background && <Route path="/auth/login" children={<Login />} />}
        </>
    );
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Router>
                    <AppRoute />
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default App;

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             isLoggedIn: false,
//             user: {},
//         };
//     }

//     UNSAFE_componentWillMount() {
//         let state = localStorage["appState"];
//         if (state) {
//             let AppState = JSON.parse(state);
//             this.setState = {
//                 isLoggedIn: AppState.isLoggedIn,
//             };
//         }
//     }

//     // componentDidMount() {
//     //     let state = localStorage["appState"];
//     //     if (state) {
//     //         let AppState = JSON.parse(state);

//     //         this.setState = ({
//     //             isLoggedIn: AppState.isLoggedIn
//     //         });
//     //     }
//     // }

//     render() {
//         return (
//             <ThemeProvider theme={theme}>
//                 <Router>
//                     <AppRoute isLoggedIn={this.state.isLoggedIn} />
//                 </Router>
//             </ThemeProvider>
//         );
//     }
// }
