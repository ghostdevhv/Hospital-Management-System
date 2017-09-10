var app = angular.module('doctor', ['angularModalService', 'ngAnimate','LocalStorageModule','720kb.datepicker']);
app.controller('doctor_controller', ['$scope','$window','$http','$location', 'ModalService','localStorageService',
    function($scope, $window, $http, $location, ModalService, localStorageService) {

        var email = localStorageService.get("emailID");
        var type = localStorageService.get("type");

        $scope.category = ['Current Patients','Past Patients'];

        $scope.init = function(){
            if(email != null && type =="Doctor"){
                
                var dataObj = {
                    email: email,
                };

                $http.post("/doctordetails/getDetails", JSON.stringify(dataObj), {
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
                        $scope.specialisation = response.data.specialisation;
                    }
                }, function(response){
                    console.log("failure");
                });
            }
            else{
                $window.location.href="/index.html";
            }
        }
        
        $scope.convert_date = function($date){
            return (new Date($date)).toDateString();
        }

        $scope.logout = function(){
            $window.localStorage.clear();
            $window.location.href="/index.html";
        }

        $scope.edit = function(){
            ModalService.showModal({
            templateUrl: "modals/updateDoctor.html",
            controller: "updateDoctorController",
            inputs: {
                title: "Update your Profile",
                phone: $scope.phone,
                gender: $scope.gender,
                address: $scope.address,
                designation: $scope.designation,
                specialisation : $scope.specialisation
            }
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    console.log("Update ka front end chal rha hai");
                });
            });
        }

        $scope.opendetails = function($email){
            ModalService.showModal({
            templateUrl: "modals/showPatientDetails.html",
            controller: "showPatientDetailsController",
            inputs: {
                title: "Patient Details",
                email: $email
            }    
            }).then(function(modal){
                modal.element.modal();
                modal.close().then(function(result){
                    console.log("Patient Details FrontEnd chal raha hai");
                });
            });
        }
    }
]);