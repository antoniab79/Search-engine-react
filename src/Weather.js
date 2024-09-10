import React from "react";

export default function Weather({ data }) {
  return (
    <ul>
      <li>Temperature: {Math.round(data.temperature)}°C</li>
      <li>Conditions: {data.conditions}</li>
      <li>Humidity: {data.humidity}%</li>
      <li>Wind Speed: {data.wind} m/s</li>
    </ul>
  );
}
