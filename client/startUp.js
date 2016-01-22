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

  // Page Transition initializer
  Transitions.transitionOut = 'slideLeftOut';
  Transitions.transitionIn = 'slideLeftIn';

  // Current venues in system
  Session.set( "venues", null );

});
