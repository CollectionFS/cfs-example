Router.configure({
  notFoundTemplate: 'not_found',
  loadingTemplate: 'loading',
  layoutTemplate: 'layout'
});

Router.onBeforeAction('loading');

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('images');
  this.route('files');
  this.route('autoformExample', {path: 'autoform'})
});

if (Meteor.isClient) {

  // Scroll to top or requested hash after loading each page
  Router.onAfterAction(function() {
    Meteor.setTimeout(function () {
      var hash = $(window.location.hash);
      var scrollTo = hash.length ? hash.offset().top : 0;
      $("html, body").animate({ scrollTop: scrollTo }, 700, "easeInOutQuart");
    }, 0);
  });

  // Route-related helpers
  Template.registerHelper("absoluteUrl", function(path) {
    return Meteor.absoluteUrl(path);
  });

  Template.registerHelper("currentRouteIs", function(name) {
    var current = Router.current();
    return current && current.route && current.route.name === name || false;
  });

  Template.registerHelper("activeRoute", function(name) {
    var current = Router.current();
    return current && current.route && current.route.name === name && "active" || "";
  });

}