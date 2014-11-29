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
Router.route('/classes', function(){
  this.render('classes');
});
Router.route('/parties', function(){
  this.render('parties');
});
Router.route('/store', function(){
  this.render('store');
});



