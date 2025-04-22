var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: [
                'Paid Work',
                'Education',
                'Care for Household Member',
                'Housework',
                'Shopping',
                'Other Paid Work and Volunteering',
                'Eat and Drink',
                'Personal Care',
                'Sport',
                'TV and Radio'
            ],
            datasets: [{
                label: "Chinese people's time use",
                data: [315,25,23,103,20,33,100,52,23,127],
                backgroundColor: [
                    'rgba(139, 204, 0, 0.6)',   
                    'rgba(204, 90, 0, 0.6)',    
                    'rgba(0, 177, 204, 0.6)',  
                    'rgba(151, 0, 204, 0.6)',   
                    'rgba(0, 19, 123, 0.6)',    
                    'rgba(77, 5, 0, 0.6)',      
                    'rgba(189, 144, 0, 0.6)',   
                    'rgba(196, 204, 219, 0.6)', 
                    'rgba(4, 137, 46, 0.6)',    
                    'rgba(219, 1, 149, 0.6)'    
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Chinese people use most of their time for paid work',
                    font: {
                        size: 22
                    }
                },
                subtitle: {
                    display: true,
                    text: ['Paid work is the activity that Chinese people spend the most time on at 315 hours',
                        'while shopping is the one that people spend the least time on at 20 hours.'
                    ],
                    font: {
                        size: 16 
                    },
                    padding: {
                        top: 5,
                        bottom: 10
                    }
                }
            }
        }
    });