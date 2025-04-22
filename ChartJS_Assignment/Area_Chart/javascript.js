var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],
        datasets: [{
            label: 'Female',
            data: [2,4,4,4,2,2,3,4,2,3,4,2,4,6,6,4,3,6,6,7,4,6],
            fill: true,
            borderColor: 'rgba(47, 61, 89)',
            backgroundColor: 'rgba(47, 61, 89,0.5)',
            tension: 0.15},
        {
            label: 'Male',
            data: [6,7,7,7,8,7,4,5,8,7,6,8,6,4,4,6,7,4,4,3,6,4],
            fill: true,
            borderColor: 'rgba(140, 76, 53)',
            backgroundColor: 'rgba(140, 76, 53,0.5)',
            tension: 0.15
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Male authors dominated pool of best books before 2009",
                font: {
                    size: 20
                }
            },
            subtitle: {
                display: true,
                text: ["From 1996 to 2008, the best books selected by The New York Times were written by men more than women.", 
                    "However, the trend has slightly shifted since 2009, which was also the first year that more books came from women."]
            }
        },
        interaction: {
            mode: 'index',
            intersect: false
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});