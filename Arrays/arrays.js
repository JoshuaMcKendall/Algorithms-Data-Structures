// Simple array data structure in javascript

// Array literal
var array = []

// Populating array with numbers 1 to 100
var nums = [];
for (var i = 0; i < 100; i++) {
  nums[i] = i + 1;
}

// Splitting a string to an array
var sentence = "The quick brown fox jumped over the dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; i++) {
  console.log("word " + i + ": " + words[i]);
}

//Shallow copy of an array
var arr1 = [];
for (var i = 0; i < 100; i++) {
  array[i] = i + 1;
}
var arr2 = arr1;

//Deep copy of an array
function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
}

var arr1 = [];
for (var i = 0; i < 100; i++) {
  array[i] = i + 1;
}
var arr2 = [];

copy(arr1, arr2);
