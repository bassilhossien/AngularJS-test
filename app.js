(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchMenu="";

    $scope.CheckLunch = function(){
      $scope.message = analysMeals($scope.lunchMenu);
    };

  }

  function analysMeals(string){
    if (string =="") {
      return "";
    }

    var mealsArray = string.split(',');

    if (mealsArray.length > 3) {
      return "Too much!"
    }
    else {
      return "Enjoy!";
    }
  }

})();
