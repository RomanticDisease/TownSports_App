angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({enabled:true});

  $routeProvider.when('/entrar', {
    templateUrl: 'entrar.html',
    controller: 'EntrarController'
  });

  $routeProvider.when('/iglesias', {
    templateUrl: 'iglesias.html',
    controller: 'IglesiasController'
  });

  $routeProvider.when('/sitios', {
    templateUrl: 'sitios.html',
    controller: 'SitiosController'
  });

  $routeProvider.when('/restaurantes', {
    templateUrl: 'restaurantes.html',
    controller: 'RestaurantesController'
  });
  $routeProvider.when('/clima', {
    templateUrl: 'clima.html',
    controller: 'ClimaController'
  });

  $routeProvider.when('/post', {
    templateUrl: 'post.html',
    controller: 'PostController'
  });

  $routeProvider.when('/nathaly', {
    templateUrl: 'nathaly.html',
    controller: 'nathalyController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/$resource/list-of-books', {
    templateUrl: 'books_resource.html',
    controller: 'BooksResourceController'
  });

  $routeProvider.when('/$http/list-of-books', {
    templateUrl: 'books_http.html',
    controller: 'BooksHttpController',
    resolve: {
      books: function(BookService) {
        return BookService.getBooks();
      }
    }
  });

  $routeProvider.otherwise({ redirectTo: '/entrar' });

});
