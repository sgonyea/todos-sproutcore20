Todos.Todo = SC.Record.extend({
  title: SC.Record.attr(String),
  isDone: SC.Record.attr(Boolean, { defaultValue: NO })
});

Todos.Todo.FIXTURES = [
  { "guid": "todo-1",
    "title": "Build my first SproutCore app",
    "isDone": false },
  { "guid": "todo-2",
    "title": "Build a really awesome SproutCore app",
    "isDone": false },
  { "guid": "todo-3",
    "title": "Next, the world!",
    "isDone": false }
];
