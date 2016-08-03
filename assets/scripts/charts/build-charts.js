'use strict';




let buildBarChart = function(inputs){
  let labeling = inputs.credentials.labels.split(",");
  let numbers = inputs.credentials.data.split(",").map(Number);
  let completedBarChart = {
    type: 'bar',
    data: {
      datasets:[{
        labels: labeling,
        label: 'Bar Graph',
        data: numbers,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,255,255,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
    },
    options: {
        stacked: false, //flip this for stacked bar
        scales: {
            yAxes: [{
              gridLines: {
                color: '#d3d3d3',
                zeroLineColor: '#d3d3d3'
              },
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

  };
  console.log(completedBarChart.data.datasets.data);
  return completedBarChart;
};

let buildScatterChart = function(inputs) {
  let xData = inputs.credentials.x.split(",").map(Number);
  let yData = inputs.credentials.y.split(",").map(Number);
  let dataArray = [];
  for(let i=0; i<xData.length; i++){
    dataArray.push({
      x: xData[i],
      y: yData[i]
    });
  }
  let completedScatterPlot = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Scatter Graph',
        data: dataArray
      }]
    },
    options: {
      showLines: false, //change this to true for line
      scales: {
        xAxes: [{
          gridLines: {
            color: '#d3d3d3',
            zeroLineColor: '#d3d3d3'
          },
          type: 'linear',
          position: 'bottom',
          ticks: {
            beginAtZero: true
          }
        }],
        yAxes: [{
          gridLines: {
            color:'#d3d3d3',
            zeroLineColor:'#d3d3d3'
          },
          ticks: {
            beginAtZero: true
          }
        }]

      }
    }
  };
  console.log(completedScatterPlot);
  return completedScatterPlot;
};


let buildBubbleChart = function(inputs) {
  let xData = inputs.credentials.x.split(",").map(Number);
  let yData = inputs.credentials.y.split(",").map(Number);
  let rData = inputs.credentials.r.split(",").map(Number);
  let dataArray = [];
  for(let i=0; i<xData.length; i++){
    dataArray.push({
      x: xData[i],
      y: yData[i],
      r: rData[i]
    });
  }
  let completedBubbleChart = {
    type: 'bubble',
    data: {
      datasets: [{
        label: 'Bubble Graph',
        data: dataArray,
        backgroundColor:"#FF6384",
        hoverBackgroundColor: "#FF6384",

      }]
    },
    options: {
      showLines: false, //change this to true for line
      scales: {
        xAxes: [{
          gridLines: {
            color: '#d3d3d3',
            zeroLineColor: '#d3d3d3'
          },
          type: 'linear',
          position: 'bottom',
          ticks: {
            beginAtZero: true
          }
        }],
        yAxes: [{
          gridLines: {
            color:'#d3d3d3',
            zeroLineColor:'#d3d3d3'
          },
          ticks: {
            beginAtZero: true
          }
        }]

      }
    }
  };
  console.log(completedBubbleChart);
  return completedBubbleChart;
};



let buildLineChart = function(inputs) {
  let xData = inputs.credentials.x.split(",").map(Number);
  let yData = inputs.credentials.y.split(",").map(Number);
  let dataArray = [];
  for(let i=0; i<xData.length; i++){
    dataArray.push({
      x: xData[i],
      y: yData[i]
    });
  }
  let completedLinePlot = {
    type: 'line',
    borderColor: '#28cbee',
    data: {
      datasets: [{
        label: 'Line Graph',
        data: dataArray
      }]
    },
    options: {
      showLine: true,
      scales: {
        xAxes: [{
          gridLines: {
            color: '#d3d3d3',
            zeroLineColor: '#d3d3d3'
          },
          type: 'linear',
          position: 'bottom',
          ticks: {
            beginAtZero: true
          }
        }],
        yAxes: [{
          gridLines: {
            color:'#d3d3d3',
            zeroLineColor:'#d3d3d3'
          },
          ticks: {
            beginAtZero: true
          }
        }]

      }
    }
  };
  console.log(completedLinePlot);
  return completedLinePlot;
};

module.exports = {
  buildBarChart,
  buildScatterChart,
  buildLineChart,
  buildBubbleChart
};
