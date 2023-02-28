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

//TEST

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

//mySome Test
console.log('\n|mySome Test|');
const { mySome } = require('./javascript-methods.js');

//TEST

//Test for 1 parameter
console.log('\nTest 1:');
console.log(test_array.some(x => x < 3));
console.log(test_array.some(x => x > 3));
console.log(test_array.mySome(x => x < 3));
console.log(test_array.some(x => x > 3));

//Test for 2 parameters
console.log('\nTest 2:');
console.log(test_array.some( (x, i) => x + i == 5));
console.log(test_array.some( (x, i) => x + i != 5));
console.log(test_array.mySome( (x, i) => x + i == 5));
console.log(test_array.mySome( (x, i) => x + i != 5));

//Test for 3 parameters
console.log('\nTest 3:');
console.log(test_array.some( (x, i, myArray) => myArray[i] * x == 25));
console.log(test_array.some( (x, i, myArray) => myArray[i] * x != 25));
console.log(test_array.mySome( (x, i, myArray) => myArray[i] * x == 25));
console.log(test_array.mySome( (x, i, myArray) => myArray[i] * x != 25));

//myEvery Test
console.log('\n|myEvery Test|');
const { myEvery } = require('./javascript-methods.js');

//TEST

//Test for 1 parameter
console.log('\nTest 1:');
console.log(test_array.every(x => x < 2));
console.log(test_array.every(x => x > 2));
console.log(test_array.myEvery(x => x < 2));
console.log(test_array.myEvery(x => x > 2));

//Test for 2 parameters
console.log('\nTest 2:');
console.log(test_array.every( (x, i) => x + i == 5));
console.log(test_array.every( (x, i) => x + i != 5));
console.log(test_array.myEvery( (x, i) => x + i == 5));
console.log(test_array.myEvery( (x, i) => x + i != 5));

//Test for 3 parameters
console.log('\nTest 3:');
console.log(test_array.every( (x, i, myArray) => myArray[i] * x == 25));
console.log(test_array.every( (x, i, myArray) => myArray[i] * x != 25));
console.log(test_array.myEvery( (x, i, myArray) => myArray[i] * x == 25));
console.log(test_array.myEvery( (x, i, myArray) => myArray[i] * x != 25));

//myReduce Test
console.log('\n|myReduce Test|');
const { myReduce } = require('./javascript-methods.js');

//TEST

//Test for 2 parameter
console.log('\nTest 1:');
console.log(test_array.reduce((accumulator, currentValue) => accumulator + currentValue));
console.log(test_array.myReduce((accumulator, currentValue) => accumulator + currentValue));

//Test for 3 parameters
console.log('\nTest 2:');
console.log(test_array.reduce((accumulator, currentValue, index) => accumulator + currentValue + index));
console.log(test_array.myReduce((accumulator, currentValue, index) => accumulator + currentValue + index));

//Test for 4 parameters
console.log('\nTest 3:');
console.log(test_array.reduce((accumulator, currentValue, index, array) => accumulator + currentValue + array[index]));
console.log(test_array.myReduce((accumulator, currentValue, index, array) => accumulator + currentValue + array[index]));