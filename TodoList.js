  /* TodoList manages set of TodoItem model instances */
  // create collection
  var TodoList = Backbone.Collection.extend({ 

    model: TodoItem,

    initialize: function () {
      this.on('remove', this.hideModel);
    },

    hideModel: function (model) {
      model.trigger('hide');
    }

  });