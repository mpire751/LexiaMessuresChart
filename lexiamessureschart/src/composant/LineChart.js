import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Component } from "react";
Chart.register(...registerables);

class LineChart extends Component {
  render() {
    console.log(this.props);
    let label = this.props.label;
    let nameDatas = this.props.name;
    let datas = this.props.datasArray;

    console.log("datas = " + datas);

    const stateData = {
      labels: label,
      datasets: [
        {
          label: nameDatas,
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
          data: datas,
        },
      ],
      options: {
        scales: {
          xAxis: {
            // The axis for this scale is determined from the first letter of the id as `'x'`
            // It is recommended to specify `position` and / or `axis` explicitly.
            type: "time",
          },
        },
      },
    };

    return (
      <div>
        <Line
          data={stateData}
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

export default LineChart;
