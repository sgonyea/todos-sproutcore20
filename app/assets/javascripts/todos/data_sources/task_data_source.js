// ==========================================================================
// Project:   Todos.TaskDataSource
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
Todos.TaskDataSource = SC.DataSource.extend(
/** @scope Todos.TaskDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  //
  fetch: function(store, query) {
    self = this;

    $.ajax({
      type: 'GET',
      url:  '/todos.json',
      dataType: 'json',
      success: function(data, textStatus) {
        self.didFetchTasks(data, textStatus, store, query);
      }
    });

    return YES;
  },

  didFetchTasks: function(data, textStatus, store, query) {
    console.log(data);

    if (textStatus == "success") {
      var storeKeys = store.loadRecords(Todos.Todo, data);

      if(query.location == "remote") {
        store.loadQueryResults(query, storeKeys);
      }
    } else {
      store.dataSourceDidErrorQuery(query, data);
    }
  },

  // ..........................................................
  // RECORD SUPPORT
  //
  retrieveRecord: function(store, storeKey) {
    if (SC.kindOf(store.recordTypeFor(storeKey), Todos.Todo)) {

      todo  = store.readDataHash(storeKey);
      url   = '/todos/' + todo.id + '.json';

      $.ajax({
        type: 'GET',
        url:  url,
        dataType: 'json',
        success: function(data, textStatus) {
          self.didRetrieveTask(data, textStatus, store, storeKey);
        }
      })

      return YES;
    } else
      return NO;
  },

  didRetrieveTask: function(data, textStatus, store, storeKey) {
    if (textStatus == "success") {
      store.dataSourceDidComplete(storeKey, data);

    } else store.dataSourceDidError(storeKey, response);
  },

  createRecord: function(store, storeKey) {
    if(store.recordTypeFor(storeKey) === Todos.Todo) {
      self = this;

      $.ajax({
        type: 'POST',
        url:  '/todos.json',
        data: JSON.stringify({todo: store.readDataHash(storeKey)}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data, textStatus) {
          self.didCreateTodo(data, textStatus, store, storeKey, '/todos.json');
        }
      })

      return YES;

    } else return NO;
  },

  didCreateTodo: function(data, textStatus, store, storeKey, url) {
    if (textStatus == "success") {
      store.dataSourceDidComplete(storeKey, null, url); // update url

    } else store.dataSourceDidError(storeKey, response);
  },

  updateRecord: function(store, storeKey) {
    if(store.recordTypeFor(storeKey) === Todos.Todo) {
      self = this;

      todo  = store.readDataHash(storeKey);
      url   = '/todos/' + todo.id + '.json';

      $.ajax({
        type: 'PUT',
        url:  url,
        data: JSON.stringify({todo: todo}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data, textStatus) {
          self.didUpdateTask(data, textStatus, store, storeKey);
        }
      })

      return YES;
    } else return NO;
  },

  didUpdateTask: function(data, textStatus, store, storeKey) {
    if (textStatus == "success") {
      store.dataSourceDidComplete(storeKey, data);
    } else store.dataSourceDidError(storeKey);
  },

  destroyRecord: function(store, storeKey) {
    if(store.recordTypeFor(storeKey) === Todos.Todo) {
      self = this;

      url = '/todos/' + store.idFor(storeKey) + '.json';

      $.ajax({
        type: 'DELETE',
        url:  url,
        contentType: 'application/json',
        dataType: 'json',
        success: function(data, textStatus) {
          self.didDestroyTask(data, textStatus, store, storeKey);
        }
      })

      return YES;
    } else return NO;
  },

  didDestroyTask: function(data, textStatus, store, storeKey) {
    if (textStatus == "success") {
      store.dataSourceDidDestroy(storeKey);
    } else store.dataSourceDidError(response);
  }

}) ;
