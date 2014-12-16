angular.module('myApp')
.service('personService', function() {

  var that = this;

  var exploitationTypeGenerator = function() {
      var number = Math.floor((Math.random() * 1000) + 1);
      console.log(number);
        if (number < 3) {
        return "organ removal";    
      } else if (number < 70) {
        return "various forms of exploitation";   
      }  else if (number < 400) {
        return "forced labor";   
      } else {
        return "sexual exploitation";    
      }
    };
   
    this.createPerson = function(personType) {
      that.person = { name: null, exploitationType: exploitationTypeGenerator(), personType: personType };
      console.log('createPerson: ' + JSON.stringify(that.person));
      return that.person;
    };


    this.personTypes = [ 'female adult',
                        'male adult',
                        'female child',
                         'male child'
                        ];
  });