/* Methods for Algorithm Debug - Results */
/* ===================================== */

/**
 * Filter objects by properties
 * @param {Array} The array to generate page titles
 * @return {Array} Array of Page Titles
 */
 generateListPageTitles = function(venues) {
   pageTitles = [];
   _.each(venues, function(venue) {
     pageTitles.push( pageTitleGenerator(venues,venue) );
   })
   return pageTitles;
 }

 /**
  * Check that no page titles are repeated
  * @param {Array} The array of page titles
  * @return {Boolean} Are there repeated page titles?
  */
  isRepeated = function(pageTitles) {
    titles = mergeSort(generateListPageTitles( Session.get( "venues" ) ));
    var dupTitles = [];
    var groupedByCount = _.countBy(titles, function (title) {return title;});

    repeated = false;
    for (var name in groupedByCount) {
      if (groupedByCount[name] > 1) {
        repeated = true;
      }
    };
    return repeated;
  }
