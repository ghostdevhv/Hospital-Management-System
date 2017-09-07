var app = angular.module('patient');

app.controller('updatemodalController', ['$scope', '$element','title','user_name','first_name','last_name','phone','email','gender','address','designation', 'close','$http',
    function($scope, $element, title, user_name, first_name, last_name, phone, email, gender, address,designation, close, $http) {

    $scope.title = title;
    $scope.first_name = first_name;
    $scope.last_name = last_name;
    $scope.phone = phone;
    $scope.email = email;
    $scope.gender = gender;
    $scope.address = address;
    $scope.user_name = user_name;
    $scope.designation = designation;

    console.log(user_name);
    
    $scope.close = function() {
            close({}, 500);
    };

    $scope.update = function() {
        var dataObj = {
            first_name : $scope.first_name,
            last_name : $scope.last_name,
            user_name : $scope.user_name,
            designation: $scope.designation,
            phone: $scope.phone,
            email: $scope.email,
            address : $scope.address,
            gender : $scope.gender,
            designation : $scope.designation
        };
        var person = $scope.designation;

        if(person == "Doctor"){
            $http.post('/doctordetails/updateDetails', JSON.stringify(dataObj)).then(function(response){
                if(response.data){
                    console.log('Update Properly ho gya backend pr');
                    $element.modal('hide')    
                }    
            },function(response){
                console.log('failure - Update Backend');
                console.log(response);
                $element.modal('hide')
            });
        } 
        else if (person == "Nurse"){
            $http.post('/nursedetails/updateDetails', JSON.stringify(dataObj)).then(function(response){
                if(response.data){
                    console.log('Update Properly ho gya backend pr');
                    $element.modal('hide')    
                }    
            },function(response){
                console.log('failure - Update Backend');
                console.log(response);
                $element.modal('hide')
            });
        } 
        else if (person == "Admin"){
            $http.post('/admindetails/updateDetails', JSON.stringify(dataObj)).then(function(response){
                if(response.data){
                    console.log('Update Properly ho gya backend pr');
                    $element.modal('hide')    
                }    
            },function(response){
                console.log('failure - Update Backend');
                console.log(response);
                $element.modal('hide')
            });
        }
        else if (person == "Patient"){
            $http.post('/patientdetails/updateDetails', JSON.stringify(dataObj)).then(function(response){
                if(response.data){
                    console.log('Update Properly ho gya backend pr');
                    $element.modal('hide')    
                }    
            },function(response){
                console.log('failure - Update Backend');
                console.log(response);
                $element.modal('hide')
            });
        }
    };
}]);