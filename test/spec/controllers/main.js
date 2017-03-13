'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularyeomanApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('no debe tener items al empezar', function () {
    expect(scope.todos.length).toBe(0);
  });
  it('Añadir items a la lista', function () {
    scope.tarea= 'Test 1';
    scope.addTarea();
    expect(scope.tareas.length).toBe(1);
  });
  it('debe añadir y luego eliminar items de la lista', function () {
    scope.tarea= 'Test 1';
    scope.addTarea();
    scope.eliminarTarea(0);
    expect(scope.tareas.length).toBe(0);
  });
});
