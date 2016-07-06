toDoApp.controller('ToDoController', function() {
  var self = this;
  self.todos = [{ task: "ToDo1", completed: true}, { task: "ToDo2", completed: false }];
// The above is the controller's initial state.  The state is
// equal to the string "ToDo1"
  self.addToDo = function() {
    self.todos.push({ text: "Hello World!", completed: false });
  };
});
// The above grabs the ROOT module, ("toDoApp"), which is equal to
// angular.module('toDoApp', []).  The CONTROLLER method is used ON
// the ROOT module to ATTACH A CONTROLLER MODULE that takes two
// parameters: (a) a string "toDoController" (to identify it) and
// (b) a callback.
//
// The controller is tracking STATE therefore it is known in Angular
// parlance as a VIEW MODEL
