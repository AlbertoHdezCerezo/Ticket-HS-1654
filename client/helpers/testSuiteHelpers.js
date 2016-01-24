Template.testSuite.helpers({
  pageTitles: function(){
    var start = new Date().getTime();
    result = generateListPageTitles( Session.get( "venues" ));
    var end = new Date().getTime();
    var time = end - start;

    result = _.sortBy(result, function(venue){ return venue });

    if( Session.get( "venues" ) ){
      Session.set("time",time);
    }

    return result;
  },
  repeatedTitles: function(){
    titles = _.sortBy(generateListPageTitles( Session.get( "venues" ) ), function(venue){ return venue });
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
