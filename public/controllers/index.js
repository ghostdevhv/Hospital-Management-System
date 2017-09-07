//  Build our app module, with a dependency on the angular modal service.
var app = angular.module('index', ['angularModalService', 'ngAnimate']);
app.controller('index_controller', ['$scope', 'ModalService', function($scope, ModalService) {

    $scope.myLogin = function() {
        console.log("aa gya");
        ModalService.showModal({
        templateUrl: "modals/login_modal.html",
        controller: "modalController",
        inputs: {
            title: "Login"
        }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                console.log("Log-in ka front end chal rha hai");
            });
        });
    };

    $scope.mySignup = function() {

        ModalService.showModal({
            templateUrl: "modals/signup_modal.html",
            controller: "modalController1",
            inputs: {
                title: "Register"
            }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                console.log("Sign-up ka front end chal rha hai");
            });
        });
    };

}]);