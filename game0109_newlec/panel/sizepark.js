const arr1 = [1, 4, 9, 16];

const arr2 = arr1.map(function(x) {
    console.log("Doubling for " + x);
    return x * 2;
});
console.log(arr2);

const arr3 = arr1.map(x =>x %5);

console.log(`return : ${arr3}`)