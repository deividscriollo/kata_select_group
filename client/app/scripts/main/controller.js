'use strict';

angular.module('App')
    .controller('Main', function($scope) {

        $scope.controller_loaded = 'Main controller loaded!';
        $scope.datos = [
            ['1009', '2000'],
            ['1009', '2001'],
            ['1002', '2002'],
            ['1003', '2002'],
            ['1004', '2003'],
            ['1004', '2004'],
            ['1004', '2005']
        ];
        // $scope.datos = 	['0','1','0', '1'];
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
                    $scope.datos.push([reg.estocolmo, reg.londres]);
                    $scope.btn_click();
                }
                if (!$scope.validacion_londres(reg.londres)) {
                    alert('LONDRES No Cumple el parametro 2000 - 1999')
                }
            }if (!$scope.validacion_estocolmo(reg.estocolmo)) {
                alert('ESTOCOLMO No Cumple el parametro 1000 - 1999')
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

        $scope.unique = function(arr) {
            var i, len = arr.length,
                out = [],
                obj = [];
            for (i = 0; i < len; i++) {
                obj[arr[i]] = 0;
            }
            for (i in obj) {
                out.push(i);
            }
            return out;
        };

        $scope.contador = function(valor) {
            var arr = $scope.unique(valor);
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

    });