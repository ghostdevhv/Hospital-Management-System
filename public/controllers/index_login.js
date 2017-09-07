var app = angular.module('index');

app.controller('modalController', ['$scope', '$element', 'title', 'close','$window','$http' ,
    function($scope, $element, title, close, $window, $http) {

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
                user_name : $scope.login_user,
                password : $scope.login_pass,
            };

            if(desig == "Doctor"){
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
                        $window.location.href = url+"?username="+response.data.user_name+"?type=doctor";
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
                        $window.location.href = url+"?username="+$scope.login_user+"?type=nurse";
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
                        $window.location.href = url+"?username="+$scope.login_user+"?type=patient";
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
                        $window.location.href = url+"?username="+$scope.login_user+"?type=admin";
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