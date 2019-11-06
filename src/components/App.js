import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../css/App.scss";
import Campaigns from "./Campaigns";
import AppLayoutRoute from "./AppLayout";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect from="/" to="/campaigns/upcoming-campaigns" />
          </Route>
          <AppLayoutRoute path="/campaigns/:activePath" component={Campaigns} />
        </Switch>
      </div>
    );
  }
}
