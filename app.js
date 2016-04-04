var app = angular.module("todoApp", []);

app.controller("todoController", function($scope) {
  $scope.newTodo = true;
  $scope.currentDo = false;
  $scope.done = false;
  $scope.todos = [
  {
    text: "Wash the car",
    done: false
  },
  {
    text: "Pet the cat",
    done: false
  }
  ];
  $scope.showTodo = function() {
    $scope.newTodo = true;
    $scope.currentDo = false;
    $scope.done = false;
  }
  $scope.showCurrentDo = function() {
    $scope.newTodo = false;
    $scope.currentDo = true;
    $scope.done = false;
  }
  $scope.showDone = function() {
    $scope.newTodo = false;
    $scope.currentDo = false;
    $scope.done = true;
  }
  $scope.addTodo = function(todo) {
    $scope.todo.done = false;
    $scope.todos.push(todo);
    $scope.todo = {};
  }
  $scope.completeTask = function(task) {
    task.done = true;
    console.log(task);
  }
})