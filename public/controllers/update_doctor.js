var app = angular.module('doctor');

app.controller('updateDoctorController', ['$scope', '$element','title','phone','gender','address','designation','specialisation', 'close','$http','localStorageService',
    function($scope, $element, title, phone, gender, address, designation,specialisation , close, $http, localStorageService) {

    $scope.title = title;
    $scope.phone = phone;
    $scope.gender = gender;
    $scope.address = address;
    $scope.designation = designation;
    $scope.specialisation = specialisation;
    $scope.person = ['Male','Female','Other'];
    $scope.first_name = localStorageService.get('firstName');
    $scope.last_name = localStorageService.get('lastName');
    $scope.email = localStorageService.get('emailID');
    
    $scope.close = function() {
            close({}, 500);
    };

    $scope.update = function() {
        var dataObj = {
            first_name : $scope.first_name,
            last_name : $scope.last_name,
            designation: $scope.designation,
            phone: $scope.phone,
            email: $scope.email,
            address : $scope.address,
            gender : $scope.gender,
            designation : $scope.designation,
            specialisation : $scope.specialisation
        };
        $http.post('/doctordetails/updateDetails', JSON.stringify(dataObj)).then(function(response){
            if(response.data){
                console.log('Update Properly ho gya backend pr');
                console.log(response.data);
                localStorageService.set("firstName", response.data.first_name);
                localStorageService.set("lastName", response.data.last_name);
                $element.modal('hide')    
            }    
        },function(response){
            console.log('failure - Update Backend');
            console.log(response);
            $element.modal('hide')
        });
    };
}]);