// Code runned when client is executed:
// ====================================
Meteor.startup(function () {

  // Notification initializer
  sAlert.config({
      effect: '',
      position: 'bottom',
      timeout: 500000,
      html: false,
      onRouteClose: true,
      stack: true,
      offset: 0
  });

  // Current venues in system
  Session.set( "venues", null );
  Session.set( "venue", null );
  Session.set( "pageTitle", null );
  Session.set( "time", null );
});
