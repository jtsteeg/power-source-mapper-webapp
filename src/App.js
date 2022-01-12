import React, { Component } from "react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import About from "./components/About/About";

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
    const MapPage = () => (
      <div className="row">
        <div className="col-md-6">
          <Map powerPlants={this.state.powerPlants} />
        </div>
        <div className="col-md-6">
          <List powerPlants={this.state.powerPlants} />
        </div>
      </div>
    );

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Illinois Power Source Mapper
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/About" target="_blank">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/jtsteeg/Power_Source_Mapper"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <Router>
            <Routes>
              <Route exact path="/" element={<MapPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
