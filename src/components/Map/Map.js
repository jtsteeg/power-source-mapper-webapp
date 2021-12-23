import BingMapsReact from "bingmaps-react";
import React from "react";
import styles from "./Map.module.css";

const Map = (props) => {
  //   console.log({ powerPlants }.map((item) => item.name));

  const pushPins = [];
  //props.powerPlants.map((item) => newPin(item));

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

  //   //   const pushPin = {
  //   //     center: {
  //   //       latitude: 40.3631,
  //   //       longitude: -89.3985,
  //   //     },
  //   //     options: {
  //   //       title: "center of illinois",
  //   //       color: "red",
  //   //     },
  //   //   };

  //   //   const pushPins = [pushPin];

  // <p>{props.powerPlants.map((item) => item.name)}</p>;

  return (
    <div className={styles.map}>
      {props.powerPlants.map((item) => newPin(item))}
      <BingMapsReact
        pushPins={pushPins}
        bingMapsKey="AonKxb9laRpOPwoWQJdTC3K1-cRAZCMCdtMYw_yP6mgYOV3-KjDBmB3p7ugp1rn1"
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
