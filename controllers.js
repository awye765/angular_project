toDoApp.controller('ToDoController', function() {
  // The above grabs the ROOT module, ("toDoApp"), which is equal to
  // angular.module('toDoApp', []).  The CONTROLLER method is used ON
  // the ROOT module to ATTACH A CONTROLLER MODULE that takes two
  // parameters: (a) a string "toDoController" (to identify it) and
  // (b) a callback.
  var self = this;
  self.todos = [{ task: "ToDo1", completed: true}, { task: "ToDo2", completed: false }];
// The above is the controller's initial state.  The state is
// equal to the string "ToDo1"
  self.addToDo = function(todoText) {
    self.todos.push({ text: "Hello World!", completed: false });
  };

  self.removeToDo = function() {
    self.todos.pop();
  }
});
// The above takes a parameter, 'todoText' and uses that parameter to construct
// custom text.
//
// The controller is tracking STATE therefore it is known in Angular
// parlance as a VIEW MODEL
