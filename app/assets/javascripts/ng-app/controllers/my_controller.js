angular.module('myApp')
    .controller('myCtrl', ['$scope', '$state', '$rootScope', 'personService', 'quoteService', 'statisticService', '$interval', '$window', function ($scope, $state, $rootScope, personService, quoteService, statisticService, $interval, $window) {
   
    $scope.selectedGraph = 'graph1';
    
    $scope.personTypes = personService.personTypes;       
    
    // $scope.person = personService.person;

    $scope.gotoNewPerson = function() {
     $state.go('dashboard.person_info');
    };

    $scope.changeScreen = function(personType) {
      $rootScope.person = personService.createPerson(personType);
      $state.go('dashboard.person_detail');
      $scope.getSelectedQuote($scope.person);
    };

    // $rootScope.fate = "Your fate is based on statistics from resources listed below:";
    $scope.revealFate = function() {
      $rootScope.fate = personService.createFate();
      $rootScope.transport = personService.createTransport();
      
      };
    // $rootScope.transport = "UNODC and State Trafficking 2014 Report ";


    $scope.getQuotes = function() {
    quoteService.getAllQuotes().success(function(data) {
      $scope.quotes = data;
    }).error(function() {
      alert('Something went wrong!');
    });
  };

    $scope.getQuotes();


    $scope.getRandomStatistic = function() {
    statisticService.getAllStatistics().success(function(data) {
      var number = Math.floor(Math.random() * data.length);
      $scope.statistic = data[number].sentence;
      });
    };
  
    $interval(function(){
        $scope.getRandomStatistic();
     }.bind(this), 4000);    

    $scope.getRandomStatistic();

    
    $scope.timedCounter = function(count) {
      $scope.counter = count + 1;
    };

    $interval(function(){
        $scope.timedCounter($scope.counter);
     }.bind(this), 30000);    

    $scope.timedCounter(0);
    
   
      
    $scope.getSelectedQuote = function(person) {
      $scope.filteredQuotes = _.filter($scope.quotes, function(quote) {
        return quote.category === person.exploitationType;
      });
      var number = Math.floor(Math.random() * $scope.filteredQuotes.length);
      $scope.selectedQuote = $scope.filteredQuotes[number];
      $rootScope.selectedQuote = $scope.filteredQuotes[number];
    };

     $scope.goToQuote = function() {
       $state.go('dashboard.quote');
     };



    // $scope.selectedGraph = 

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

  //buttons to switch graphs
  $scope.selectGraph = function(requestedGraph) {
    $scope.selectedGraph = requestedGraph;
  };

  $scope.openTab= function(url) {
       $window.open(url, '_blank');
    };



//parallax-library//

$(document).ready(function() {
  
  redrawDotNav();
  
  /* Scroll event handler */
    $(window).bind('scroll',function(e){
      parallaxScroll();
    redrawDotNav();
    });
    
  /* Next/prev and primary nav btn click handlers */
  $('a.cant-be-bought').click(function(){
      $('html, body').animate({
        scrollTop:0
      }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
      return false;
  });
    $('a.another-life').click(function(){
      $('html, body').animate({
        scrollTop:$('#another-life').offset().top
      }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
      return false;
    });
    $('a.the-statistics').click(function(){
      $('html, body').animate({
        scrollTop:$('#the-statistics').offset().top
      }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
      return false;
    });
    $('a.video').click(function(){
      $('html, body').animate({
        scrollTop:$('#video').offset().top
      }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
      return false;
    });
    $('a.join-the-fight').click(function(){
      $('html, body').animate({
        scrollTop:$('#join-the-fight').offset().top
      }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
      return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
      function () {
      $(this).prev('h1').show();
    },
    function () {
      $(this).prev('h1').hide();
    }
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  $('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
  $('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
  $('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
  var section1Top =  0;
  // The top of each section is offset by half the distance to the previous section.
  var section2Top =  $('#another-life').offset().top - (($('#the-statistics').offset().top - $('#another-life').offset().top) / 2);
  var section3Top =  $('#the-statistics').offset().top - (($('#video').offset().top - $('#the-statistics').offset().top) / 2);
  var section4Top =  $('#video').offset().top - (($('#join-the-fight').offset().top - $('#video').offset().top) / 2);
  var section5Top =  $('#join-the-fight').offset().top - (($(document).height() - $('#join-the-fight').offset().top) / 2);;
  $('nav#primary a').removeClass('active');
  if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
    $('nav#primary a.cant-be-bought').addClass('active');
  } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
    $('nav#primary a.another-life').addClass('active');
  } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
    $('nav#primary a.the-statistics').addClass('active');
  } else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
    $('nav#primary a.video').addClass('active');
  } else if ($(document).scrollTop() >= section5Top){
    $('nav#primary a.join-the-fight').addClass('active');
  }
  
}


}]);

