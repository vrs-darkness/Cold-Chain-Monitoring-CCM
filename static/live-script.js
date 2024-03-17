document.addEventListener('DOMContentLoaded', function () {
    const truckListItems = document.querySelectorAll('.truck-list li');
    const alertDialog = document.getElementById('alert-dialog');
    const closeBtn = alertDialog.querySelector('.close-btn');
    const sendBtn = document.getElementById('send-alert-btn');
    const messageTextarea = document.getElementById('alert-message');
    const temperatureDialog = document.getElementById('temperature-dialog');
    const closeBtn2 = temperatureDialog.querySelector('.close-btn');
    const temperatureSlider = document.getElementById('temperature-slider');
    const currentTemperatureSpan = document.getElementById('current-temperature');
    const acDialog = document.getElementById('ac-dialog');
    const closeBtn3 = acDialog.querySelector('.close-btn');
    const turnOnACBtn = document.getElementById('turn-on-ac-btn');
    const turnOffACBtn = document.getElementById('turn-off-ac-btn');



    const updateCurrentTemperature = () => {
        currentTemperatureSpan.textContent = temperatureSlider.value;
    };
    document.getElementById('adjust-temperature-btn').addEventListener('click', function () {
        temperatureDialog.style.display = 'block';
        updateCurrentTemperature(); // Update current temperature value when dialog is opened
    });
    temperatureSlider.addEventListener('input', function () {
        updateCurrentTemperature(); // Update current temperature value when slider value changes
    });
    closeBtn2.addEventListener('click', function () {
        temperatureDialog.style.display = 'none';
    });

    document.getElementById('air-conditioner-btn').addEventListener('click', function () {
        acDialog.style.display = 'block';
    });

    // Event listener for the "Turn On" button
    turnOnACBtn.addEventListener('click', function () {
        // Your logic to turn on the air conditioner
        // For demonstration purposes, we'll simply log a message
        alert('Air Conditioner turned on');
        acDialog.style.display = 'none'; // Close the dialog box
    });

    // Event listener for the "Turn Off" button
    turnOffACBtn.addEventListener('click', function () {
        // Your logic to turn off the air conditioner
        // For demonstration purposes, we'll simply log a message
        alert('Air Conditioner turned off');
        acDialog.style.display = 'none'; // Close the dialog box
    });

    // Event listener for the close button
    closeBtn3.addEventListener('click', function () {
        acDialog.style.display = 'none';
    });

    const showMessageSent = () => {
        const messageSent = document.createElement('div');
        messageSent.textContent = 'Alert message sent!';
        alert(messageSent.textContent)
        // messageSent.classList.add('message-sent');
        // document.body.appendChild(messageSent);
        // setTimeout(() => {
        //     messageSent.remove();
        // }, 3000);
    };
    document.getElementById('alert-message-btn').addEventListener('click', function () {
        alertDialog.style.display = 'block';
    });
    closeBtn.addEventListener('click', function () {
        alertDialog.style.display = 'none';
    });

    sendBtn.addEventListener('click', function () {
        if (messageTextarea.value.trim() !== '') {
            showMessageSent();
            messageTextarea.value = '';
            alertDialog.style.display = 'none';
        }
    });

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

    truckListItems.forEach(truck => {
        truck.addEventListener('click', function () {
            const truckId = this.getAttribute('data-id');
            document.getElementById('truck').textContent = truckId;
            document.getElementById('temperature').textContent = String(temperatureData[truckId][4]) + "°C";
            document.getElementsByClassName('details')[0].style.display = 'block';
        });
    });
        
});
