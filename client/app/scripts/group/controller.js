'use strict';

angular.module('Group')
    .controller('group', function($scope) {

        $scope.controller_loaded = 'Group loaded!';
        // Proceso suma

        // $scope.suma = function(n1, n2){
        // 	return n1+n2;
        // }

        // // proceso multiplicacion
        // $scope.multiplicacion = function(n1, n2){
        // 	return n1 * n2;
        // }

        // $scope.validacion = function(datos){
        // 	if (datos.length) {
        // 		return true;
        // 	}
        // 	return false;
        // };
        // $scope.acu = [];

        // $scope.datos = function(datos) {
        //     if ($scope.validacion(datos)) {
        //         if ($scope.proceso_estocolmo(datos)) {
        //             console.log('test en camino', datos);
        //             //  if ($scope.proceso(datos)) {
        //             //    console.log('test en camino', datos);
        //             //  }
        //             return true;
        //         }
        //         if (!$scope.proceso_estocolmo(datos)) {
        //             return false;
        //         }
        //     }
        //     if (!$scope.validacion(datos)) {
        //         return false;
        //     }
        // }        

        // $scope.proceso_estocolmo = function(datos) {
        //     var x = 0;
        //     while (datos.length > x) {
        //         var valor = datos[x];
        //         if (!$scope.estocolmo(valor[0])) {
        //             return false;
        //         }
        //         x++;
        //     }
        //     return true;
        // }

        // $scope.estocolmo = function(valor) {
        //     if (valor >= 1000 && valor <= 1999) {
        //         return true;
        //     }
        //     return false;
        // }

        // 	$scope.proceso_londres = function(datos){
        // 		var x = 0;
        //  	while (datos.length > x) {
        //  		var valor = datos[x];
        //  		if (!$scope.londres(valor[1])) {
        //  			return false;
        //  		};	  		
        //  		x++;	
        //  	}
        // return true;
        // 	}

        // 	$scope.londres = function(valor){
        // 		if (valor >=1000 && valor <= 1999) {
        // 			return true;
        // 		}
        // 		return false;
        // 	}

    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/group', {
                templateUrl: 'scripts/group/views/group.html',
                controller: 'group'
            });
    });