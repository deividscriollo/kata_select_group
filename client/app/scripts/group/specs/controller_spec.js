'use strict';

describe('Controller: select group', function () {

  beforeEach(module('Group'));

  var controller;
  var scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('group', { $scope: scope });
  }));

  describe('On instance', function () {
    it('should set "controller_loaded" variable in scope', function () {
      expect(scope.controller_loaded).toContain('loaded');
    });
    // -----------------------------add my code-----------------------------
    // --------------------------nueva generacion --------------------------
    it('should', function () {
      // var x = scope.suma(6, 1);
      // expect(x).toBe(7);

      // x = scope.suma(6, 3);
      // expect(x).toBe(9);

      //  x = scope.suma(null, 3);
      // expect(x).toBe(3);


      //  x = scope.suma(9, null);
      // expect(x).toBe(9);

      //  x = scope.suma(null, null);
      // expect(x).toBe(0);

      // // vprueba multiplicacion
      //     // prueba 1
      // var y = scope.multiplicacion(2, 2);
      //     expect(y).toBe(4);
      //     // prueba 2
      //     y = scope.multiplicacion(2, 4);
      //     expect(y).toBe(8);
    });
  });

  describe('On instance', function () {
    // proceso validacion
    iit('should be equal to fffgfg', function () {
      // var datos = [
      //   ['1009','2011'],
      //   ['1097','2011']
      // ];
      // prueba existencia
      // var res = scope.validacion(datos);
      //     expect(res).toBe(true);

      //     res = scope.validacion([]);
      //     expect(res).toBe(false);
      //     // prueba comparacion dato1 1000 - 1999
      //     res = scope.datos([]);
      //     expect(res).toBe(false);

      //     res = scope.datos(datos);
      //     expect(res).toBe(true);

      //     // funcionario
      //     res = scope.proceso_estocolmo(datos);
      //     expect(res).toBe(true);

      //     res = scope.proceso_estocolmo([]);
      //     expect(res).toBe(false);

          // res = scope.proceso('');
          // expect(res).toBe(false);

          // res = scope.estocolmo('1000');
          // expect(res).toBe(true);

          // res = scope.estocolmo('200');
          // expect(res).toBe(false);

          // res = scope.proceso1(datos);
          // expect(res).toBe(true);
          // res = scope.proceso1(datos);
          // expect(res).toBe(false);

          // res = scope.londres('2990');
          // expect(res).toBe(true);

          // res = scope.londres('20001');
          // expect(res).toBe(false);


    });
  });

  describe('when going to /group', function () {

    var route, location, rootScope, httpBackend;

    beforeEach(inject(function ($route, $location, $rootScope, $httpBackend) {
      route = $route;
      location = $location;
      rootScope = $rootScope;
      httpBackend = $httpBackend;

      httpBackend.when('GET', 'scripts/group/views/group.html').respond('<div></div>');
    }));

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should use minesweeper.html and controller', function () {
      expect(route.current).toBeUndefined();

      location.path('/group');

      httpBackend.flush();

      expect(route.current.templateUrl).toBe('scripts/group/views/group.html');
      expect(route.current.controller).toBe('group');
    });
  });

});
