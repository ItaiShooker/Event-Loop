/* First the console.log(4) is running in the outside scope,
    than the demo function called and printing 1, the await method put the rest
    in the microtask queue, and the out scope kepp running and print 5,
    than the event loop is going to the microtask queue and print 2,3.
*/

async function demo() {
console.log(1);
await Promise.resolve();
console.log(2);
await Promise.resolve();
console.log(3);
}
console.log(4);
demo();
console.log(5);

