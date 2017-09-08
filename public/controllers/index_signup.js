var app = angular.module('index');

app.controller('modalController1', ['$scope', '$element', 'title', 'close','$http',
    function($scope, $element, title, close, $http) {

    $scope.title = title;
    $scope.firstname = null;
    $scope.lastname = null;
    $scope.password = null;
    $scope.myoccupation = 1;
    $scope.occupation = ['Doctor','Nurse','Patient','Admin'];
    $scope.dateofbirth = null;
    $scope.phone = null;
    $scope.address = null;
    $scope.email = null;
    $scope.specialisation = null;
    $scope._gender = ['Male','Female','Other']
    $scope._occupation = ['Audiologist','Allergist','Anesthesiologist','Cardiologist','Dentist','Dermatologist','Endocrinologist','Epidemiologist','Gynecologist','Immunologist','Infectious Disease Specialist','Internal Medicine Specialist','ENT Specialist','Physiologist'];
    
    $scope.close = function() {
            close({}, 500);
    };

    $scope.signup = function() {
        var person = $scope.designation;

        if(person == "Doctor"){
            var dataObj = {
                first_name : $scope.firstname,
                last_name : $scope.lastname,
                password : $scope.password,
                designation: $scope.designation,
                phone: $scope.phone,
                email: $scope.email,
                dateofbirth: $scope.dateofbirth,
                address : $scope.address,
                gender : $scope.gender,
                specialisation: $scope.specialisation,
            };

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
        else{
            var dataObj = {
                first_name : $scope.firstname,
                last_name : $scope.lastname,
                password : $scope.password,
                designation: $scope.designation,
                phone: $scope.phone,
                email: $scope.email,
                dateofbirth: $scope.dateofbirth,
                address : $scope.address,
                gender : $scope.gender,
            };

            if (person == "Nurse"){
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
            if (person == "Admin"){
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
            if (person == "Patient"){
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
        } 
    };
}]);