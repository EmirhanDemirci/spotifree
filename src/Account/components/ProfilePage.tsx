import React from "react";
import Card from "react-bootstrap/Card";
import Logo from "../../Images/iconfinder_spotify_306177.png";

interface Props {}

export default class LoginForm extends React.Component {
  render() {
    return (
      <Card
        style={{
          width: "30rem",
          height: "30rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "14%",
          backgroundColor: "white",
        }}
      >
        <Card.Img
          style={{
            marginLeft: "37%",
            marginTop: "4 %",
            width: "25%",
            height: "25%",
          }}
          variant="top"
          src={Logo}
        ></Card.Img>
        <Card.Header style={{ backgroundColor: "white" }}>
          <h1 style={{ textAlign: "center", color: "grey" }}>Profile Page</h1>{" "}
          <br />
        </Card.Header>
      </Card>
    );
  }
}
