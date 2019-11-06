import React, { Component } from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import UpcomingCampaigns from "./UpcomingCampaigns";
import LiveCampaigns from "./LiveCampaigns";
import PastCampaigns from "./PastCampaigns";
import NavBarCampaigns from "./NavBarCampaigns";

export default class Campaigns extends Component {
  render() {
      const {match}=this.props;
    // console.log(this.props)
    return (
      <div className="container">
          <h1 className="page-title">Manage Campaigns</h1>
          <NavBarCampaigns {...match}/>
          <hr/>
        <Switch>
          <Redirect  exact
              from="/campaigns"
              to="/campaigns/upcoming-campaigns"/>
          <Route exact path='/campaigns/upcoming-campaigns' component={UpcomingCampaigns} />
          <Route  path='/campaigns/live-campaigns' component={LiveCampaigns} />
          <Route path='/campaigns/past-campaigns' component={PastCampaigns} />
        </Switch>
      </div>
    );
  }
}
