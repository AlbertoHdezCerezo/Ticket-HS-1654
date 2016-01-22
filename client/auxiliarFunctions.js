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
