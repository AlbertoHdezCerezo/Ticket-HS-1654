/* Constant for Title Construction*/
const TITLEAT = " at ";
const TITLEBRAND = " - Hire Space";

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
