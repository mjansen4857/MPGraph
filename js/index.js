let leftChart;
let rightChart;
var time = 0.0;

function initCharts(){
	var leftctx = document.getElementById('leftChart').getContext('2d');
	leftChart = new Chart(leftctx, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: 'Target',
				data: [],
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
				data: [],
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
	rightChart = new Chart(rightctx, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: 'Target',
				data: [],
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
				data: [],
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
}
initCharts();

var interval;

NetworkTables.addKeyListener('/SmartDashboard/PathRunning', (key, value, isNew) => {
	if(value){
		startGraphing();
	}else{
		if(interval){
			clearInterval(interval);
		}
	}
});

function startGraphing(){
	leftChart.destroy();
	rightChart.destroy();
	initCharts();
	time = 0.0;
	interval = setInterval(graphStuff, 100);
}

function graphStuff(){
	var targetLeft = NetworkTables.getValue('/SmartDashboard/TargetLeft', 0);
	var targetRight = NetworkTables.getValue('/SmartDashboard/TargetRight', 0);
	var actualLeft = NetworkTables.getValue('/SmartDashboard/ActualLeft', 0);
	var actualRight = NetworkTables.getValue('/SmartDashboard/ActualRight', 0);

	leftChart.data.labels.push(time);
	rightChart.data.labels.push(time);

	leftChart.data.datasets[0].data.push(targetLeft);
	leftChart.data.datasets[1].data.push(actualLeft);
	rightChart.data.datasets[0].data.push(targetRight);
	rightChart.data.datasets[1].data.push(actualRight);

	leftChart.update();
	rightChart.update();

	time += 0.1;
}