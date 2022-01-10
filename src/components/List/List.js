import React, { Component } from "react";
import { DetailsList } from "@fluentui/react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerPlants: [],
    };
  }

  render() {
    const transformPlant = (plant) => ({
      ...plant,
      fuelsUsed: Object.keys(plant.fuelTypes).join(", "),
      primaryFuel: Object.keys(plant.fuelTypes).reduce((previous, current) =>
        plant.fuelTypes[previous] > plant.fuelTypes[current]
          ? previous
          : current
      ),
    });

    const items = this.props.powerPlants.map(transformPlant);

    const columns = [
      {
        name: "Name",
        fieldName: "name",
        isResizable: true,
      },
      {
        name: "Output: MWH",
        fieldName: "outputMWH",
        isResizable: true,
      },
      {
        name: "Renewable",
        fieldName: "renewable",
        isResizable: true,
      },
      {
        name: "Fuels used",
        fieldName: "fuelsUsed",
        isResizable: true,
      },
      {
        name: "Primary fuel",
        fieldName: "primaryFuel",
        isResizable: true,
      },
    ];

    return (
      <div>
        <DetailsList items={items} columns={columns} setKey="set" />
      </div>
    );
  }
}

export default List;
