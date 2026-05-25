/* The function start with level 1 and print 6,
    than the await call level 2, and the func print 4, than same to level 3
    and the func print 1. 
    In level 3 the constructor of the promise and it sync and print 2 and call resolve.
    the level 3 is finished so level 2 continue and print 5.
    Than it finished and level 1 continue and print 7.

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
await level2();
console.log(7);
}
level1();