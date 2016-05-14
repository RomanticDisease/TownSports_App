
angular.module("app").controller("EntrarController", function($scope, $route, AuthenticationService, SidenavFactory,$mdDialog,$location,$mdSidenav){
$scope.credentials = {username:"",password:""};

$scope.entrar=function(){
 $scope.authResponse=AuthenticationService.credentials;

 if($scope.credentials.username === $scope.authResponse.username && $scope.credentials.password === $scope.authResponse.password)
 {
   $location.path('/iglesias');
   SidenavFactory.setSidenav(true);
   SidenavFactory.setToolbar(true);

 }else {
   $mdDialog.show(
     $mdDialog.alert().clickOutsideToClose(true)
     .title('Ups ')
     .textContent('contraseña o nombre de usuario incorrectos')
     .ok('ok')
    );
   }
  };

 //para ocultar el sidenav
$scope.showSidenav = function(){
  $scope.show = SidenavFactory.getSidenav();
  return $scope.show;
};
$scope.showToolbar = function(){
  $scope.showT = SidenavFactory.getToolbar();
  $scope.toolbarTitle = SidenavFactory.getTile();
  return $scope.showT;
};
//codio del path para los elementos
$scope.irIglesias = function(){

  SidenavFactory.setSidenav(true);
  SidenavFactory.setToolbar(true);
  SidenavFactory.setTitle("Iglesias");
  $location.path('/iglesias');
};
$scope.irSitios = function(){

  SidenavFactory.setSidenav(true);
  SidenavFactory.setToolbar(true);
  SidenavFactory.setTitle("Sitios Turisticos");
  $location.path('/sitios');
};
$scope.irRestaurantes = function(){

  SidenavFactory.setSidenav(true);
  SidenavFactory.setToolbar(true);
  SidenavFactory.setTitle("Restaurantes");
  $location.path('/restaurantes');
};
$scope.irClima = function(){

  SidenavFactory.setSidenav(true);
  SidenavFactory.setToolbar(true);
  SidenavFactory.setTitle("Clima");
  $location.path('/clima');
};
});
