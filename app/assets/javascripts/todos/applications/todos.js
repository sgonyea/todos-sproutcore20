/*globals Todos */
Todos = SC.Application.create({
  store: SC.Store.create({
      commitRecordsAutomatically: YES
  }).from('Todos.TaskDataSource')
});
