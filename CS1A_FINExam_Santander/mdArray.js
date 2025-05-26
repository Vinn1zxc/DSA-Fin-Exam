let names = prompt("Enter 5 names (comma separated):").split(",");
let ages = prompt("Enter 5 ages (comma separated):").split(",").map(Number);

let result = [];

for (let i = 0; i < names.length; i++) {
  result.push([names[i], ages[i]]);
}

// Show the [name, age] format
result.forEach(pair => {
  console.log(pair);
});