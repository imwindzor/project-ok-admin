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
import IndexAdmin from "./IndexAdmin";

const Admin = () => {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <IndexAdmin />
            </Route>
        </Switch>
    );
};
export default Admin;
