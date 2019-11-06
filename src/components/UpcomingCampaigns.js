import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import CampaignTable from "./CampaignTable";

export default class UpcomingCampaigns extends Component {
constructor(props) {
    super(props)

    this.state = {
         data:[]
    }
}

getData=()=>{
    fetch('http://localhost:3004/data')
    .then(data=>data.json())
    .then(data=>{
        this.setState({data})
    })
}

componentDidMount() {
    this.getData();
}


  render() {
      const {data}=this.state;
    return (
      <div>
       <CampaignTable data={data} />
      </div>
    );
  }
}
