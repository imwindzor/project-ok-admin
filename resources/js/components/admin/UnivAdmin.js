import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";
import UnivIndexAdmin from "./UnivIndexAdmin";

const UnivAdmin = () => {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <UnivIndexAdmin />
            </Route>
        </Switch>
    );
};
export default UnivAdmin;
