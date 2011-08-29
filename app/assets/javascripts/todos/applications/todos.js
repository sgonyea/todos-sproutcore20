/*globals Todos */
Todos = SC.Application.create({
  store: SC.Store.create().from(SC.Record.fixtures)
});
