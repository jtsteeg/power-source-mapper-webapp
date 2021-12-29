import React, { Component } from "react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

import "./App.css";
import Map from "./components/Map/Map";
import List from "./components/List/List";

initializeIcons();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerPlants: [],
    };
  }

  componentDidMount() {
    const url = process.env.REACT_APP_API_ENDPOINT;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          powerPlants: data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
              Illinois Power Source Mapper
            </span>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Map powerPlants={this.state.powerPlants} />
            </div>
            <div className="col-md-6">
              <List powerPlants={this.state.powerPlants} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
