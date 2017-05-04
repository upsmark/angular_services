(function() {

  var app = angular.module("madLibs");

  app.controller("resultController", function($scope, myService){

   $scope.obj = myService.giveWords();


  })


})();
