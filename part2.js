// The console.log(1) is going into the macrotak queue
setTimeout(() => console.log(1), 0);
Promise.resolve().then(() => {
// The console.log(2) is going into the microtak queue
console.log(2);
// The console.log(3) is going into the macrotak queue
setTimeout(() => console.log(3), 0);
Promise.resolve().then(() => {
// The console.log(4) is going into the microtak queue
console.log(4);
});
});
// The process start to execute from the microtask by the coming in order,
// than to the macrotask by order of the entrance.