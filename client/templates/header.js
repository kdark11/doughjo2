// first, we define a default state
// client/templates/header.js 
Session.setDefault('active_page', 'home');

// then we need to add some event triggers
// client/views/app.navbars.js 
Template.navbarHeader.events({
  'click #homePageButton': function(){
    Session.set('active_page', 'main');
  },
  'click #aboutPageButton': function(){
    Session.set('active_page', 'about');
  }
});