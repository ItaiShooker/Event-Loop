/*
The only difference is that no await to level2 in level1.
it means that the rest of level1 is in the stack and not in the microtask,
so it execute the print 7 before 3,5 that in the microtask`
*/

async function level3() {
console.log(1);
await new Promise((resolve,reject) => {
console.log(2)
resolve()
});
console.log(3);
}
async function level2() {
console.log(4);
await level3();
console.log(5);
}
async function level1() {
console.log(6);
level2();
console.log(7);
}
level1();