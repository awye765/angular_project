var toDoApp = angular.module('toDoApp', []);
// angular.module is a global place for CREATING, REGISTERING and
// RETRIEVING Angular modules.  All modules that should be available
// to an application must be registered using this mechanism.
//
// The syntax for defining a module is "angular.module("root", [])".
// The first argument, the string defines the name of the module,
// which in this case is ROOT.  The second argument, the empty
// array is used for DEPENDENCY INJECTION.  If you forget the empty
// array Angular will try to retrieve an existing module rather
// than instantiating a new one and an error will be thrown.
