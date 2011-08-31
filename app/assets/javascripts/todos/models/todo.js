Todos.Todo = SC.Record.extend({
  primaryKey: "id",
  title:      SC.Record.attr(String),
  isDone:     SC.Record.attr(Boolean, { defaultValue: NO })
});
