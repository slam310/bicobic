var PostsIndexSubs = new SubsManager({cacheLimit: 9999, expireIn: 9999});

PostsIndexController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'},
    'Footer': {to: 'Footer'}
  },  
  
  findQuery: function() {
    //return {sort: {isPublished: -1, createdAt : -1}};
    return {sort: {createdAt : -1}};
  },
  
  waitOn: function () {
      return [PostsIndexSubs.subscribe('posts_index', this.findQuery())];
  },

  posts: function() {
    return Posts.find({}, this.findQuery());
  },
  
  data: function () {
    return {
      posts : this.posts()
    };
  },

  action: function () {
    this.render();
  },
  
  onAfterAction: function () {
    // always start by resetting scroll to top of the page
    $(window).scrollTop(0);
  }
});
