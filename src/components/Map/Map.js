import BingMapsReact from "bingmaps-react";
import React from "react";
import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.map}>
      <BingMapsReact
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
