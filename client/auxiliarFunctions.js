const TITLEBRAND = " - Hire Space";
const TITLEAT = " at ";

/**
 * Merges to arrays in order based on their natural
 * relationship.
 * @param {Array} left The first array to merge.
 * @param {Array} right The second array to merge.
 * @return {Array} The merged array.
 */
merge = function(left, right){
  var result  = [],
      il      = 0,
      ir      = 0;

  while (il < left.length && ir < right.length){
      leftWord = (left[il].VenueName + left[il].SpaceName + left[il].UsageName).replace(/\s/g, '').toUpperCase();
      rightWord = (right[ir].VenueName + right[ir].SpaceName + right[ir].UsageName).replace(/\s/g, '').toUpperCase();

      if (leftWord.localeCompare(rightWord) < 1){
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

/**
 * Sorts an array in ascending natural order using
 * merge sort.
 * @param {Array} items The array to sort.
 * @return {Array} The sorted array.
 */
mergeSort = function(items){
  if (items.length < 2) {
      return items;
  }

  var middle = Math.floor(items.length / 2),
      left    = items.slice(0, middle),
      right   = items.slice(middle),
      params = merge(mergeSort(left), mergeSort(right));

  // Add the arguments to replace everything between 0 and last item in the array
  params.unshift(0, items.length);
  items.splice.apply(items, params);
  return items;
}

/**
 * Filter objects by properties
 * @param {Array} The array to filter
 * @param {Properties} Properties considered for filtering
 * @return {Array} Filtered elements
 */
 findByMatchingProperties = function(array, properties) {
   return array.filter(function (entry) {
     return Object.keys(properties).every(function (key) {
         return entry[key] === properties[key];
     });
   });
 }

/**
 * Truncate String
 */
 String.prototype.trunc =
  function( n, useWordBoundary ){
    var isTooLong = this.length > n,s_ = isTooLong ? this.substr(0,n-1) : this;
    s_ = (useWordBoundary && isTooLong) ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
    return  isTooLong ? s_ + '&hellip;' : s_;
  };

/**
 * Generates Page Title for venue
 * @param {Array} The array for searching.
 * @param {Venue} Venue whose title has to be generated.
 * @return {String} Page Title.
 */
pageTitleGenerator = function(venues,venue){
  spaceVenues = findByMatchingProperties(venues, { VenueName: venue.VenueName , SpaceName: venue.SpaceName });
  if( spaceVenues.length < 2 ){
    switch(true){
      case ( (venue.SpaceName + TITLEAT + venue.VenueName + TITLEBRAND).length < 56 ):
        return venue.SpaceName + TITLEAT + venue.VenueName + TITLEBRAND;
        break;
      case ( (venue.UsageName + TITLEAT + venue.VenueName + TITLEBRAND).length < 56 ):
        return venue.UsageName + TITLEAT + venue.VenueName + TITLEBRAND;
        break;
      case ( (venue.SpaceName + TITLEAT + venue.VenueName).length < 56 ):
        return venue.SpaceName + TITLEAT + venue.VenueName;
        break;
      case ( (venue.UsageName + TITLEAT + venue.VenueName).length < 56 ):
        return venue.UsageName + TITLEAT + venue.VenueName;
        break;
      default:
        return venue.SpaceName.trunc(26) + TITLEAT + venue.VenueName.trunc(25);
    }
  }else{
    spaceItem = _.find(spaceVenues, function(space){ return ( (venue.SpaceName + TITLEAT + venue.VenueName + TITLEBRAND).length < 56 || ( (venue.UsageName + TITLEAT + venue.VenueName + TITLEBRAND).length > 56 && (venue.SpaceName + TITLEAT + venue.VenueName).length < 56 ) ); });
    if( spaceItem && JSON.stringify(spaceItem[0]) === JSON.stringify(venue)  ){
      switch(true){
        case ( (venue.SpaceName + TITLEAT + venue.VenueName + TITLEBRAND).length < 56 ):
          return venue.SpaceName + TITLEAT + venue.VenueName + TITLEBRAND;
          break;
        case ( (venue.SpaceName + TITLEAT + venue.VenueName).length < 56 ):
          return venue.SpaceName + TITLEAT + venue.VenueName;
          break;
        default:
          return venue.SpaceName.trunc(26) + TITLEAT + venue.VenueName.trunc(25);
      }
    }else{
      switch(true){
        case ( (venue.UsageName + TITLEAT + venue.VenueName + TITLEBRAND).length < 56 ):
          return venue.UsageName + TITLEAT + venue.VenueName + TITLEBRAND;
          break;
        case ( (venue.UsageName + TITLEAT + venue.VenueName).length < 56 ):
          return venue.UsageName + TITLEAT + venue.VenueName;
          break;
        default:
          return venue.UsageName.trunc(26) + TITLEAT + venue.VenueName.trunc(25);
      }
    }
  }
}
