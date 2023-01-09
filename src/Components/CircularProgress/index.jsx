import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function CircularProgress({ value, text }) {
  return (
    <>
      <CircularProgressbar
        value={value}
        text={text}
        maxValue={10}
        styles={buildStyles({ textColor: "#FFF" })}
      />
    </>
  );
}
