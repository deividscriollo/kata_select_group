'use strict';

describe('Controller: Main', function () {

  beforeEach(module('App'));

  var controller;
  var scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('Main', { $scope: scope });
  }));

  describe('On instance', function(){
    it('should set "controller_loaded" variable in scope', function() {
      expect(scope.controller_loaded).toContain('loaded');
      var x = scope.validacion_estocolmo('2');  
              expect(x).toBe(true);
    });      
  });
});

