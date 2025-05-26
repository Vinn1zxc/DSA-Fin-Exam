let numbers = prompt("Enter numbers separated by commas:").split(",").map(Number);
let names = prompt("Enter names separated by commas:").split(",");

let merged = [...numbers.map(String), ...names];
console.log("Merged Array:", merged);

// Sort numbers from biggest to smallest
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Sorted Numbers (Descending):", sortedNumbers);

// Sort names A to Z
let sortedNames = [...names].sort();
console.log("Sorted Names (Alphabetical):", sortedNames);