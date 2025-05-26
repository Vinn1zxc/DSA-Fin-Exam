let stack = [];

function peek() {
  if (stack.length === 0) {
    console.log("Stack is empty.");
  } else {
    console.log("Top Item:", stack[stack.length - 1]);
  }
}

function pushItem(item) {
  stack.push(item);
  peek();
  console.log("Stack Now:", stack);
}

function popItem() {
  if (stack.length > 0) {
    stack.pop();
    peek();
    console.log("Updated Stack:", stack);
  } else {
    console.log("Nothing to pop.");
  }
}

for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  pushItem(item);
}

// Example pop
popItem();