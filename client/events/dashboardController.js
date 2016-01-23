Template.dashboard.events({
  "click .button": function(event, template){
    var start = new Date().getTime();

    Session.set("pageTitle",pageTitleGenerator(Session.get("venues"),this));

    var end = new Date().getTime();
    var time = end - start;

    Session.set("time",time);

    Session.set("venue",this);
    Router.go('details');
  }
});
