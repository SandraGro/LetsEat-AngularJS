var app = angular.module('letsEat', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'views/home.html',
        controller:'HomeViewcontroller'
    })
    .when('/breakfast',{
        templateUrl: 'views/breakfast.html',
        controller:'BreakfastViewcontroller'
    })
    .when('/lunch',{
        templateUrl: 'views/lunch.html',
        controller:'LunchViewcontroller'
    })
    .when('/dinner',{
        templateUrl: 'views/dinner.html',
        controller:'DinnerViewcontroller'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('HomeViewController', ['$scope', function($scope){
    $scope.appTitle = 'Restaurants';
}]);

app.controller('BreakfastViewcontroller', ['$scope', function($scope){
    $scope.restaurants = [
        {name: 'Restaurant1', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant2', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant3', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant4', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant5', direccion: 'calle falsa #123', reviews: 'blah blah blah'}
    ]
}]);

app.controller('LunchViewcontroller', ['$scope', function($scope){
    $scope.restaurants = [
        {name: 'Restaurant1', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant2', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant3', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant4', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant5', direccion: 'calle falsa #123', reviews: 'blah blah blah'}
    ]
}]);

app.controller('DinnerViewcontroller', ['$scope', function($scope){
    $scope.restaurants = [
        {name: 'Restaurant1', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant2', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant3', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant4', direccion: 'calle falsa #123', reviews: 'blah blah blah'},
        {name: 'Restaurant5', direccion: 'calle falsa #123', reviews: 'blah blah blah'}
    ]
}]);

