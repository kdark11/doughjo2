//router.js
Router.configure({
  layoutTemplate: 'layout'
});
//Router.map(function(){
//  this.route('admin', {path: '/admin'});
//});
Router.map(function(){
  this.route('about', {path: '/about'});
});
Router.map(function(){
  this.route('main', {path: '/'});
});
