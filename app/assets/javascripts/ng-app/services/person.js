angular.module('myApp')
.service('personService', function() {

  var that = this;

  var various = "mixed exploitations that includes committing crime, begging, pornography (including Internet pornography), forced marriages, benefit fraud, baby selling,  illegal adoption, armed combat, or for rituals.";

  var forcedLabor = "forced labor which includes a broad category which includes, for example, manufacturing, cleaning, construction, catering, restaurants, domestic work and textile production";

  var maleExploitationGenerator = function() {
    var number = Math.floor((Math.random() * 101) + 1);
    console.log(number);
        if (number < 2) {
        return "organ removal";    
      } else if (number < 10) {
        return various;   
      }  else if (number < 18) {
        return "sexual exploitation";   
      } else {
        return forcedLabor;    
      }
  };


  var womanExploitationGenerator = function() {
    var number = Math.floor((Math.random() * 1001) + 1);
    console.log(number);
      if (number < 2) {
      return "organ removal";    
    } else if (number < 142) {
      return various;   
    }  else if (number < 212) {
      return forcedLabor;   
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
      console.log('createPerson: ' + JSON.stringify(that.person));
      return that.person;
    };


    this.personTypes = ['female','male'];

    var rescue = function() {
      var number = Math.floor((Math.random() * 101) + 1);
      console.log(number);
      if (number < 2) {
        return "You were one of the lucky ones that was saved";
       } else {
        return "You were not rescued";
      }
    };

    var transport = function() {
      var number = Math.floor((Math.random() * 10) + 1);
      console.log(number);
       if (number < 4) {
        return "You are of the percentage of victims that is exploitation in the country of your citizenship";    
      } else {
        return "You of the percentage of victims that is trafficked across at least one border";    
      } 
    };

    this.createTransport = function() {
      return transport();
    };

    this.createFate = function() {
      return rescue();
    };
  });