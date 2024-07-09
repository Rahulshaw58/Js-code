//Array 

// const arr =[0,1,2,3,4,5,true, ];
// console.log(arr[5]);

//java array-copy operation creates shallow copies (All standard built-in copy operation with any javascript objects create shallow copies rather than deep copies.)
// Learn shallow copy & deep copy.

//https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy



//Array declaration techniques.
const arr1 =[0, 1, 2, 3, 4, 5];
const arr2 =["Rahul", "Ankit","Manish"];

const arr3 =new Array(1,2,3,4,5);
// console.log(arr1[2]);

//ARRAY METHODS.

// // arr1.push(6);  //Add in array
// arr1.push(7);  //Add in array
// arr1.push(8);// Add in array
// console.log(arr1);
// arr1.pop(6);   //remove from array
// arr1.pop(8);   //

// arr1.unshift(9); // Add element in array on the first index
// console.log(arr1); //remove from array
// arr1.shift(); //delete element  in array on the first index
// console.log(arr1);

// CHECK ELEMNT & INDEX AVAILABLE OR NOT.
// console.log(arr1.includes(5)); //true
// console.log(arr1.includes(8)); //false

// console.log(arr1.indexOf(4));
// console.log(arr1.indexOf(7)); //-1

const arr4= arr1.join() // type convert in string 

// console.log(arr1); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(arr4); //output :-0,1,2,3,4,5
// console.log(typeof arr4); //String

//slice, splice

console.log("A", arr1);

const ar1 =arr1.slice(1,3);
//PRINT ELEMENT FROM .SLICE(M,N-1).

console.log(ar1); //[1,2]
console.log("B", arr1);
//OUTPUT:- B [ 0, 1, 2, 3, 4, 5 ]

const ar2=arr1.splice(1,3);
console.log("C", arr1); //C [ 0, 4, 5 ]
//splice() & slice() method in two differnce if you used slice method than print print slice(m,n-1) and not affect in original element.
//If you used splice() method than 
//print m to n. and affect in original values. 
console.log(ar2);



//Method in array
// ƒ at()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ Array()
// copyWithin
// : 
// ƒ copyWithin()
// entries
// : 
// ƒ entries()
// every
// : 
// ƒ every()
// fill
// : 
// ƒ fill()
// filter
// : 
// ƒ filter()
// find
// : 
// ƒ find()
// findIndex
// : 
// ƒ findIndex()
// findLast
// : 
// ƒ findLast()
// findLastIndex
// : 
// ƒ findLastIndex()
// flat
// : 
// ƒ flat()
// flatMap
// : 
// ƒ flatMap()
// forEach
// : 
// ƒ forEach()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// join
// : 
// ƒ join()
// keys
// : 
// ƒ keys()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// map
// : 
// ƒ map()
// pop
// : 
// ƒ pop()
// push
// : 
// ƒ push()
// reduce
// : 
// ƒ reduce()
// reduceRight
// : 
// ƒ reduceRight()
// reverse
// : 
// ƒ reverse()
// shift
// : 
// ƒ shift()
// slice
// : 
// ƒ slice()
// some
// : 
// ƒ some()
// sort
// : 
// ƒ sort()
// splice
// : 
// ƒ splice()
// toLocaleString
// : 
// ƒ toLocaleString()
// toReversed
// : 
// ƒ toReversed()
// toSorted
// : 
// ƒ toSorted()
// toSpliced
// : 
// ƒ toSpliced()
// toString
// : 
// ƒ toString()
// unshift
// : 
// ƒ unshift()
// values
// : 
// ƒ values()
// with
// : 
// ƒ with()
// Symbol(Symbol.iterator)
// : 
// ƒ values()
// Symbol(Symbol.unscopables)
// : 
// {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
// [[Prototype]]
// : 
// Object
// constructor
// : 
// ƒ Object()
// hasOwnProperty
// : 
// ƒ hasOwnProperty()
// isPrototypeOf
// : 
// ƒ isPrototypeOf()
// propertyIsEnumerable
// : 
// ƒ propertyIsEnumerable()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// __defineGetter__
// : 
// ƒ __defineGetter__()
// __defineSetter__
// : 
// ƒ __defineSetter__()
// __lookupGetter__
// : 
// ƒ __lookupGetter__()
// __lookupSetter__
// : 
// ƒ __lookupSetter__()
// __proto__
// : 
// (...)
// get __proto__
// : 
// ƒ __proto__()
// set __proto__
// : 
// ƒ __proto__()
// ﻿



