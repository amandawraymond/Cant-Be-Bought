angular.module('myApp')
.service('statisticService', function($http) {

  var that = this;
  var statisticsUrl = '/statistics';

  that.statistics = [];

  this.getAllStatistics = function() {
    return $http.get(statisticsUrl + '.json').success(function(data) {
      that.statistics = data;
    });
  };

  
});