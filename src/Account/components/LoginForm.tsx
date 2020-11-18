import React from "react";
import authService from "../services/auth.service";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Logo from "../../Images/iconfinder_spotify_306177.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {}

export default class LoginForm extends React.Component {
  state = {
    password: "",
    username: "",
  };

  handleUsername = (event: any) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePassword = (event: any) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    const user = {
      password: this.state.password,
      username: this.state.username,
    };
    authService.login(user.username, user.password);
  };

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
          <h1 style={{ textAlign: "center", color: "grey" }}>Login</h1> <br />
        </Card.Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group style={{ marginTop: "5%" }} controlId="formBasicUsername">
            <Form.Control
              style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={this.handleUsername}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handlePassword}
            />
          </Form.Group>
          <Button
            size="lg"
            style={{ width: "80%", marginLeft: "10%" }}
            variant="secondary"
            type="submit"
          >
            Login
          </Button>
          <Link to="/Register">
            <Button
              size="lg"
              style={{ margin: "10px", width: "80%", marginLeft: "10%" }}
              variant="secondary"
            >
              Register
            </Button>
          </Link>
        </Form>
      </Card>
    );
  }
}
