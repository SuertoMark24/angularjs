(function(){
  'use strict';

  var app = angular.module('myFirstApp', [])
  app.controller('MyFirstController',MyFirstController);
  app.controller('NameCalculatorController',NameCalculatorController);
  app.controller('DIApp',DIapp);

  function MyFirstController($scope, $filter){
    $scope.name = "Mark"
    $scope.sayhello = function(){
    return "Your name is ";
    };
  }
  function NameCalculatorController($scope,$injector){
      $scope.name = "";
      $scope.totalValue = 0;
      $scope.displayNumeric = function(){
        var totalNameValue = calc($scope.name)
        $scope.totalValue = totalNameValue;
      };

      function calc(string){
        var totalstringvalue = 0 ;

        for(var i = 0; i < string.length; i++){
          totalstringvalue += string.charCodeAt(i);
        }

        return totalstringvalue;
      }
        console.log($injector.annotate(MyFirstController));
  }
  function DIapp($scope,
                $filter,
                $injector) {
    $scope.name ="mark";
    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

  }

})();
