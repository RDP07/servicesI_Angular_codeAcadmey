app.controller('MainController', ['$scope', function($scope) {
  forecast.success(function(data) {
  	$scope.fiveDay = data;
  });
}]);