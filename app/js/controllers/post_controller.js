angular.module("app").controller("PostController", function($scope, PostService){
  $scope.resultado=[];
  $scope.resultadoG;

  $scope.listar=function(){
    PostService.listar().then(
      function exito(resp){
    console.log(resp);
     for(i=0; i<resp.data.length; i++){
      $scope.resultado.push(resp.data[i].title);

    }
  },

     function err(resp){
      console.log("error " + resp)
    });
  };

  $scope.listar2=function(){

    PostService.listar2().then(
    function exito(resp){
    console.log(resp);
    $scope.resultadoG=resp.data.id;
           },
       function err(resp){
      console.log("error " + resp)

    });
  };


 });
