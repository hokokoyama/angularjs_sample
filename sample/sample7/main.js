var app = angular.module("myApp", []);

app.directive("test", function () {
    return {
        restrict: "A",
        link: function () {
            alert('これはテストです！');
        }
    };
});