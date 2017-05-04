(function() {

var app = angular.module('madLibs', ['ngRoute']);

app.config(function($routeProvider){
$routeProvider.when('/input', {
  controller: "inputController",
  templateUrl: "input.html"
})


.when('/display', {
  controller: "resultController",
  templateUrl: "display.html"
})



.otherwise({
  redirectTo: "/input"

});

}); //closes app.config


})();
