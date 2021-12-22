import React, { useState, Component } from "react";
import "./App.css";
import styles from "./App.module.css";
import Map from "./Map/Map";
import List from "./List/List";

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top" id={styles.navbar}>
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
            <Map />
          </div>
          <div className="col-md-6">
            list
            <List />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
