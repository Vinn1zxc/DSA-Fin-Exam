let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

function reverseString(str) {
  return str.split("").reverse().join("");
}

let reversed1 = reverseString(word1);
let reversed2 = reverseString(word2);

console.log("Original:", word1, "| Reversed:", reversed1);
console.log("Original:", word2, "| Reversed:", reversed2);

// Check if the word is the same when reversed
console.log(word1 === reversed1);
console.log(word2 === reversed2);