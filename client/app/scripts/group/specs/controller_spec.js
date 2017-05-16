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
  });

  describe('On validaciones', function () {

    // proceso validacion
    iit('should -- validacion estocolmo', function () {
      var x = scope.validacion_estocolmo();
              expect(x).toBe(false);

      var x = scope.validacion_estocolmo(null);
              expect(x).toBe(false);

      var x = scope.validacion_estocolmo(1100);
              expect(x).toBe(true);

      var x = scope.validacion_estocolmo(2000);
              expect(x).toBe(false);

      var x = scope.validacion_estocolmo('2000');
      expect(x).toBe(false);

    });

    it('should -- validacion londres', function () {

      var x = scope.validacion_londres(null);
              expect(x).toBe(false);

      var x = scope.validacion_londres(1111);
              expect(x).toBe(false);

      var x = scope.validacion_londres(2222);
              expect(x).toBe(true);
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
