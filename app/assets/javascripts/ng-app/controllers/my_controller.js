angular.module('myApp')
    .controller('myCtrl', function ($scope, $state, $rootScope, personService, quoteService, statisticService) {
   
    $scope.personTypes = personService.personTypes;       
    
    $scope.person = personService.person;

    $scope.gotoNewPerson = function() {
     $state.go('dashboard.person_info');
    };

    $scope.changeScreen = function(personType) {
      $scope.person = personService.createPerson(personType);
      console.log($scope.person);
      $state.go('dashboard.person_detail');
    };

    $rootScope.fate = "Your fate is based on statistics from resources listed below:";
    $scope.revealFate = function() {
      $rootScope.fate = personService.createFate();

    };
    $rootScope.transport = "UNODC and State Trafficking 2014 Report ";
    $scope.revealTransport = function() {
      $rootScope.transport = personService.createTransport();
      
    };

    $scope.getQuotes = function() {
    quoteService.getAllQuotes().success(function(data) {
      $scope.quotes = data;
    }).error(function() {
      alert('Something went wrong!');
    });
  };

    $scope.getStatistics = function() {
    statisticService.getAllStatistics().success(function(data) {
      $scope.statistics = data;
    }).error(function() {
      alert('Something went wrong!');
    });
  };

    $scope.getStatistics();
    $scope.getQuotes();


    $scope.getSelectedQuote = function() {
      var number = Math.floor(Math.random() * $scope.quotes.length);
      $scope.selectedQuote = $scope.quotes[number];
    };

    $scope.getSelectedStatistic = function() {
      var number = Math.floor(Math.random() * $scope.statistics.length);
      $scope.selectedStatistic = $scope.statistics[number];
    };

    // var getLaborQuotes = function(quotes) {
    //   console.log("top of funtcion");
    //   return _.filter(quotes, function(quote) {
    //     return quote.id === 1;
    //   });
    // };
    // $scope.laborQuotes = getLaborQuotes($scope.quotes);


    // $scope.getSelectedLaborQuote = function() {
    //   var number = Math.floor(Math.random() * $scope.laborQuotes.length);
    //   $scope.selectedLaborQuote = $scope.laborQuotes[number];
    // };


    
});

