// Switch language controller
// --------------------------
Template.layout.events({
  "change input": function(event, template){
     var file = event.currentTarget.files[0];

     Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        sAlert.success('File successfully loaded!', {effect: 'flip', timeout: 3000, onRouteClose: false});
        Session.set( "venues", mergeSort(results.data) );
      },
      error: function() {
        sAlert.error('Errors detected when parsing CSV File', {effect: 'flip', timeout: 3000, onRouteClose: false});
      }
    });
  }
});
