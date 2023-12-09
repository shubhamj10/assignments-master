/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const A = str.toLowerCase().replace(/\s/g, "").split("");
  // const newstring = usingSplit.sort();
  // console.log(A);
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (
      A[i] === "a" ||
      A[i] === "e" ||
      A[i] === "i" ||
      A[i] === "o" ||
      A[i] === "u"
    ) {
      count = count + 1;
    }
  }
  return count;
}

module.exports = countVowels;