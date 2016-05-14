angular.module("app").factory("PostService", function($http){
  var listar=function(){

   return $http({
     url: 'http://jsonplaceholder.typicode.com/posts',
    method: 'GET'
  });
 }
 var listar2=function(){

  return $http({
    url: 'http://jsonplaceholder.typicode.com/posts',
   method: 'POST'
 });
}

 return{ listar : listar , listar2:listar2}
});
