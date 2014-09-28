EditIndexController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'}
  },  
  
  postQuery: function() {
    return {_id: this.params.id};
  },
  
  imageQuery: function() {
    return {};
  },
  
  waitOn: function () {
      return [Meteor.subscribe('post_index_by_id', this.params.id), Meteor.subscribe('images_index')];
  },

  post: function() {
    return Posts.findOne(this.postQuery());
  },
  
  images: function() {
    return Images.find(this.imageQuery());
  },
  
  data: function () {
    return {
      post : this.post(),
      images : this.images()
    };
  },

  action: function () {
    this.render();
  },
  
  onRun: function() {
   Session.set('editSaveStatus', true);
  },
  
  onStop :function() {
    console.log('onStop');
  }
});
