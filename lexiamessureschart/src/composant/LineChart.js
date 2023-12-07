import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const state = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Class Strength",
      backgroundColor: [
        "Indigo",
        "Purple",
        "Yellow",
        "Teal",
        "Red",
        "Navy",
        "Brown",
      ],
      fill: false,
      lineTension: 0.5,
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [10, 14, 17, 16, 19, 16, 17],
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Class Strength",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
