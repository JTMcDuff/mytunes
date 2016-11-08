// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // listens for the dequeue event and removes the song when it is dequeued
    this.on('dequeue', function() {
      this.remove(this.at(0));
    }),
    // listens for the add event for the collection
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }),
    // lists for the ended event for the collection
    this.on('ended', function() {
      this.at(0).dequeue();
      if(this.length >= 1) {
        this.playFirst();
      }
    })

  }, //<-- end initialize

  playFirst: function () {
    this.at(0).play();
  }

});
