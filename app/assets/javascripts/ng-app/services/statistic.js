angular.module('myApp')
.service('statisticService', ['$http', '$timeout',  function($http, $timeout) {

  var that = this;
  var statisticsUrl = '/statistics';

  that.statistics = [];

  this.getAllStatistics = function() {
    return $http.get(statisticsUrl + '.json').success(function(data) {
      that.statistics = data;
    });
  };

  
}]);