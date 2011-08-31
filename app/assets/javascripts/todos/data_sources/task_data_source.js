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
    $.ajax({
      type:     'GET',
      url:      '/todos.json',
      dataType: 'json',
      success: function(data, textStatus) {
        var storeKeys = store.loadRecords(Todos.Todo, data);

        if(query.location == "remote") {
          store.loadQueryResults(query, storeKeys);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        store.dataSourceDidErrorQuery(query, data);
      }
    });

    return YES;
  },

  // ..........................................................
  // RECORD SUPPORT
  //
  createRecord: function(store, storeKey) {
    if(store.recordTypeFor(storeKey) === Todos.Todo) {
      $.ajax({
        type: 'POST',
        url:  '/todos.json',
        data: JSON.stringify({todo: store.readDataHash(storeKey)}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data, textStatus) {
          store.dataSourceDidComplete(storeKey, data, url);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          store.dataSourceDidError(storeKey);
        }
      })

      return YES;
    } else return NO;
  },

  retrieveRecord: function(store, storeKey) {
    if(store.recordTypeFor(storeKey) === Todos.Todo) {

      todo  = store.readDataHash(storeKey);
      url   = '/todos/' + todo.id + '.json';

      $.ajax({
        type: 'GET',
        url:  url,
        dataType: 'json',
        success: function(data, textStatus) {
          store.dataSourceDidComplete(storeKey, data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          store.dataSourceDidError(storeKey);
        }
      })

      return YES;
    } else return NO;
  },

  updateRecord: function(store, storeKey) {
    if(store.recordTypeFor(storeKey) === Todos.Todo) {
      todo  = store.readDataHash(storeKey);
      url   = '/todos/' + todo.id + '.json';

      $.ajax({
        type: 'PUT',
        url:  url,
        data: JSON.stringify({todo: todo}),
        contentType: 'application/json',
        success: function(data, textStatus) {
          store.dataSourceDidComplete(storeKey, data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          store.dataSourceDidError(storeKey);
        }
      })

      return YES;
    } else return NO;
  },

  destroyRecord: function(store, storeKey) {
    if(store.recordTypeFor(storeKey) === Todos.Todo) {
      url = '/todos/' + store.idFor(storeKey) + '.json';

      $.ajax({
        type: 'DELETE',
        url:  url,
        success: function(data, textStatus) {
          store.dataSourceDidDestroy(storeKey);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          store.dataSourceDidError(storeKey);
        }
      })

      return YES;
    } else return NO;
  },
});
