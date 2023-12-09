/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // const str1= str.toLowerCase().replace(/\s/g, "").replace(/[^\w\s]|_/g,'');
   str=str.replace(/\s/g,'').replace(/[^\w\s]|_/g,'').toLowerCase();
  let length = str.length;
  length=length-1;
  let k=0;
  while(length>k){
    if(str[length]!=str[k]){
      return false;
    }
    length--;
    k++;
  }
 
   return true;
}

module.exports = isPalindrome;
