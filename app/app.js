var modulo = angular.module("solicitud",['ngRoute']);
modulo.config(function($routeProvider){

	$routeProvider
	.when('/solicitud', {
            templateUrl : 'app/views/solicitud.html',
            controller  : 'solicitudController'
        })
	.when('/admin',{
		templateUrl: 'app/views/admin.html',
		controller : 'solicitudController'
	});
});
modulo.factory('localStorageFactory',localStorageFactory);
modulo.directive('filaSolicitud',filaSolicitud);
modulo.controller('solicitudController', ["$scope",'localStorageFactory',solicitudController]);
//modulo.controller('solicitudController', solicitudController);


