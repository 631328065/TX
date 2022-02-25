import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
const Demo = Loadable({ loader: () => import("@/page/Demo/demo") });

class Routes extends React.Component {
    render() {
        <BrowserRouter>
            <div className="routes">
                <Switch>
                    <Route path="/demo" component={Demo}></Route>
                    <Redirect to="/demo"></Redirect>
                </Switch>
            </div>
        </BrowserRouter>
    }
}

export default Routes;