//router.js
Router.configure({
  layoutTemplate: 'layout'
});
//Router.map(function(){
//  this.route('admin', {path: '/admin'});
//});
Router.map(function(){
  this.route('main', {path: '/'});
});
Router.map(function(){
  this.route('home', {path: '/home'});
});
Router.map(function(){
  this.route('about', {path: '/about'});
});
