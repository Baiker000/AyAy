/* Libs */
require("angular/angular");  
require("angular-route/angular-route");  
require("angular-resource/angular-resource");

/* Globals */
_ = require("lodash");  
_urlPrefixes = {  
  API: "api/v1/",
  TEMPLATES: "static/app/"
};

/* Components */
// A simple module with no dependencies

angular.module("myApp", [])
  .controller("simpleController", function ($scope)
  {
    // Initialize the model
    $scope.person = {
      firstName: "John",
      lastName: "Doe",

      // Define utility functions on the model object
      getFullName: function ()
      {
        return this.firstName + " " + this.lastName;
      }
    };
  });
/* App Dependencies */
angular.module("frontend", [  
  "ngResource",
  "ngRoute",
]);

/* Config Vars */
// @TODO in Step 13.

/* App Config */
angular.module("frontend").config(routesConfig);