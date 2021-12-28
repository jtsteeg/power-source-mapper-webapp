import React, { Component } from "react";
import { DetailsList } from "@fluentui/react";
//import styles from "./List.module.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerPlants: [],
    };
  }

  render() {
    return (
      <div>
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
