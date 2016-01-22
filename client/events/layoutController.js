// Switch language controller
// --------------------------
Template.layout.events({
  "change input": function(event, template){
     var file = event.currentTarget.files[0];

     Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        data = results;
      }
    });
  }
});
