import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import * as Icon from "react-bootstrap-icons";
const TopBar = () => {
  return (
    <div className="parent">
      <div class="row">
        <div
          class="col-sm-8"
          style={{
            backgroundColor: "lavender",
            paddingLeft: "100px",
            paddingTop: "12px",
            fontFamily: "sans-serif",
            fontWeight:"bold",
            height: "50px",
          }}
        >
          Text Analyser
        </div>
        <div class="col-sm-4" style={{ backgroundColor: "lavender" }}>
          <div className="parent-div" style={{
            display: "flex",
            paddingLeft: "200px"
          }}>
            <div className="insta-icon" style={{paddingTop: "7px"}}>
              <Icon.Instagram size={15} />
            </div>
            <div className="twitter-icon" style={{paddingTop: "7px",paddingLeft:"20px"}}>
              <Icon.Twitter size={15} />
            </div>
            <div className="mail-icon" style={{paddingTop: "7px",paddingLeft:"20px"}}>
              <Icon.Mailbox size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
