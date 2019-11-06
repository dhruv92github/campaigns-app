import React from "react";
import { Link } from "react-router-dom";
import '../css/navbar-campaign.scss'

export default function NavBarCampaigns({url,params}) {
  // console.log(url);
  //console.log(params.activePath==='upcoming-campaigns')
  return (
    <nav className="navbar-campaign">
      <Link to='/campaigns/upcoming-campaigns'>
        <span className={(params.activePath==='upcoming-campaigns'?'active ':'')+'nav-link'}>Upcoming Campaigns</span>
      </Link>
      <Link to='/campaigns/live-campaigns'>
        <span className={(params.activePath==='live-campaigns'?'active ':'')+'nav-link'}>Live Campaigns</span>
      </Link>
      <Link  to='/campaigns/past-campaigns'>
        <span className={(params.activePath==='past-campaigns'?'active ':'')+'nav-link'}>Past Campaigns</span>
      </Link>
    </nav>
  );
}
