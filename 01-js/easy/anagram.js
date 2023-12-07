/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const string = str1;
  const string1 = str2;
  
  const usingSplit = string.toLowerCase().replace(/\s/g, "").split("");
  const usingSplit1 = string1.toLowerCase().replace(/\s/g, "").split("");
  
  const newstring = usingSplit.sort();
  const newstring1 = usingSplit1.sort();
  
  if (string.length === string1.length) {
    for (let i = 0; i < string.length; i++) {
      if (newstring[i] !== newstring1[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
  
}

module.exports = isAnagram;
