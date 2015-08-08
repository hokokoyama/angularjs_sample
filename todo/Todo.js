var TodoApp = angular.module('TodoApp', []);

TodoApp.controller('TodoCtrl', ['$scope', function($scome){
	$scope.todos= [];
	index = 0;

	$scope.add = function(){
		$scope.todos.push({id: index, message: $scope.message, done: false});
		$scope.message = "";
		index++;
	};
}]);