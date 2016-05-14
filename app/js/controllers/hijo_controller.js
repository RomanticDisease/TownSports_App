angular.module("app").controller("hijoController", function($scope){
  $scope.titulo="escuelasDeportivas"
 $scope.escuela="";
 $scope.lista=[];
 $scope.adicionar=function () {
   $scope.lista.push($scope.escuela);
    }
});
