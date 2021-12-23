import BingMapsReact from "bingmaps-react";
import React from "react";
import styles from "./Map.module.css";

const Map = (props) => {
  const pushPins = [];

  function newPin(item) {
    if (item.renewable === true) {
      const pushPin = {
        center: {
          latitude: item.coordinates.lat,
          longitude: item.coordinates.lon,
        },
        options: {
          title: item.name,
          color: "green",
          enableClickedStyle: true,
        },
      };
      pushPins.push(pushPin);
    } else {
      const pushPin = {
        center: {
          latitude: item.coordinates.lat,
          longitude: item.coordinates.lon,
        },
        options: {
          title: item.name,
          color: "red",
          enableClickedStyle: true,
        },
      };
      pushPins.push(pushPin);
    }
  }

  return (
    <div className={styles.map}>
      {props.powerPlants.map((item) => newPin(item))}
      <BingMapsReact
        pushPins={pushPins}
        bingMapsKey={process.env.REACT_APP_BING_KEY}
        //height="100%"
        mapOptions={{
          navigationBarMode: "square",
        }}
        //width="100%"
        viewOptions={{
          center: { latitude: 40.36331, longitude: -89.3985 },
          zoom: 7,
          mapTypeId: "canvasLight",
        }}
      />
    </div>
  );
};

export default Map;
