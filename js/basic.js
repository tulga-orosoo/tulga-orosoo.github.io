function max(num1, num2){
  if(num1 > num2){
      return num1;
  }else {
      return num2;
  }
}

function maxOfThree(num1, num2, num3){
  return Math.max(num1, num2, num3);
}


function isVowel(char){
  if(char.length === 1){
    switch(char) {
      case 'a':
      case 'A':
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'u':
      case 'U':
        return true;
      default: return false;
    }
  }

  return false;

}


function sum(arr){
return  arr.reduce(function(sum, a){
    return a + sum;});
}

function multiply(arr){
  return  arr.reduce(function(accumulator, a){
      return a * accumulator;});
}

function reverse(str){
  return str.split('').reverse().join('');
}

function  findLongestWord(arr) {
  let longest = arr[0];
  let longestWord = arr.filter(function(word,i) {
      if(word.length > longest.length){
          longest = word;
          if(i === arr.length-1)
           return longest;
      }

      });
  longestWord = longestWord+"";
 return longestWord.length;
}


function  filterLongWords(arr, i) {
  return arr.filter(a => a.length > i)
}

function multiplyBy10(arr) {

  return arr.map(function (elem) {
      return elem * 10;
  });
}


function product(arr){
  return arr.reduce(function(accumulator, currentValue){
      return currentValue * accumulator;});
}
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
  let result = function2test();

  if(Array.isArray(expected)){
      expected = expected.join('');
  }

  if(Array.isArray(result)){
      result = result.join('');
  }

  if (expected === result) {
      return "TEST SUCCEEDED";
  } else {
      return "TEST FAILED.  Expected " + expected + " found " + function2test();
  }
  ;
}

console.log("1.Expected output of max(12220, 12320) is 12320  " + myFunctionTest(12320, function () {
  return max(12220, 12320);
}));

console.log("========================================================================");


console.log("2.Expected output of maxOfThree(101,102, 103) is 103  " + myFunctionTest(103, function () {
  return maxOfThree(101,102, 103);
}));

console.log("========================================================================");


console.log("3.Expected output of isVowel('a') is true  " + myFunctionTest(true, function () {
  return isVowel('a');
}));

console.log("3.Expected output of isVowel('c') is false  " + myFunctionTest(false, function () {
  return isVowel('c');
}));


console.log("========================================================================");



console.log("4.Expected output of sum([11,12,13,14,15]) is 65  " + myFunctionTest(65, function () {
  return sum([11,12,13,14,15]);
}));

console.log("========================================================================");


console.log("5.Expected output of multiply([10,10,10,10,10]) is 100000  " + myFunctionTest(120, function () {
  return multiply([10,10,10,10,10]);
}));


console.log("========================================================================");


console.log("6.Expected output of reverse(\"oosoro aglut\") is \"tulga orosoo\"  " + myFunctionTest("tulga orosoo", function () {
  return reverse("oosoro aglut");
}));


console.log("========================================================================");


console.log("7.Expected output of findLongestWord(['long', 'looong', 'looongest']) is 9  " + myFunctionTest(9, function () {
  return findLongestWord(["long", "looong", "looongest"]) ;
}));


console.log("========================================================================");


console.log("8.Expected output of filterLongWords(['long', 'looong', 'looongest'], 4) is ['looong', 'looongest']  " + myFunctionTest(['looong', 'looongest'], function () {
  return filterLongWords(['long', 'looong', 'looongest'], 4) ;
}));

console.log("========================================================================");

console.log("Exercise 9");
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
console.log(b);
const c = a.filter(function(elem, i, array){
  return elem === 3;});
console.log(c);
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log(d);

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
console.log(d2);
console.log(d3);
