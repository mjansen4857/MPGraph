var leftctx = document.getElementById('leftChart').getContext('2d');
var leftChart = new Chart(leftctx, {
    type: 'line',
    data: {
        labels: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7'],
        datasets: [{
            label: 'Target',
            data: [0, 10, 12, 7, 15, 7, 12],
            borderColor: [
                '#1565c0'
            ],
            backgroundColor: [
                '#1565c0'
            ],
            borderWidth: 2,
            fill: false
        },{
            label: 'Actual',
            data: [0, 9, 10, 8, 13, 9, 11],
            borderColor: [
                '#d32f2f'
            ],
            backgroundColor: [
                '#d32f2f'
            ],
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                ticks: {
                    callback: function(value, index, values){
                        var label = Math.round(value * 10) / 10;
                        if(label % 1 == 0){
                            return label + 's';
                        }
                        return undefined;
                    }
                }
            }]
        },
        elements: {
            point: {
                radius: 0
            }
        },
        title: {
            display: true,
            text: 'Left Drive'
        }
    }
});
var rightctx = document.getElementById('rightChart').getContext('2d');
var rightChart = new Chart(rightctx, {
    type: 'line',
    data: {
        labels: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7'],
        datasets: [{
            label: 'Target',
            data: [0, 10, 12, 7, 15, 7, 12],
            borderColor: [
                '#1565c0'
            ],
            backgroundColor: [
                '#1565c0'
            ],
            borderWidth: 2,
            fill: false
        },{
            label: 'Actual',
            data: [0, 9, 10, 8, 13, 9, 11],
            borderColor: [
                '#d32f2f'
            ],
            backgroundColor: [
                '#d32f2f'
            ],
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                ticks: {
                    callback: function(value, index, values){
                        var label = Math.round(value * 10) / 10;
                        if(label % 1 == 0){
                            return label + 's';
                        }
                        return undefined;
                    }
                }
            }]
        },
        elements: {
            point: {
                radius: 0
            }
        },
        title: {
            display: true,
            text: 'Right Drive'
        }
    }
});
// num = 0.8;
// setInterval(() => {
//     mpChart.data.labels.push(num);
//     mpChart.data.datasets[0].data.push(Math.random() * 20);
//     mpChart.update();
//     num += 0.1;
// }, 100);