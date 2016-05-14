
angular.module("app", ["ngResource", "ngRoute", "ngMaterial"]).run(function($rootScope) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };

});
//var app-
 angular.module("app", ["ngRoute", "ngMaterial"]).config(function($mdThemingProvider){
  $mdThemingProvider.theme('default')
  .primaryPalette('amber')
  .accentPalette('amber');
});
