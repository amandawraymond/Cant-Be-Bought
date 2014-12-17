angular.module('myApp')
.service('quoteService', ["$http",  function($http) {

  var that = this;
  var quotesUrl = '/quotes';

  that.quotes = [];

  this.getAllQuotes = function() {
    return $http.get(quotesUrl + '.json').success(function(data) {
      that.quotes = data;
    });
  };

  
}]);