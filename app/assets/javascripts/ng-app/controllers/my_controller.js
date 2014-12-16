angular.module('myApp')
    .controller('myCtrl', function ($scope, $state, personService) {
   
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

});
