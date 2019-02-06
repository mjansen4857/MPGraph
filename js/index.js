var ctx = document.getElementById('mpChart').getContext('2d');
var mpChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0', '0.5', '1', '1.5', '2', '2.5', '3'],
        datasets: [{
            label: 'data',
            data: [0, 10, 12, 7, 15, 7, 12],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    labelString: 'Position',
                    display: true
                },
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    labelString: 'Time',
                    display: true
                },
                ticks: {
                    callback: function(value, index, values){
                        if(value % 1 == 0){
                            return value + 's';
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
        }
    }
});