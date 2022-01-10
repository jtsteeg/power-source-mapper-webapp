import BingMapsReact from "bingmaps-react";
import React, { useState, useEffect } from "react";
import styles from "./Map.module.css";

const Map = (props) => {
  const [pushPins, setPushPins] = useState([]);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (mapReady) {
      const tempushPins = [];
      props.powerPlants.map((item) => newPin(item));

      function newPin(item) {
        if (item.renewable === true) {
          const pushPin = {
            center: {
              latitude: item.coordinates.lat,
              longitude: item.coordinates.lon,
            },
            options: {
              title: item.name,
              subTitle: "MWH output: " + item.outputMWH.toString(),
              color: "green",
              enableClickedStyle: true,
            },
          };
          tempushPins.push(pushPin);
        } else {
          const pushPin = {
            center: {
              latitude: item.coordinates.lat,
              longitude: item.coordinates.lon,
            },
            options: {
              title: item.name,
              subTitle: "MWH output: " + item.outputMWH.toString(),
              color: "red",
              enableClickedStyle: true,
            },
          };
          tempushPins.push(pushPin);
        }
      }

      setPushPins(tempushPins);
    }
  }, [mapReady, props.powerPlants]);

  return (
    <div className={styles.map}>
      <BingMapsReact
        onMapReady={({ map }) => {
          setMapReady(true);
        }}
        bingMapsKey={process.env.REACT_APP_BING_KEY}
        pushPins={pushPins}
        mapOptions={{
          navigationBarMode: "square",
        }}
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
