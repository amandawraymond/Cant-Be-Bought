angular.module('myApp')
    .controller('graph1', ['$scope', function ($scope) {
    $(function () {

        // Create the chart
        $('#graph1').highcharts({
            chart: {
                type: 'pie',
                backgroundColor: 'white',
                style: {
                    font: 'bold 14px "Raleway", sans-serif',
                }
            },
            title: {
                text: '<strong>Trafficking Breakdown by Type and Gender</strong>',
                style: {
                        color: 'black',
                        font: '20px "Raleway", sans-serif'
                    }
            },

            subtitle: {
                text: 'Click on the graph for a breakdown of type by gender',
                style: {
                    color: 'black',
                    font: '16px "Raleway", sans-serif'
                }
            },

            xAxis: {
                type: 'category',
            },

            legend: {
                enabled: false
            },

            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        color: '#ffffff',
                        enabled: true
                    }
                }
            },

            series: [{
                name: 'Trafficking Type',
                colorByPoint: true,
                data: [{
                    name: 'Forced Labor',
                    y: 40,
                    drilldown: 'forced labor'
                }, {
                    name: 'Sexual Exploitation',
                    y: 53,
                    drilldown: 'sexual exploitation'
                }, {
                    name: 'Organ Removal',
                    y: 0.3,
                    drilldown: 'organ removal'
                }, {
                    name: 'Other Various Types',
                    y: 6.7,
                    drilldown: 'other various types'
                }]
            }],
            drilldown: {
                series: [{
                    id: 'forced labor',
                    data: [
                        ['Males', 83],
                        ['Females', 14]
                    ]
                }, {
                    id: 'sexual exploitation',
                    data: [
                        ['Males', 3],
                        ['Females', 97]
                    ]
                }, {
                    id: 'organ removal',
                    data: [
                        ['Males', 77],
                        ['Females', 23]
                    ]
                }, {
                    id: 'other various types',
                    data: [
                        ['Males', 73],
                        ['Females', 27]
                    ]
                }]
            }
        });
    });

    }]);