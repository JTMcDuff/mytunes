// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    var view = this;
    console.log(view);
    view.collection.on('add remove', function() {
      view.render();
    })
  },

  render: function() {

    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  } // end of render


});
