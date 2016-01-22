// Mobile Select Friends Menu Helpers
// ----------------------------------
Template.dashboard.helpers({
  venues: function(){
    if( Session.get( "venues" ) ){
      return Session.get( "venues" );
    }else{
      return null;
    }
  }
});
