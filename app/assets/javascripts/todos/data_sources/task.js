/*globals Todos */

Todos.TASKS_QUERY = SC.Query.remote(Todos.Task, {
  orderBy: 'isDone,title'
});
