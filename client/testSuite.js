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
    uniquePageTitles = _.uniq(pageTitles);
    return pageTitles.length === uniquePageTitles.length;
  }
