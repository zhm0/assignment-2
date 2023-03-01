/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  let newArray = [];
  const maxLength = this.length;
  
  for (let i = 0; i < maxLength; ++i)
  {
    if (this[i] !== undefined)
    {
      newArray[i] = callbackFn(this[i], i, this);
    }
  }

  return newArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let newArray = [];
  let newArrayIndex = 0;
  const maxLength = this.length;

  for (let i = 0; i < maxLength; ++i)
  {
    if (this[i] !== undefined && callbackFn(this[i], i, this))
    {
      newArray[newArrayIndex] = this[i];
      ++newArrayIndex;
    }
  }

  return newArray;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  const maxLength = this.length;
  for (let i = 0; i < maxLength; ++i)
  {
    if (this[i] !== undefined && callbackFn(this[i], i, this))
    {
      return true;
    }
  }

  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  const maxLength = this.length;
  for (let i = 0; i < maxLength; ++i)
  {
    if (this[i] !== undefined && !callbackFn(this[i], i, this))
    {
      return false;
    }
  }

  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  let currentValue = undefined;
  let index = 0;
  const maxLength = this.length;

  while (index < maxLength)
  {
    if (this[index] !== undefined)
    {
      currentValue = this[index];
      ++index;
      break;
    }
    ++index;
  }

  if (currentValue === undefined)
  {
    throw TypeError("Reduce of empty array with no initial value");
  }

  while (index < maxLength)
  {
    if (this[index] !== undefined)
    {
      currentValue = callbackFn(currentValue, this[index], index, this);
    }

    ++index;
  }

  return currentValue;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for (let i = 0; i < this.length; ++i)
  { 
    if (searchElement === this[i])
    {
      return true;
    }
    if (isNaN(this[i]) && isNaN(searchElement))
    {
      return true;
    }
  }

  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  if (isNaN(searchElement))
  {
    return -1;
  }
  for (let i = 0; i < this.length; ++i)
  {
    if (this[i] !== undefined && searchElement === this[i])
    {
      return i;
    }
  }

  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  if (isNaN(searchElement))
  {
    return -1;
  }
  for (let i = this.length; i > -1; --i)
  {
    if (this[i] !== undefined && searchElement === this[i])
    {
      return i;
    }
  }

  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  keyArray = [];
  keyArrayIndex = 0;

  for (const i in object)
  {
    keyArray[keyArrayIndex] = i;

    if (keyArrayIndex === object.length - 1)
    {
      return keyArray;
    }
    ++keyArrayIndex;
  }

  return keyArray;
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};