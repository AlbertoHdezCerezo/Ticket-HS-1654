Template.testSuite.helpers({
  pageTitles: function(){
    return mergeSort(generateListPageTitles( Session.get( "venues" ) ));
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
  }
});
