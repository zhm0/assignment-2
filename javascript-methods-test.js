//myMap Test
console.log('|myMap Test|');
const { myMap } = require('./javascript-methods.js');

let test_array = [4, 5, , 7, 3, 9];
test_array.food = "pizza";

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

//myIncludes Test
console.log('\n|myIncludes Test|');
const { myIncludes } = require('./javascript-methods.js');

//TEST

//Test for 1 parameter
console.log('\nTest 1:');
console.log(test_array.includes(3));            //true
console.log(test_array.myIncludes(3));          //true
console.log(test_array.includes(2));            //false
console.log(test_array.myIncludes(2));          //false
console.log(test_array.includes(undefined));    //true
console.log(test_array.myIncludes(undefined));  //true
console.log([0].includes(-0));                  //true
console.log([0].myIncludes(-0));                //true
console.log([NaN].includes(NaN));               //true
console.log([NaN].myIncludes(NaN));             //true

//myIndexOf Test
console.log('\n|myIndexOf Test|');
const { myIndexOf } = require('./javascript-methods.js');

//TEST

//Test for 1 parameter
console.log('\nTest 1:');
console.log(test_array.indexOf(3));        
console.log(test_array.myIndexOf(3));         
console.log(test_array.indexOf(2));    
console.log(test_array.myIndexOf(2));
console.log(test_array.indexOf(undefined));
console.log(test_array.myIndexOf(undefined));
console.log([0].indexOf(-0));
console.log([0].myIndexOf(-0));
console.log([NaN].indexOf(NaN));
console.log([NaN].myIndexOf(NaN));

//myLastIndexOf Test
console.log('\n|myLastIndexOf Test|');
const { myLastIndexOf } = require('./javascript-methods.js');

//TEST

//Test for 1 parameter
console.log('\nTest 1:');
console.log(test_array.lastIndexOf(3));        
console.log(test_array.myLastIndexOf(3));         
console.log(test_array.lastIndexOf(2));    
console.log(test_array.myLastIndexOf(2));
console.log(test_array.lastIndexOf(undefined));
console.log(test_array.myLastIndexOf(undefined));
console.log([0].lastIndexOf(-0));
console.log([0].myLastIndexOf(-0));
console.log([NaN].lastIndexOf(NaN));
console.log([NaN].myLastIndexOf(NaN));
console.log([2,3,3,5,3].lastIndexOf(3));
console.log([2,3,3,5,3].myLastIndexOf(3));

//myKeys Test
console.log('\n|myKeys Test|');
const { myKeys } = require('./javascript-methods.js');

const myObj = Object.create(
    {},
    {
      getFoo: {
        value() {
          return this.foo;
        },
      },
    },
  );
  myObj.foo = "bar";

const anObj = { 100: "a", 2: "b", 7: "c" };

//TEST

//Test for 1 parameter
console.log('\nTest 1:');
console.log(Object.keys(test_array));
console.log(Object.myKeys(test_array));

console.log(Object.keys(anObj));
console.log(Object.myKeys(anObj));

console.log(Object.keys(myObj));
console.log(Object.myKeys(myObj));

//myValues Test
console.log('\n|myValues Test|');
const { myValues } = require('./javascript-methods.js');

//TEST

//Test for 1 parameter
console.log('\nTest 1:');
console.log(Object.values(test_array));
console.log(Object.myValues(test_array));

console.log(Object.values(anObj));
console.log(Object.myValues(anObj));

console.log(Object.values(myObj));
console.log(Object.myValues(myObj));