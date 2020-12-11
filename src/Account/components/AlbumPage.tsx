import React from "react";
import Card from "react-bootstrap/Card";
import Logo from "../../Images/iconfinder_spotify_306177.png";

export default class AlbumPage extends React.Component {
  state = {
    password: "",
    username: "",
  };

  render() {
    return (
      <Card
        style={{
          width: "80rem",
          height: "40rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10%",
          backgroundColor: "white",
        }}
      >
        <Card.Header style={{ backgroundColor: "white" }}>
          <h1 style={{ textAlign: "center", color: "grey" }}>Album Page</h1>{" "}
          <br />
        </Card.Header>

        <Card.Body>
          <table
            style={{
              height: "25rem",
            }}
          >
            <tr>
              <th>Image</th>
              <td>
                Name <br />
              </td>
              <th>Description</th>
            </tr>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </table>
        </Card.Body>
      </Card>
    );
  }
}
