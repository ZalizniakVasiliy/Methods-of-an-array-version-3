/* --------------------------- function indexOf()----------------------------- */

const arr = [2, -3, 5, 8, 6, 8, 17, 5, 15, 13, 9, 7, 18];
function indexOf(searchElem, fromIndex = 0, array) {
  if (fromIndex >= array.length) {
    return -1;
  } else if (fromIndex >= 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (searchElem === array[i]) {
        return i;
      }
    }
  } else if (fromIndex < 0) {
    for (let i = array.length + fromIndex; i < array.length; i++) {
      if (searchElem === array[i]) {
        return i;
      }
    }
  }
  return -1;
}
console.log(indexOf(-3, null, arr)); //1
console.log(indexOf(5, -100, arr)); //2
console.log(indexOf(5, 100, arr)); //-1
console.log(indexOf(5, 2, arr)); //2
console.log(indexOf(5, 3, arr)); //7
console.log(indexOf(5, 7, arr)); //7
console.log(indexOf(5, 8, arr)); //-1
console.log(indexOf(5, 13, arr)); //-1
console.log(indexOf(5, -6, arr)); //7
console.log(indexOf(5, -10, arr)); //7
console.log(indexOf(5, -11, arr)); //2
console.log(indexOf(5, -13, arr)); //2
console.log(indexOf(5, -14, arr)); //2

console.log(`------------------------------------------------`); //

console.log(arr.indexOf(-3, null)); //1
console.log(arr.indexOf(5, -100)); //2
console.log(arr.indexOf(5, 100)); //-1
console.log(arr.indexOf(5, 2)); //2
console.log(arr.indexOf(5, 3)); //7
console.log(arr.indexOf(5, 7)); //7
console.log(arr.indexOf(5, 8)); //-1
console.log(arr.indexOf(5, 13)); //-1
console.log(arr.indexOf(5, -6)); //7
console.log(arr.indexOf(5, -10)); //7
console.log(arr.indexOf(5, -11)); //2
console.log(arr.indexOf(5, -13)); //2
console.log(arr.indexOf(5, -14)); //2

/* ----------------------- function lastIndexOf() ---------------------------- */

const arr = [2, 13, 7, 18, 5, 8, 6, 8, 6, 5, 9, 13, 9, 7, 18];
function lastIndexOf(searchElem, fromIndex = null, array) {
  fromIndex === null ? (fromIndex = array.length - 1) : null;
  if (fromIndex >= 0) {
    for (let i = fromIndex; i >= 0; i--) {
      if (searchElem === array[i]) {
        return i;
      }
    }
    return -1;
  } else if (fromIndex < 0) {
    for (let i = array.length + fromIndex; i >= 0; i--) {
      if (searchElem === array[i]) {
        return i;
      }
    }
    return -1;
  }
}
console.log(lastIndexOf(8, 4, arr)); //-1
console.log(arr.lastIndexOf(8, 4)); //-1
console.log(lastIndexOf(8, 5, arr)); //5
console.log(arr.lastIndexOf(8, 5)); //5
console.log(lastIndexOf(8, 6, arr)); //5
console.log(arr.lastIndexOf(8, 6)); //5
console.log(lastIndexOf(8, 7, arr)); //7
console.log(arr.lastIndexOf(8, 7)); //7
console.log(lastIndexOf(8, -8, arr)); //7
console.log(arr.lastIndexOf(8, -8)); //7
console.log(lastIndexOf(8, -11, arr)); //-1
console.log(arr.lastIndexOf(8, -11)); //-1

/* ------------------------- function find() ------------------------------ */

const arr = [2, -5, 38, 43, -3, 5, -43, 7, -5];
function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
/* function findElem(item, index, array) {
  return item > 2 && item < 43;
}
console.log(find(arr, findElem)); */
console.log(find(arr, (item) => item > 2 && item < 43));

/* ------------------------- function findIndex() ------------------------------ */

const arr = [2, -5, 38, 43, -3, 5, -43, 7, -5];
function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
/* function findIndexElem(item, index, array) {
  return item > 2 && item < 43;
}
console.log(findIndex(arr, findIndexElem)); */
console.log(findIndex(arr, (item) => item > 2 && item < 43));

/* ------------------------- function includes() ------------------------------ */

const arr = [2, -3, 5, 8, NaN, 6, 5, -3, 13];
function includes(searchElem, fromIndex = null, array) {
  fromIndex === null ? (fromIndex = 0) : null;
  if (fromIndex >= array.length) {
    return false;
  } else if (fromIndex >= 0 && fromIndex < array.length) {
    for (let i = fromIndex; i < array.length; i++) {
      if (
        searchElem === array[i] ||
        (Number.isNaN(array[i]) && Number.isNaN(searchElem))
      ) {
        return true;
      }
    }
    return false;
  } else if (fromIndex < 0) {
    for (let i = array.length + fromIndex; i < array.length; i++) {
      if (
        searchElem === array[i] ||
        (Number.isNaN(array[i]) && Number.isNaN(searchElem))
      ) {
        return true;
      }
    }
    return false;
  }
}
console.log(includes(2, 1, arr)); //false
console.log(includes(2, 0, arr)); //true
console.log(includes(2, null, arr)); //true
console.log(includes(NaN, null, arr)); //true
console.log(arr.includes(NaN)); // true
console.log(includes(NaN, 5, arr)); //false
console.log(arr.includes(NaN, 5)); //false
console.log(includes(NaN, 4, arr)); // true
console.log(arr.includes(NaN, 4)); // true
console.log(includes(NaN, -4, arr)); //false
console.log(arr.includes(NaN, -4)); //false
console.log(includes(NaN, -5, arr)); // true
console.log(arr.includes(NaN, -5)); // true
console.log(includes(NaN, -100, arr)); // true
console.log(includes(-3, -100, arr)); // true
console.log(includes(-3, 10, arr)); //false
console.log(includes(2, -9, arr)); // true
console.log(includes(-3, -2, arr)); // true
console.log(includes(-3, -1, arr)); //false
console.log(includes(-3, 0, arr)); // true
console.log(includes(-3, 7, arr)); // true
console.log(includes(-3, 8, arr)); //false

/* ------------------------- function every() -------------------------------- */

const arr = [6, 2, 5, 7, 2];
function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}
/* function isLessThan8(item, index, array) {
  return item < 8;
}
console.log(every(arr, isLessThan8)); */
console.log(every(arr, (item) => item < 8));

/* ------------------------ function some() -------------------------------- */

const arr = [2, 43, 2, 2];
function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
/* function isOdd(item, index, array) {
  return item % 2 !== 0;
}
console.log(some(arr, isOdd)); */
console.log(some(arr, (item) => item % 2 !== 0));
