Template.details.helpers({
  venue: function(){
    return Session.get( "venue" );
  },
  pageTitle: function(){
    return Session.get( "pageTitle" );
  },
  time: function(){
    return Session.get( "time" );
  }
});
