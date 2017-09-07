var app = angular.module('index');

app.controller('modalController1', ['$scope', '$element', 'title', 'close','$http',
    function($scope, $element, title, close, $http) {

    $scope.title = title;
    $scope.firstname = null;
    $scope.lastname = null;
    $scope.username = null;
    $scope.password = null;
    $scope.occupation = ['Doctor','Nurse','Patient','Admin'];
    $scope.dateofbirth = null;
    $scope.phone = null;
    $scope.address = null;
    $scope.email = null;
    $scope._gender = ['Male','Female','Other']
    
    $scope.close = function() {
            close({}, 500);
    };

    $scope.signup = function() {

        var dataObj = {
            first_name : $scope.firstname,
            last_name : $scope.lastname,
            user_name : $scope.username,
            password : $scope.password,
            designation: $scope.designation,
            phone: $scope.phone,
            email: $scope.email,
            dateofbirth: $scope.dateofbirth,
            address : $scope.address,
            gender : $scope.gender
        };
        var person = $scope.designation;

        if(person == "Doctor"){
            $http.post('/doctordetails/register', JSON.stringify(dataObj)).then(function(response){
                if(response.data){
                    console.log('Signup Properly ho gya backend pr');
                    $element.modal('hide')    
                }    
            },function(response){
                console.log('failure - Signup Backend');
                console.log(response);
                $element.modal('hide')
            });
        } 
        else if (person == "Nurse"){
            $http.post('/nursedetails/register', JSON.stringify(dataObj)).then(function(response){
                if(response.data){
                    console.log('Signup Properly ho gya backend pr');
                    $element.modal('hide')    
                }    
            },function(response){
                console.log('failure - Signup Backend');
                console.log(response);
                $element.modal('hide')
            });
        } 
        else if (person == "Admin"){
            $http.post('/admindetails/register', JSON.stringify(dataObj)).then(function(response){
                if(response.data){
                    console.log('Signup Properly ho gya backend pr');
                    $element.modal('hide')    
                }    
            },function(response){
                console.log('failure - Signup Backend');
                console.log(response);
                $element.modal('hide')
            });
        }
        else if (person == "Patient"){
            $http.post('/patientdetails/register', JSON.stringify(dataObj)).then(function(response){
                if(response.data){
                    console.log('Signup Properly ho gya backend pr');
                    $element.modal('hide')    
                }    
            },function(response){
                console.log('failure - Signup Backend');
                console.log(response);
                $element.modal('hide')
            });
        }
    };
}]);