var app = angular.module('patient');

app.controller('scheduleAppointmentController', ['$scope', '$element', 'title', 'close','$http','localStorageService',
    function($scope, $element, title, close, $http, localStorageService) {

    $scope.title = title;
    $scope.patient_name = localStorageService.get("firstName")+" "+localStorageService.get("lastName");
    $scope.email = localStorageService.get('emailID');

    $scope.typeDoctor = ['Audiologist','Allergist','Anesthesiologist','Cardiologist','Dentist','Dermatologist','Endocrinologist','Epidemiologist','Gynecologist','Immunologist','Infectious Disease Specialist','Internal Medicine Specialist','ENT Specialist','Physiologist'];
    $scope.description = null;
    
    var today = new Date();
    var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    $scope.minDate = tomorrow.toDateString();

    $scope.close = function() {
            close({}, 500);
    };

    $scope.schedule = function() {
        var dataObj = {
            patient_name : $scope.patient_name,
            email : $scope.email,
            description : $scope.description,
            date : (new Date($scope.date)).getTime(),
            doctorType : $scope.doctorType,
            state : '0',
            doctorName : "NA",
            appointmentTime : "NA"
        };

        $http.post('/schedules/insert', JSON.stringify(dataObj)).then(function(response){
            if(response.data){
                console.log('Schedules Properly ho gya backend pr');
                $element.modal('hide')    
            }    
        },function(response){
            console.log('failure - Schedules Backend');
            console.log(response);
            $element.modal('hide')
        }); 
    };

}]);