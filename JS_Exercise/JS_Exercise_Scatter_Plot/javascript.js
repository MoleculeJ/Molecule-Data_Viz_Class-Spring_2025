var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: [
                {x:71.5, y:3678},
            ],
            label: "China",
            borderColor: "#00B1CC",
            backgroundColor: "#00B1CC",
            borderWidth:2,
        } , {
            data: [
                {x:61.1, y:2548},
            ],
            label: "India",
            borderColor: "#CC5A00",
            backgroundColor: "#CC5A00",
            borderWidth:2,
        } , {
            data: [
                {x:77.1, y:45986},
            ],
            label: "United States",
            borderColor: "#8BCC00",
            backgroundColor: "#8BCC00",
            borderWidth:2,
        } , {
            data: [
                {x:68.3, y:5878},
            ],
            label: "Indonesia",
            borderColor: "#9700CC",
            backgroundColor: "#9700CC",
            borderWidth:2,
        } , {
            data: [
                {x:71.9, y:11461},
            ],
            label: "Brazil",
            borderColor: "#00137B",
            backgroundColor: "#00137B",
            borderWidth:2,
        } , {
            data: [
                {x:65.4, y:13173},
            ],
            label: "Russia",
            borderColor: "#4D0500",
            backgroundColor: "#4D0500",
            borderWidth:2,
        } , {
            data: [
                {x:62.6, y:3366},
            ],
            label: "Pakistan",
            borderColor: "#BC9200",
            backgroundColor: "#BC9200",
            borderWidth:2,
        } , {
            data: [
                {x:68.5, y:1632},
            ],
            label: "Bangladesh",
            borderColor: "#04892E",
            backgroundColor: "#04892E",
            borderWidth:2,
        } , {
            data: [
                {x:81.1, y:32193},
            ],
            label: "Japan",
            borderColor: "#DB0195",
            backgroundColor: "#DB0195",
            borderWidth:2,
        } 
        ]
    },
    options: {
        plugins : {
            title : {
                display: true,
                text: 'U.S. and Japan stand out as countries with highest GDP and life expectancy',
                font: {
                    size: 20
                }
            } ,
            subtitle : {
                display: true,
                text: ['The United States was marked as a country with the highest GDP per capita at 45,986, and second in life expectancy,', 
                'while Japan was recognized as a country with the longest life expectancy at 81.1 years, and second in GDP.'
                ] ,
                font: {
                    size: 14
                } ,
                padding: {
                    bottom: 10
                }
            } ,
            legend : {
                display: true
            }
        } ,
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
                    text: "Life Expectancy"
                }
            }
        }
    }
});