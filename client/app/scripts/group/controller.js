'use strict';

angular.module('Group')
    .controller('group', function($scope) {

        $scope.controller_loaded = 'Grouap loaded!';

        $scope.datos = [
            ['1009', '2000'],
            ['1009', '2001'],
            ['1002', '2002'],
            ['1003', '2002'],
            // ['1004', '2003'],
            // ['1004', '2004'],
            // ['1004', '2005']
        ];

        

        $scope.revison_existencia = function(val1, val2){
            var datos = $scope.datos;
            var acu = 0;
            for (var i = 0; i < $scope.datos.length; i++) {
                if (val1 == datos[i][0] && val2 == datos[i][1]) {
                    acu++;
                }
            }
            console.log(acu);
            if (acu != 0) {
                return false;
            }
            if (acu == 0) {
                return true;
            }
        }

        // // $scope.datos =   ['0','1','0', '1'];
        $scope.validacion_estocolmo = function(valor){
            if (valor >= 1000 && valor < 2000) {
                return true;
            }
            return false;
        }
        $scope.validacion_londres = function(valor){
            if (valor >= 2000 && valor < 3000) {
                return true;
            }
            return false;
        }

        $scope.registrar = function() {
            var reg = $scope.data;
            if ($scope.validacion_estocolmo(reg.estocolmo)) {
                if ($scope.validacion_londres(reg.londres)) {
                    if ($scope.revison_existencia(reg.estocolmo, reg.londres)) {
                        $scope.datos.push([reg.estocolmo, reg.londres]);
                        $scope.btn_click();
                    } 
                    else if(!$scope.revison_existencia(reg.estocolmo, reg.londres)) {
                        alert('LA PAREJA '+reg.estocolmo+' - '+reg.londres + ' Ya EXIXTE');
                    }
                }
                if (!$scope.validacion_londres(reg.londres)) {
                    alert('LONDRES No Cumple el parametro 2000 - 1999');
                }
            }if (!$scope.validacion_estocolmo(reg.estocolmo)) {
                alert('ESTOCOLMO No Cumple el parametro 1000 - 1999');
            }
        }

        $scope.btn_click = function() {
            var datos = $scope.datos;
            var vec_estocolmo = [];
            var vec_londres = [];
            for (var i = 0; i < datos.length; i++) {
                vec_estocolmo.push($scope.revision(datos[i][0], 0));
                vec_londres.push($scope.revision(datos[i][1], 1));
            }
            $scope.estocolmo = $scope.contador(vec_estocolmo);
            $scope.londres = $scope.contador(vec_londres);

        }

        $scope.revision = function(valor, posicion) {
            var datos = $scope.datos;
            var acu_datos = [];
            for (var i = 0; i < datos.length; i++) {
                if (valor == datos[i][posicion]) {
                    acu_datos.push(valor)
                }
            }
            return acu_datos;
        }

        $scope.unicos = function(arr) {
            var i, len = arr.length, out = [], obj = [];
            for (i = 0; i < len; i++) {
                obj[arr[i]] = 0;
            }
            for (i in obj) {
                out.push(i);
            }
            return out;
        };

        $scope.contador = function(valor) {
            var arr = $scope.unicos(valor);
            var acu = [];
            for (var i = 0; i < arr.length; i++) {
                var x = arr[i].split(",");
                if (x.length > 1) {
                    acu.push({
                        'acu': x.length,
                        'val': x[0]
                    });
                }
            }
            return acu;
        }




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