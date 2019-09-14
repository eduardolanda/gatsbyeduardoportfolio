import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div
        className="about"
        style={{
          background: "black",
          color: "white",
          fontWeight: "800",
          height: "100vh",
          textAlign: "center"
        }}
      >
        <h1 style={{ color: "white", margin: "auto 0" }}>
          This area still under construction. <br />
          Eduardo Landa
        </h1>
      </div>
    );
  }
}

export default About;
