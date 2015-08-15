var myApp = angular.module('myApp', []);
myApp.factory('Data', function(){
    return {message: "共有されるメッセージ"}
})

function FirstCtrl ($scope, Data) {
    $scope.data = Data;
}

function SecondCtrl ($scope, Data) {
    $scope.data = Data;
}