angular.module('myApp')
.service('personService', ["$http",  function($http) {

  var that = this;

  // var various = "mixed exploitations that includes committing crime, begging, pornography (including Internet pornography), forced marriages, benefit fraud, baby selling,  illegal adoption, armed combat, or for rituals.";

  // var forcedLabor = "forced labor which includes a broad category which includes, for example, manufacturing, cleaning, construction, catering, restaurants, domestic work and textile production";

  var maleExploitationGenerator = function() {
    var number = Math.floor((Math.random() * 101) + 1);
    console.log(number);
        if (number < 2) {
        return "organ removal";    
      } else if (number < 10) {
        return "an alternative form of exploitation";   
      }  else if (number < 18) {
        return "sexual exploitation";   
      } else {
        return "forced labor";    
      }
  };


  var womanExploitationGenerator = function() {
    var number = Math.floor((Math.random() * 1001) + 1);
    console.log(number);
      if (number < 2) {
      return "organ removal";    
    } else if (number < 142) {
      return "an alternative form of exploitation"; 
    }  else if (number < 212) {
      return "forced labor";   
    } else {
      return "sexual exploitation";    
    }
  };

  var exploitationTypeGenerator = function(personType) {
    if (personType === "female") {
      return womanExploitationGenerator();
      console.log("female");
    } else {
      return maleExploitationGenerator();
      console.log("male");
    } 
  };
   
    this.createPerson = function(personType) {
      that.person = { name: null, exploitationType: exploitationTypeGenerator(personType), personType: personType };
      return that.person;
    };


    this.personTypes = ['female','male'];

    var rescue = function() {
      var number = Math.floor((Math.random() * 101) + 1);
      console.log(number);
      if (number < 2) {
        return "The person you chose was one of the lucky ones. They are free now.";
       } else {
        return "Sadly, the person you chose was never freed from slavery.";
      }
    };

    var transport = function() {
      var number = Math.floor((Math.random() * 10) + 1);
      console.log(number);
       if (number < 4) {
        return "Based on the statistics that we know it's likely that the person that you chose was exploited within their country of citizenship.";    
      } else {
        return "Based on the statistics that we know it's likely that the person that you chose was trafficked across at least one border.";    
      } 
    };

    this.createTransport = function() {
      return transport();
    };

    this.createFate = function() {
      return rescue();
    };
  }]);