var app = angular.module('patient', ['angularModalService', 'ngAnimate','LocalStorageModule','720kb.datepicker']);
app.controller('patient_controller', ['$scope','$window','$http','$location', 'ModalService','localStorageService',
    function($scope, $window, $http, $location, ModalService, localStorageService) {

        var email = localStorageService.get("emailID");

        $scope.init = function(){
            if(email == null){
                $window.location.href="/index.html";
            }
            else{
                var dataObj = {
                    email: email,
                };
                $http.post("/patientdetails/getDetails", JSON.stringify(dataObj), {
                    headers:{
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "*"
                    }
                }).then(function(response){
                    if(response.data){
                        console.log(response.data);
                        $scope.first_name = response.data.first_name;
                        $scope.last_name = response.data.last_name;
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

                $http.post("/schedules/pastAppointment", JSON.stringify(dataObj), {
                    headers:{
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "*"
                    }
                }).then(function(response){
                    if(response.data){
                        console.log("Chal gaya -> Past");
                    }
                }, function(response){
                    console.log("failure");
                });

                $http.post("/schedules/futureAppointment", JSON.stringify(dataObj), {
                    headers:{
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "*"
                    }
                }).then(function(response){
                    if(response.data){
                        console.log("Chal gaya -> Future");
                    }
                }, function(response){
                    console.log("failure");
                });
            }
        }
        
        $scope.logout = function(){
            $window.localStorage.clear();
            $window.location.href="/index.html";
        }

        $scope.edit = function(){
            ModalService.showModal({
            templateUrl: "modals/update_modal.html",
            controller: "updatemodalController",
            inputs: {
                title: "Update your Profile",
                phone: $scope.phone,
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