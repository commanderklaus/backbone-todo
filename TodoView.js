  /* Create ToDo Item View (to display each ToDo item) */
  // create class
  var TodoView = Backbone.View.extend({

    events: {
      'change input': 'toggleStatus'
    },

    tagName: 'article',
    id: 'todo-view',
    className: 'todo',

    template: _.template('<h3 class="<%= status %>">' + 
      '<input type="checkbox" ' +
      '<% if(status === "complete") print("checked") %>/>' +
      '<%= description %></h3>'),

    toggleStatus: function (e) {
      this.model.toggleStatus();
    },

    // called when the view is first created
    initialize: function () {
      // re-render the view if the model changes
      this.model.on('change', this.render, this);

      // remove view on model destroy
      this.model.on('destroy', this.remove, this);

      this.model.on('hide', this.remove, this);
    },


    remove: function () {
      this.$el.remove();
    },

    // Override this function with your code that renders 
    // the view template from model data, and updates this.el with the new HTML
    render: function () {
      var attributes = this.model.toJSON();
      this.$el.html(this.template(attributes));
      return this; // to allow chaining
    }

  }); 