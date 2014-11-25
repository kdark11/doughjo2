//router.js
Router.configure({
  layoutTemplate: 'layout'
});
//Router.map(function(){
//  this.route('admin', {path: '/admin'});
//});
Router.route('/', function (){
  this.render('main');
});
Router.route('/home', function(){
  this.render('home');
});
Router.route('/about', function(){
  this.render('about');
});
Router.route('/news', function(){
  this.render('news');
});



