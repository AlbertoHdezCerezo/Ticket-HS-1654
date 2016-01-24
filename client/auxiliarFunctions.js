/* Constant for Title Construction*/
const TITLEAT = " at ";
const TITLEBRAND = " - Hire Space";

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
      if( typeof left[il] === 'string' ){
        leftWord = left[il];
        rightWord = right[ir];
      }else{
        leftWord = (left[il].VenueName + left[il].SpaceName + left[il].UsageName).replace(/\s/g, '').toUpperCase();
        rightWord = (right[ir].VenueName + right[ir].SpaceName + right[ir].UsageName).replace(/\s/g, '').toUpperCase();
      }

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
 * Shorten string to desired length
 * @param {String} string to short.
 * @return {String} The shorted string.
 */
String.prototype.trunc =
function( n, useWordBoundary ){
   var isTooLong = this.length > n,
       s_ = isTooLong ? this.substr(0,n-1) : this;
   s_ = (useWordBoundary && isTooLong) ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
   return  isTooLong ? s_ + '.' : s_;
};

/* ALGORITHM */
/* ========= */

/**
 * Shorten string to desired length
 * @param {Array} set of venues.
 * @param {Venue} venue whose page title has to be generated.
 * @return {String} page title.
 */
 pageTitleGenerator = function( venues,venue ){
   spaceVenues = _.filter(venues, function(auxVenue){
     return ( auxVenue.VenueName === venue.VenueName ) && ( auxVenue.SpaceName === venue.SpaceName );
   });
   usageVenues = _.filter(venues, function(auxVenue){
     return ( auxVenue.VenueName === venue.VenueName ) && ( auxVenue.UsageName === venue.UsageName );
   });

   /* Use Space for Page Title */
   if( spaceVenues.length < 2 ){
     switch (true) {
       case (venue.SpaceName + TITLEAT + venue.VenueName + TITLEBRAND).length < 56:
         return (venue.SpaceName + TITLEAT + venue.VenueName + TITLEBRAND);
         break;
       case (venue.UsageName + TITLEAT + venue.VenueName + TITLEBRAND).length < 56 && !usageVenues:
         return (venue.UsageName + TITLEAT + venue.VenueName + TITLEBRAND);
         break;
       case (venue.SpaceName + TITLEAT + venue.VenueName).length < 56:
         return (venue.SpaceName + TITLEAT + venue.VenueName);
         break;
       case (venue.UsageName + TITLEAT + venue.VenueName).length < 56  && !usageVenues:
         return (venue.UsageName + TITLEAT + venue.VenueName);
         break;
       default:
         return (venue.SpaceName + TITLEAT + venue.VenueName).trunc(55,true);
     }
   /* Use Usage for Page Title */
   }else{
     switch (true) {
       case (venue.UsageName + TITLEAT + venue.VenueName + TITLEBRAND).length < 56:
         return (venue.UsageName + TITLEAT + venue.VenueName + TITLEBRAND);
         break;
       case (venue.UsageName + TITLEAT + venue.VenueName).length < 56:
         return (venue.UsageName + TITLEAT + venue.VenueName);
         break;
       default:
         return (venue.UsageName + TITLEAT + venue.VenueName).trunc(55,true);
     }
   }
 }
