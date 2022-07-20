import React from "react";
import Carousel from "./Carousel";
import TimeUntil from "./TimeUntil";
export default function () {
  return (
    <div style={{ position: "relative" }}>
      <Carousel/>
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <TimeUntil/>
    </div>
  );
}
