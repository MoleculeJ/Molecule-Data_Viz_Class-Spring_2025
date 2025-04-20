var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013'],
        datasets: [{
            label: 'Fiction',
            data: [50.00,54.55,45.45,36.36,50.00,55.56,42.86,55.56,60.00,50.00,50.00,60.00,50.00,50.00,50.00,50.00,50.00,50.00],
            backgroundColor: [
                '#663109'
            ]
        },
        {
            label: 'Non-Fiction',
            data: [50.00,45.45,54.55,63.64,50.00,44.44,57.14,44.44,40.00,50.00,50.00,40.00,50.00,50.00,50.00,50.00,50.00,50.00],
            backgroundColor: [
                '#DBB64A'
            ]
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'x',
        plugins: {
            title: {
                display: true,
                text: "The New York Times' best book genres become more balanced after 2005",
                font: {
                    size: 20
                }
            },
            subtitle: {
                display: true,
                text: ["The New York Times' annual selection of best books has become more balanced in terms of genre in recent years.", 
                    "From 1996 to 2004, the proportion of fiction and nonfiction varied significantly, ranging between 30% and 60%.",
                    "However, since 2005, both genres have tended to account for an equal 50% share."]
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                stacked: true
            },
            y: {
                stacked: true
            }
        },
    },
});