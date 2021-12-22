import React, { Component } from "react";
import { DetailsList } from "@fluentui/react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerPlants: [],
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
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <DetailsList
        items={this.state.powerPlants}
        columns={[
          {
            name: "id",
            fieldName: "id",
            minWidth: 120,
            maxWidth: 120,
            isResizable: true,
          },
          {
            name: "name",
            fieldName: "name",
            isResizable: true,
          },
        ]}
        setKey="set"
      />
    );
  }
}

export default List;
