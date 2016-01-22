// Mobile Select Friends Menu Helpers
// ----------------------------------
Template.dashboard.helpers({
  venues: function(){
    if( Session.get( "venues" ).data ){
      return Session.get( "venues" ).data;
    }else{
      return null;
    }
  }
});
