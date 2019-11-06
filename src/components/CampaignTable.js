import React, { useState, useEffect } from "react";
import { Card, Table, Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/campaign-table.scss";
import {
  calender,
  file,
  priceImage,
  statistics,
  bitmap
} from "../images/Row/index";

export default function CampaignTable(props) {
  const [showModal, setModal] = useState(false);
  let prices = null;
  let date_diff_indays = function(date1, date2) {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };

  const handleChange = (date, e) => {
    console.log(date, e);
    // let newDate=date;
    // console.log(newDate);
    // fetch('http://localhost:3004/data',{
    //     method:'PUT',
    //     body:newDate.valueOf()
    // })
    // .then(data=>data.json())
    // .then(res=>{
    //     console.log(res)
    // })
  };
  return (
    <div className="table-container">
      <Table responsive>
        <thead style={{ backgroundColor: "rgb(241,241,244)" }}>
          <tr>
            <th>DATE</th>
            <th>CAMPAIGN</th>
            <th>VIEW</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((campaign, index) => {
            prices = campaign.price;
            return (
              <tr key={index}>
                <td>
                  <p>{new Date(campaign.date).toDateString()}</p>
                  <p className="secondary-text">
                    {date_diff_indays(
                      new Date().toLocaleDateString(),
                      new Date(campaign.date).toLocaleDateString()
                    )}{" "}
                    days Ahead
                  </p>
                </td>
                <td>
                  <div className="campaign-details">
                    <img id="bitmap" src={bitmap} alt="bitmap" />
                    &nbsp;
                    <div>
                      <p>{campaign.name}</p>
                      <p className="secondary-text">{campaign.region}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="pricing">
                  <img src={priceImage} alt="priceImage" />
                 
                  <Button variant="link" onClick={() => setModal(true)}>
                    View Pricing
                  </Button>
                  </div>
                  
                </td>
                <td>
                  <div className="action-items">
                    <span>
                      <img src={file} alt="file" />
                      &nbsp; CSV
                    </span>
                    <span>
                      <img src={statistics} alt="statistics" />
                      &nbsp; Report
                    </span>
                    <span className="calender">
                      <label>
                        <DatePicker
                          className="date-picker"
                          selected={new Date(campaign.date)}
                          onChange={handleChange}
                        />
                        <img src={calender} alt="calender" />
                        &nbsp; Schedule Again
                      </label>
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal
        dialogClassName="modal-90w"
        show={showModal}
        onHide={() => setModal(false)}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Body>
          <div className="price-modal">
            <Modal.Title>Pricing</Modal.Title>
            <br />
            <div className="pricing-details">
              <div className="left-titles">
                <p>1 Week - 1 Month</p>
                <p>6 Month</p>
                <p>1 Year</p>
              </div>
              <div>
                {prices ? (
                  <>
                    {" "}
                    <p>{prices._1Month}</p>
                    <p>{prices._6Months}</p>
                    <p>{prices._1Year}</p>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <button className="btn-close" onClick={() => setModal(false)}>
            Close
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
