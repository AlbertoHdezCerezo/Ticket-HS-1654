Template.layout.helpers({
  inTestSuite: function(){
    return Router.current().route.path() === "/testSuite";
  }
});
