angular.module('myApp')
  .controller('graph2', ['$scope', function ($scope) {

    $(function () { 
      $('#graph2').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Share of Trafficked Victims Over Time',
            subtitle: 'UNDOC Report in Trafficking in Humans 2014'
        },
        xAxis: {
            categories: ['2004', '2006', '2009', '2011']
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }
        },
        plotOptions: {
            series: {
                animation: {
                    duration: 4000,
                    easing: 'linear'
                }
            }
        },
        series: [{
            name: 'Percent of Adults',
            data: [87, 78, 73, 67],
            color: '#94B8FF'
        }, {
            name: 'Percent of Children',
            data: [13, 22, 27, 33],
            color: '#B20000'
        }]
      });
    });
  }]);