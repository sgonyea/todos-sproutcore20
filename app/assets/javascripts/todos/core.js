// ==========================================================================
// Project:   Todos
// Copyright: @2011 Me, Myself, and My Company, Inc.
// ==========================================================================
//= require_tree ./applications
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views

$(document).ready(function () {
  var todos = Todos.store.find(Todos.Todo);
  Todos.todosController.set('content', todos);
});
