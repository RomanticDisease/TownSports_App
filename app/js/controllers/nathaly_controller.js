angular.module("app").controller("nathalyController", function($scope){

$scope.nombrePersona="Zuleima Nathaly";

$scope.num1; $scope.num2;
$scope.suma=function(){
  $scope.resultado=$scope.num1+$scope.num2;
};
$scope.num1; $scope.num2;
$scope.resta=function(){
  $scope.resultado=$scope.num1-$scope.num2;
};
$scope.num1; $scope.num2;
$scope.multiplicacion=function(){
  $scope.resultado=$scope.num1*$scope.num2;
};
$scope.num1; $scope.num2;
$scope.division=function(){
  $scope.resultado=$scope.num1/$scope.num2;
};

})
