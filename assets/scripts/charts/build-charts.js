'use strict';


//original verison had an Object premade with shared variables, but
//ChartJS failed to properly render. Lots of repeated code here.

let buildBarChart = function(inputs){
  let labeling = inputs.credentials.labels.split(",");
  let numbers = inputs.credentials.data.split(",").map(Number);
  let completedBarChart = {
    type: 'bar',
    data: {
      labels: labeling,
      datasets:[{
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
      maintainAspectRatio: true,
      responsive: true,
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
      maintainAspectRatio: true,
      responsive: true,
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
      r: rData[i] * 10
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
      maintainAspectRatio: true,
      responsive: true,
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
  return completedBubbleChart;
};

let buildStackedBarChart = function(inputs){
  let labeling = inputs.credentials.buckets.split(",");
  let categories = inputs.credentials.categories.split(",");
  let numbers = inputs.credentials.data.split(",").map(Number);

  let completedStackedBarChart = {
    type: 'bar',
    data: {
      labels: labeling,
      datasets:[{
        label: 'Category 1',
        data: categories,
        backgroundColor: [
            'rgba(153, 123, 132, 0.2)',
            'rgba(56, 80, 235, 0.2)',
            'rgba(25, 15, 86, 0.2)',
            'rgba(46, 80, 192, 0.2)',
            'rgba(159, 190, 255, 0.2)',
            'rgba(176, 67, 64, 0.2)'
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
      },
    {
      label: 'Category 2',
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
    }]
    },
    options: {
      maintainAspectRatio: true,
      responsive: true,
        scales: {
            xAxes:[{
              stacked: true
            }],
            yAxes: [{
              stacked: true,
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
  return completedStackedBarChart;
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
      maintainAspectRatio: true,
      responsive: true,

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
  return completedLinePlot;
};

let buildStackedAreaChart = function(inputs) {
  let xData = inputs.credentials.x.split(",").map(Number);
  let yData = inputs.credentials.y.split(",").map(Number);
  let dataArray = [];
  for(let i=0; i<xData.length; i++){
    dataArray.push({
      x: xData[i],
      y: yData[i]
    });
  }
  let completedStackedAreaChart = {
    type: 'line',
    borderColor: '#28cbee',
    data: {
      datasets: [{
        label: 'Stacked Area Graph',
        data: dataArray
      }]
    },
    options: {
      maintainAspectRatio: true,
      responsive: true,
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
          stacked: true,
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
  return completedStackedAreaChart;
};

module.exports = {
  buildBarChart,
  buildStackedBarChart,
  buildScatterChart,
  buildLineChart,
  buildBubbleChart,
  buildStackedAreaChart
};
