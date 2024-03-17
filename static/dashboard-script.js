document.addEventListener('DOMContentLoaded', function () {
    const truckListItems = document.querySelectorAll('.truck-list li');
    const graphPlaceholder = document.getElementById('graph-placeholder');

    // Simulated temperature data for demonstration
    const temperatureData = {
        truck1: [20, 25, 22, 23, 21],
        truck2: [18, 20, 19, 17, 16],
        truck3: [10,15,20,25,30,35],
        truck4 : [25,35,45,36,30,29]
    };
    const dummyData = {
        currentLat: '40.7128° N',
        currentLng: '74.0060° W',
        startLocation: 'New York',
        endLocation: 'Los Angeles'
    };
    document.getElementById('current-lat').textContent = dummyData.currentLat;
    document.getElementById('current-lng').textContent = dummyData.currentLng;
    document.getElementById('start-location').textContent = dummyData.startLocation;
    document.getElementById('end-location').textContent = dummyData.endLocation;

    // Live location button functionality
    // const liveLocationBtn = document.getElementById('live-location-btn');
    // const mapDialog = document.getElementById('map-dialog');
    // const closeDialogBtn = document.getElementById('close-dialog');

    // liveLocationBtn.addEventListener('click', function () {
    //     mapDialog.style.display = 'block';
    //     // Dummy code to show the map (you need to implement your own map functionality)
    //     showMap();
    // });

    // closeDialogBtn.addEventListener('click', function () {
    //     mapDialog.style.display = 'none';
    // });

    truckListItems.forEach(truck => {
        truck.addEventListener('click', function () {
            const truckId = this.getAttribute('data-id');
            const temperatures = temperatureData[truckId];
            document.getElementsByClassName('details')[0].style.display = 'block'
            renderTemperatureGraph(temperatures);
        });
    });
    

    function renderTemperatureGraph(data) {
        // Destroy previous chart instance if it exists
        if (graphPlaceholder.chart) {
            graphPlaceholder.chart.destroy();
        }
    
        // Render new chart
        graphPlaceholder.chart = new Chart(graphPlaceholder, {
            type: 'line',
            data: {
                labels: ['Hour 1', 'Hour 2', 'Hour 3', 'Hour 4', 'Hour 5'],
                datasets: [{
                    label: 'Temperature',
                    data: data,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
});
