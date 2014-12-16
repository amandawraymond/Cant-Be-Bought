angular.module('myApp')
    .controller('myCtrl', function ($scope, $state, $rootScope, personService) {
   
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

    $rootScope.fate = "Fate is based on statistics from resources listed below";
    $scope.revealFate = function() {
      $rootScope.fate = personService.createFate();

    };
  




});

