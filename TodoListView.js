  // create collection view
  var TodoListView = Backbone.View.extend({

    initialize: function(){
      this.collection.on('add', this.addOne, this);
      this.collection.on('reset', this.addAll, this);
    },

    // underlyng model gets passed in 
    addOne: function (todoItem) {
      var todoView = new TodoView({ model: todoItem });
      this.$el.append(todoView.render().el);
    },

    addAll: function () {
      this.collection.forEach(this.addOne, this);
    },

    render: function () {
      this.addAll();
      return this;
    }
  });