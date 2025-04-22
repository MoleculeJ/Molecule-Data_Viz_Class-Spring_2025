var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        datasets: [{
            data: [
                {x:264,y:3.7,r: 20,numberOfVotes:10259},
            ],
            label: "Autumn by Ali Smith",
            borderColor: 'rgba(212, 0, 0,0.5)',
            backgroundColor: 'rgba(212, 0, 0,0.25)',
            borderWidth:2, 
        }, {
            data: [
                {x:240,y:3.8,r: 33,numberOfVotes:27086},
            ],
            label: "Exit West by Mohsin Hamid",
            borderColor: 'rgba(244, 183, 0,0.5)',
            backgroundColor: 'rgba(244, 183, 0,0.25)',
            borderWidth:2, 
        }, {
            data: [
                {x:496,y:4.2,r: 21,numberOfVotes:10929},
            ],
            label: "Pachinko by Min Jin Lee",
            borderColor: 'rgba(25, 87, 2,0.5)',
            backgroundColor: 'rgba(5, 87, 2,0.25)',
            borderWidth:2, 
        }, {
            data: [
                {x:288,y:3.9,r: 26,numberOfVotes:16655},
            ],
            label: "The Power by Naomi Alderman",
            borderColor: 'rgba(0, 166, 2,0.5)',
            backgroundColor: 'rgba(0, 166, 2,0.25)',
            borderWidth:2, 
        }, {
            data: [
                {x:285,y:4.1,r: 17,numberOfVotes:7033},
            ],
            label: "Sing, Unburied, Sing by Jesmyn Ward",
            borderColor: 'rgba(0, 85, 212,0.5)',
            backgroundColor: 'rgba(0, 85, 212,0.25)',
            borderWidth:2, 
        }, {
            data: [
                {x:400,y:4.1,r: 2.5,numberOfVotes:147},
            ],
            label: "The Evolution of Beauty: How Darwin's Forgotten Theory of Mate Choice Shapes the Animal World - And Us by Richard O. Prum",
            borderColor: 'rgba(255, 128, 48,0.5)',
            backgroundColor: 'rgba(2255, 128, 48,0.25)',
            borderWidth:2, 
        }, {
            data: [
                {x:1104,y:4.6,r: 4.8,numberOfVotes:569},
            ],
            label: "Grant by Ron Chernow",
            borderColor: 'rgba(62, 74, 113,0.5)',
            backgroundColor: 'rgba(62, 74, 113,0.25)',
            borderWidth:2, 
        }, {
            data: [
                {x:320,y:4.3,r: 3.2,numberOfVotes:254},
            ],
            label: "Locking Up Our Own: Crime and Punishment in Black America by James Forman Jr.",
            borderColor: 'rgba(63, 87, 165,0.5)',
            backgroundColor: 'rgba(63, 87, 165,0.25)',
            borderWidth:2, 
        }, {
            data: [
                {x:640,y:4.3,r: 1.9,numberOfVotes:89},
            ],
            label: "Prairie Fires: The American Dreams of Laura Ingalls Wilder by Caroline Fraser",
            borderColor: 'rgba(68, 53, 141,0.5)',
            backgroundColor: 'rgba(68, 53, 141,0.25)',
            borderWidth:2, 
        }, {
            data: [
                {x:336,y:3.9,r: 9.8,numberOfVotes:2415},
            ],
            label: "Priestdaddy: A Memoir by Patricia Lockwood",
            borderColor: 'rgba(37, 26, 31,0.5)',
            backgroundColor: 'rgba(37, 26, 31,0.25)',
            borderWidth:2, 
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "'Grant' stands out among The New York Times' 2017 Best Books",
                font: {
                    size: 20
                }
            },
            subtitle : {
                display: true,
                text: ["Grant, written by Ron Chernow, is the most distinguished book among The New York Times' best books selected in 2017", 
                'with the highest rating, 4.6, and the longest pages, 1,104. (Bubble size represents number of votes)'
                ] ,
                font: {
                    size: 14
                } ,
                padding: {
                    bottom: 10
                }
            } ,
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const book = context.dataset.label || '';
                        const x = context.raw.x;
                        const y = context.raw.y;
                        const numberOfVotes = context.raw.numberOfVotes || 'N/A';
                        return [`${book}`,
                            `Book's pages: ${x}`,
                            `Rating: ${y}`,
                            `Number of votes: ${numberOfVotes}`];
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Book's pages"
                },
                beginAtZero: true
            },
            y: {
                title: {
                    display: true,
                    text: "Rating"
                },
                beginAtZero: false
            }, 
        }
    }, 
});

setTimeout(function () {
    const activeElements = [{
        datasetIndex: 6, 
        index: 0        
    }];
    myChart.setActiveElements(activeElements);
    myChart.tooltip.setActiveElements(activeElements, { x: 0, y: 0 });
    myChart.update();} , 500);