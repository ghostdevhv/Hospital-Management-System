var app = angular.module('patient', ['angularModalService', 'ngAnimate']);

app.controller('patient_controller', ['$scope','$window','$http','$location', 'ModalService',
    function($scope, $window, $http, $location, ModalService) {

        var urlTokens = $location.absUrl().split('?');
        var userName = urlTokens[1].split('=')[1];
        var dataObj = {
            user_name: userName,
        };
        // var _items = null;

        $scope.init = function(){
            $http.post("/patientdetails/getDetails", JSON.stringify(dataObj), {
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Methods": "*"
                }
            }).then(function(response){
                if(response.data){
                    console.log(response.data);
                    console.log(response.data.first_name);
                    $scope.first_name = response.data.first_name;
                    $scope.last_name = response.data.last_name;
                    $scope.user_name = response.data.user_name;
                    $scope.designation = response.data.designation;
                    $scope.phone = response.data.phone;
                    $scope.email = response.data.email;
                    $scope.dateofbirth = response.data.dateofbirth;
                    $scope.address = response.data.address;
                    $scope.gender = response.data.gender;
                }
            }, function(response){
                console.log("failure");
            });
        }
        
        $scope.edit = function(){
            ModalService.showModal({
            templateUrl: "modals/update_modal.html",
            controller: "updatemodalController",
            inputs: {
                title: "Update your Profile",
                user_name: $scope.user_name,
                first_name: $scope.first_name,
                last_name: $scope.last_name,
                phone: $scope.phone,
                email: $scope.email,
                gender: $scope.gender,
                address: $scope.address,
                designation: $scope.designation
            }
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    console.log("Update ka front end chal rha hai");
                });
            });
        }

        $scope.schedule = function(){
            ModalService.showModal({
                templateUrl: "modals/scheduleAppointment.html",
                controller : "scheduleAppointmentController",
                inputs :{
                    title : "Schedule an Appointment",
                }
            }).then(function(modal){
                modal.element.modal();
                modal.close.then(function(result){
                    console.log("Schedule kaam kar raha hai");
                });
            });
        }
    }
]);