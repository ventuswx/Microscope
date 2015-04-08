Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: funcion() { return Meteor.subscribe('posts'); }
});

Router.route('/',{name: 'postsList'});
