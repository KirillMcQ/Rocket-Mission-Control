///////////////////////////////////////////TELEMETRY///////////////////////////////////////////////////////////////////////
/////////////////////////PITCH GRAPH////////////////////////////////

// get the canvas element
        var ctx = document.getElementById('pitchChart').getContext('2d');
      
        // create a new chart using the Chart.js library
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [], // x-axis labels (empty for now, we'll add to this later)
                datasets: [{
                    label: 'Pitch',
                    data: [], // y-axis values (empty for now, we'll add to this later)
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Target Pitch',
                    data: [0], // y-axis values (constant line at 0)
                    backgroundColor: 'rgba(0, 0, 0, 0)', // transparent background
                    borderColor: 'black', // black line
                    borderWidth: 1
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                }
            }
        });

        var time1 = 0;
      
        // update the chart every half second (500 milliseconds)
        setInterval(function() {
            // get the current time
            var currentTime = new Date();
      
            // add the current time to the x-axis labels
            chart.data.labels.push(time1);
      
            // add a random value to the y-axis data
            chart.data.datasets[0].data.push(Math.random() * 24 - 12);
            chart.data.datasets[1].data.push(0);

            time1+=0.5;
      
            // update the chart
            chart.update();
        }, 500);

///////////////////////////////////////////////////////////////
///////////////////////YAW GRAPH///////////////////////////////
var ctx1 = document.getElementById('yawChart').getContext('2d');
      
// create a new chart using the Chart.js library
var chart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: [], // x-axis labels (empty for now, we'll add to this later)
        datasets: [{
            label: 'Yaw',
            data: [], // y-axis values (empty for now, we'll add to this later)
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
            borderColor: 'rgba(0, 0, 255, 0.2)',
            borderWidth: 1
        },
        {
            label: 'Target Yaw',
            data: [0], // y-axis values (constant line at 0)
            backgroundColor: 'rgba(0, 0, 0, 0)', // transparent background
            borderColor: 'black', // black line
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});

var time = 0;
var randVal = Math.random() * 24 - 12;

// update the chart every half second (500 milliseconds)
setInterval(function() {
    // get the current time
    var currentTime = new Date();

    // add the current time to the x-axis labels
    chart1.data.labels.push(time);

    // add a random value to the y-axis data
    chart1.data.datasets[0].data.push(randVal);
    chart1.data.datasets[1].data.push(0);

    time+=0.5;
    randVal = Math.random() * 24 - 12;

    // update the chart
    chart1.update();
}, 500);

////////////////////////////////////////////////////////////////
///////////////////////ROLL GRAPH///////////////////////////////
var ctx2 = document.getElementById('rollChart').getContext('2d');
      
// create a new chart using the Chart.js library
var chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: [], // x-axis labels (empty for now, we'll add to this later)
        datasets: [{
            label: 'Roll',
            data: [], // y-axis values (empty for now, we'll add to this later)
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            borderColor: 'rgba(0, 0, 255, 0.2)',
            borderWidth: 1
        },
        {
            label: 'Target Roll',
            data: [0], // y-axis values (constant line at 0)
            backgroundColor: 'rgba(0, 0, 0, 0)', // transparent background
            borderColor: 'black', // black line
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});

var time = 0;

// update the chart every half second (500 milliseconds)
setInterval(function() {
    // get the current time
    var currentTime = new Date();

    // add the current time to the x-axis labels
    chart2.data.labels.push(time);

    // add a random value to the y-axis data
    chart2.data.datasets[0].data.push(Math.random() * 24 - 12);
    chart2.data.datasets[1].data.push(0);

    time+=0.5;

    // update the chart
    chart2.update();
}, 500);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MOVING ROCKET IMAGE //
const imageElement = document.getElementById('rocketImage');

// Set the image's initial rotation to 0 degrees
imageElement.style.transform = 'rotate(0deg)';

// Generate a random pitch value between 12 and -12 every 0.5 seconds
setInterval(function() {
    // Rotate the image by the pitch value
  imageElement.style.transform = `rotate(${randVal}deg)`;
}, 500);


//////////////////////////


///////////////////////////////////////////////WEATHER GRAPHS///////////////////////////////////////////////////////////////////