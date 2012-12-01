/**
 * @author nanashiRei
 * @date 2012/12/01
 */
var irofferDinoexJs = angular.module('irofferDinoexJs', []);

irofferDinoexJs.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
        templateUrl:'views/welcome.html',
        controller:'WelcomeCtrl'
    });
}]);

irofferDinoexJs.controller('WelcomeCtrl', ['$scope', function ($scope) {
    // SEE: views/welcome.html
    $scope.message = "Welcome to iroffer-dinoexJS";
}]);