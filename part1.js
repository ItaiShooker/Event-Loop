// Synchronyc code
console.log(1);
//Callback Queue
setTimeout(() => {
  console.log(2);
}, 0);
// Microtask Queue
Promise.resolve().then(() => {
  console.log(3);
});
// Synchronyc code
console.log(4);

// The order is: synchronic than microtask than callback