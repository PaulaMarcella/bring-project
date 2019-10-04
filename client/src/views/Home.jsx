import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export class Home extends Component {
  constructor() {
    super();

    this.state = {
      buttonClicked: "volunteer"
    };
    this.buttonClickChangeStateVolunteer = this.buttonClickChangeStateVolunteer.bind(
      this
    );
    this.buttonClickChangeStateInstitution = this.buttonClickChangeStateInstitution.bind(
      this
    );
  }

  buttonClickChangeStateVolunteer() {
    this.setState({
      ...this.state,
      buttonClicked: "volunteer"
    });
    console.log(this.state);
  }

  buttonClickChangeStateInstitution() {
    this.setState({
      ...this.state,
      buttonClicked: "institution"
    });
    console.log(this.state);
  }

  changeButton() {
    if (this.state.buttonClicked === "volunteer") {
      return <div>volunteer</div>;
    } else if (this.state.buttonClicked === "institution") {
      return <div>intitution</div>;
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Button
          onClick={this.buttonClickChangeStateVolunteer}
          variant="primary"
        >
          Volunteers and Donors
        </Button>

        <Button
          onClick={this.buttonClickChangeStateInstitution}
          variant="primary"
        >
          Institutions
        </Button>

        {/* if this.state is === to institution only show intitute signup ect ect */}

        {this.changeButton()}
      </div>
    );
  }
}

export default Home;
