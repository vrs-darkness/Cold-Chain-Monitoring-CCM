async  function get()
{
    const reponse = await fetch('/data');
    const data = await reponse.json();
    return data
}
document.addEventListener('DOMContentLoaded', function () {
    const graphPlaceholder = document.getElementById('graph-placeholder');
    var Data = [] ; 
    var label = [] ; 
    document.getElementById('live-data-button').addEventListener('click',async function() {
        Data = await get();
        Data = Data['data'];
        if(Data=='NULL')
        {
            alert("Sensors are offline");
        }
        else
        {
            for(let i = 0 ; i<Data.length;i++)
            {
                label.push("data " + i  );
                renderGraph(Data);
            }
        }
    });
    function renderGraph(data) {
        // Destroy previous chart instance if it exists
        if (graphPlaceholder.chart) {
            graphPlaceholder.chart.destroy();
        }
    
        // Render new chart
        graphPlaceholder.chart = new Chart(graphPlaceholder, {
            type: 'line',
            data: {
                labels: label, //
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