  /* Create ToDo Item Model (to hold data) */
  // create class
  var TodoItem = Backbone.Model.extend({
    defaults: {
      description: 'Empty todo...',
      status: 'incomplete'
    },

    toggleStatus: function () {
      if(this.get('status') === 'incomplete'){
        this.set({'status': 'complete'});
        }else{
        this.set({'status': 'incomplete'});
      }

      //this.save();
    }
  }); 