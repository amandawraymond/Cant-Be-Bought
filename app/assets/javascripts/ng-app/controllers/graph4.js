var graph4Data = [{
               name: 'A very young child slave in Ancient Egypt',
               color: 'rgba(119, 152, 191, .5)',
               data: [[-500, 4480]]    
           }, {
               name: 'An 8 year old girl slave in Ancient Egypt',
               color: 'rgba(119, 152, 191, .5)',
               data: [[-500, 20480]]
           }, {
               name: 'Adult male slave in Ancient Egypt',
               color: 'rgba(119, 152, 191, .5)',
               data: [[-500, 32000]]    
           }, {
               name: 'Gladiator in Ancient Rome',
               color: 'rgba(119, 152, 191, .5)',
               data: [[0, 2080]]    
           }, {
               name: 'Boy slave in Ancient Rome',
               color: 'rgba(119, 152, 191, .5)',
               data: [[0, 6000]]    
           }, {
               name: 'Girl slave in Ancient Rome',
               color: 'rgba(119, 152, 191, .5)',
               data: [[0, 12000]]    
           }, {
               name: 'Adult male slave in Ancient Egypt',
               color: 'rgba(119, 152, 191, .5)',
               data: [[0, 24000]]    
           }, {
               name: 'Adult male Irish slave in Caribbean',
               color: 'rgba(119, 152, 191, .5)',
               data: [[1650, 1300]]    
           }, {
               name: 'African girl slave in Caribbean',
               color: 'rgba(119, 152, 191, .5)',
               data: [[1650, 9000]]    
           }, {
               name: 'African boy slave in Caribbean',
               color: 'rgba(119, 152, 191, .5)',
               data: [[1650, 9500]]    
           }, {
               name: 'African adult male slave in Caribbean',
               color: 'rgba(119, 152, 191, .5)',
               data: [[1650, 10000]]    
           }, {
               name: 'African adult female slave in Caribbean',
               color: 'rgba(119, 152, 191, .5)',
               data: [[1650, 10300]]    
           }, {
               name: '60 year old black male slave in USA',
               color: 'rgba(119, 152, 191, .5)',
               data: [[1850, 4000]]    
           }, {
               name: '10 year old black male slave in USA',
               color: 'rgba(119, 152, 191, .5)',
               data: [[1850, 8100]]    
           }, {
               name: 'Two adult black male slaves in USA together',
               color: 'rgba(119, 152, 191, .5)',
               data: [[1850, 11000]]    
           }, {
               name: '35 year old black male slave in USA',
               color: 'rgba(119, 152, 191, .5)',
               data: [[1850, 19000]]    
           }, {
               name: '25 year old black male slave in USA',
               color: 'rgba(119, 152, 191, .5)',
               data: [[1850, 22000]]    
           }, {
               name: 'Prime age black male slave in New Orleans, USA',
               color: 'rgba(119, 152, 191, .5)',
               data: [[1855, 30000]]    
           }, {
               name: 'Baby from Nigeria',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2011, 6400]]    
           }, {
               name: 'Male baby in China',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2012, 7800]]    
           }, {
               name: 'Female baby in China',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2011, 4732]]    
           }, {
               name: 'Baby in Russia',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2012, 17500]]    
           }, {
               name: 'Child in India for labor or sex work',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2007, 45]]    
           }, {
               name: 'Low value child in Iraq',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2009, 300]]    
           }, {
               name: 'High value child in Iraq',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2009, 5500]]    
           }, {
               name: 'Boy as child soldier in Mali',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2012, 600]]    
           }, {
               name: 'Child in the UK for brothels and domestic work',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2011, 25000]]    
           }, {
               name: 'Girl in Romania for forced prostitution',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2013, 6000]]    
           }, {
               name: 'Haitian adult in Chile',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2010, 1000]]    
           }, {
               name: 'Burmese girl in China as bride',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2010, 7300]]    
           }, {
               name: '20 year old woman in North Korea',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2011, 761]]    
           }, {
               name: '30 year old woman in North Korea',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2011, 761]]    
           }, {
               name: '40 year old woman in North Korea',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2011, 457]]    
           }, {
               name: 'Boy as child soldier in Burma',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2004, 46]]    
           }, {
               name: 'Person in China for forced labor in brickyards',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2011, 78]]    
           }, {
               name: 'Syrian female in Jordan for temporary "pleasure marriage" in Jordan',
               color: 'rgba(119, 152, 191, .5)',
               data: [[2012, 200]]    
           }];

angular.module('myApp')
  .controller('graph4', ['$scope', '$timeout', function ($scope, $timeout) {

    console.log('graph4');
   
    function initialize() {
       $('#graph4').highcharts({
           chart: {
               type: 'scatter',
           },
           title: {
               text: 'Cost of a Person over Time'
           },
           subtitle: {
               text: '(in US dollars; adjusted for inflation)<br>Source: www.informationisbeautiful.com/data'
           },
           xAxis: {
               title: {
                   text: 'Year'
               }, 
               endOnTick: true,
               showLastLabel: true
           },
           yAxis: {
               title: {
                   text: 'Cost in US Dollars'
               },
           
               endOnTick: true,
               showLastLabel: true
           },
           plotOptions: {
               scatter: {
                   marker: {
                       radius: 6,
                       states: {
                           hover: {
                               enabled: true,
                               lineColor: 'rgb(100,100,100)'
                           }
                       }
                   },
                   states: {
                       hover: {
                           marker: {
                               enabled: true
                           }
                       }
                   },
                   tooltip: {
                       headerFormat: '<b>{series.name}</b>',
                       pointFormat: ' sold for <b>${point.y}</b> in {point.x}'
                   }
               }
           },
           series: graph4Data
       });
    }

    // $timeout(initialize, 300);
    initialize();

  }]);