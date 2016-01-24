Template.testSuite.helpers({
  pageTitles: function(){
    var start = new Date().getTime();
    result = mergeSort(generateListPageTitles( Session.get( "venues" ) ));
    var end = new Date().getTime();
    var time = end - start;

    if( Session.get( "venues" ) ){
      Session.set("time",time);
    }

    return result;
  },
  repeatedTitles: function(){
    titles = mergeSort(generateListPageTitles( Session.get( "venues" ) ));
    var dupTitles = [];
    var groupedByCount = _.countBy(titles, function (title) {return title;});

    for (var title in groupedByCount) {
      if (groupedByCount[title] > 1) {
        _.where(titles, title).map(function (item) {
            dupTitles.push(item);
        });
      }
    };
    return dupTitles;
  },
  time: function(){
    return Session.get( "time" );
  }
});
