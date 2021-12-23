import React, { Component } from "react";
import { DetailsList } from "@fluentui/react";
import styles from "./List.module.css";
import Map from "../Map/Map";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerPlants: [],
    };
  }

  //   mapItems() {
  //     return <Map powerPlants={this.state.powerPlants} />;
  //   }

  render() {
    //console.log(this.state.powerPlants.map((item) => item.name));
    return (
      <div className={styles.list}>
        <DetailsList
          items={this.props.powerPlants}
          columns={[
            {
              name: "name",
              fieldName: "name",
              isResizable: true,
            },
            {
              name: "output: MWH",
              fieldName: "outputMWH",
              isResizable: true,
            },
            {
              name: "renewable",
              fieldName: "renewable",
              isResizable: true,
            },
          ]}
          setKey="set"
        />
      </div>
    );
  }
}

export default List;
