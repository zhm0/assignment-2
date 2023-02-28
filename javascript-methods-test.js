//myMap Test
console.log('|myMap Test|');
const { myMap } = require('./javascript-methods.js');

let test_array = [4, 5, , 7, 3, 9];
//TEST
//Tests should print out two copies of the same thing

//Test for 1 parameter
console.log('\nTest 1:');
console.log(test_array.map(x => x * 3));
console.log(test_array);
console.log(test_array.myMap(x => x * 3));
console.log(test_array);

//Test for 2 parameters
console.log('\nTest 2:');
console.log(test_array.map( (x, i) => x + i));
console.log(test_array);
console.log(test_array.myMap( (x, i) => x + i));
console.log(test_array);

//Test for 3 parameters
console.log('\nTest 3:');
console.log(test_array.map( (x, i, myArray) => myArray[i] * x));
console.log(test_array);
console.log(test_array.myMap( (x, i, myArray) => myArray[i] * x));
console.log(test_array);

//myFilter Test
console.log('\n|myFilter Test|');
const { myFilter } = require('./javascript-methods.js');

//Test for 1 parameter
console.log('\nTest 1:');
console.log(test_array.filter(x => x > 5));
console.log(test_array);
console.log(test_array.myFilter(x => x > 5));
console.log(test_array);

//Test for 2 parameters
console.log('\nTest 2:');
console.log(test_array.filter( (x, i) => x + i > 5));
console.log(test_array);
console.log(test_array.myFilter( (x, i) => x + i > 5));
console.log(test_array);

//Test for 3 parameters
console.log('\nTest 3:');
console.log(test_array.filter( (x, i, myArray) => myArray[i] * x > 25));
console.log(test_array); 
console.log(test_array.myFilter( (x, i, myArray) => myArray[i] * x > 25));
console.log(test_array);