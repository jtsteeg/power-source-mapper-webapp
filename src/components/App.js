import React, { useState, Component } from "react";
import "./App.css";
import styles from "./App.module.css";
import Map from "./Map/Map";
import List from "./List/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerPlants: [],
      pushPins: [],
    };
  }

  componentDidMount() {
    const url =
      "https://jtsteeg-power-plant-mapper-api.azurewebsites.net/powerplants";

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

  // rendermap(){
  //   this.state.powerPlants.map((item) => newPin(item));

  // }

  //   function newPin() {
  //     const pushPin = {
  //       center: {
  //         latitude: item.coordinates.lat,
  //         longitude: item.coordinates.lon,
  //       },
  //       options: {
  //         title: item.name,
  //         color: "red",
  //       },
  //     };

  //     pushPins.push(pushPin);
  //   }

  render() {
    return (
      <>
        <nav
          className="navbar navbar-dark bg-dark sticky-top"
          id={styles.navbar}
        >
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
              Illinois Power Plant Mapper
            </span>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              Map
              <Map powerPlants={this.state.powerPlants} />
            </div>
            <div className="col-md-6">
              list
              <List powerPlants={this.state.powerPlants} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
