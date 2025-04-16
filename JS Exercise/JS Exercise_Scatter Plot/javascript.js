var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: [
                {x:71.15, y:3678},
            ],
            label: "China",
            borderColor: "#3e95cd",
            backgroundColor: "rgb(62,149,205,0.1)",
            borderWidth:2,
        }
        ]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: "GDP per Capita"
                }
            }, 
            x: {
                title: {
                    display: true,
                    text: "Life Exextancy"
                }
            }
        }
    }
});