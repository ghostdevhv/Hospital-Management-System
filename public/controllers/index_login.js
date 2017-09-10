var app = angular.module('index');

app.controller('modalController', ['$scope', '$element', 'title', 'close','$window','$http','localStorageService',
    function($scope, $element, title, close, $window, $http, localStorageService) {

        $scope.login_user = null;
        $scope.login_pass = null;
        $http.defaults.headers.common.Authorization = 'Access-Control-Allow-Origin';
        $scope.title = title;
        $scope.occupation = ['Doctor','Nurse','Patient','Admin'];
        $scope.designation = null
  
        $scope.cancel = function() {
            close({}, 500);
        };

        $scope.login = function() {
            var desig = $scope.designation;
            var dataObj = {
                email : $scope.login_user,
                password : $scope.login_pass,
            };

            if(desig == "Doctor"){
                console.log("Hello");
                console.log(dataObj);
                $http.post("/doctordetails/login", JSON.stringify(dataObj), {
                    headers:{
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "*"
                    }
                }).then(function(response){
                    if(response.data){
                        console.log(response.data);
                        var url = "/doctor.html";
                        console.log("Authentication Successful");
                        localStorageService.set("emailID", response.data.email);
                        localStorageService.set("firstName", response.data.first_name);
                        localStorageService.set("lastName", response.data.last_name);
                        localStorageService.set("type", "Doctor");
                        $window.location.href = url+"?type=doctor";
                        $element.modal('hide')
                    }
                }, function(response){
                    console.log("failure")
                    console.log(response);
                    $element.modal('hide')
                });
            }
            else if(desig == "Nurse"){
                $http.post("/nursedetails/login", JSON.stringify(dataObj), {
                    headers:{
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "*"
                    }
                }).then(function(response){
                    if(response.data){
                        var url = "/nurse.html";
                        console.log("Authentication Successful");
                        localStorageService.set("emailID", response.data.email);
                        localStorageService.set("firstName", response.data.first_name);
                        localStorageService.set("lastName", response.data.last_name);
                        localStorageService.set("type", "Nurse");
                        $window.location.href = url+"?type=nurse";
                        $element.modal('hide')
                    }
                }, function(response){
                    console.log("failure")
                    console.log(response);
                    $element.modal('hide')
                });
            }
            else if(desig == "Patient"){
                $http.post("/patientdetails/login", JSON.stringify(dataObj), {
                    headers:{
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "*"
                    }
                }).then(function(response){
                    if(response.data){
                        var url = "/patient.html";
                        console.log("Authentication Successful");
                        console.log(response.data);
                        localStorageService.set("emailID", response.data.email);
                        localStorageService.set("firstName", response.data.first_name);
                        localStorageService.set("lastName", response.data.last_name);
                        localStorageService.set("type", "Patient");
                        $window.location.href = url+"?type=patient";
                        $element.modal('hide')
                    }
                }, function(response){
                    console.log("failure")
                    console.log(response);
                    $element.modal('hide')
                });
            }
            else if(desig == "Admin"){
                $http.post("/admindetails/login", JSON.stringify(dataObj), {
                    headers:{
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "*"
                    }
                }).then(function(response){
                    if(response.data){
                        var url = "/admin.html";
                        console.log("Authentication Successful");
                        localStorageService.set("emailID", response.data.email);
                        localStorageService.set("firstName", response.data.first_name);
                        localStorageService.set("lastName", response.data.last_name);
                        localStorageService.set("type", "Admin");
                        $window.location.href = url+"?type=admin";
                        $element.modal('hide')
                    }
                }, function(response){
                    console.log("failure")
                    console.log(response);
                    $element.modal('hide')
                });
            }
        };
    }
]);