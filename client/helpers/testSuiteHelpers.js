Template.testSuite.helpers({
  pageTitles: function(){
    return mergeSort(generateListPageTitles( Session.get( "venues" ) ));
  }
});
