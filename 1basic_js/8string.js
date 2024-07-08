// Oldest used.
// const name="Rahul"

// const repo=50;

// console.log(name +" " + repo + " ");

// modern techniques used
// New used backtick. 

// console.log(`Hello my nae  is ${name} and my repocount is ${repo}`);

// string declare using two techniques 

// 1. const gameName = new String('Rahul')
// 2. const name="Rahul"

// const gameName = new String('Rahul');

// console.log(gameName[0]); // one character access;

// console.log(gameName.__proto__);
 // Access proto type  (Writing . and double underscore and proto and double undrscore (.__proto__))   output is :- object.

// console.log(gameName.length);

// console.log(gameName.toUpperCase()); //convert in capital letter. Not changes in original values.

// Check character by index position.

// console.log(gameName.charAt(3));

// check index no. by character.

// console.log(gameName.indexOf('h'));

// read about string method going to consol and open proto.

// const newString= gameName.substring(0,4) // string print from index number 2 to (4-1).
//(first value 0<=_)
// output:- hu

// console.log(newString);

// const anotherString= gameName.slice(-8,4);
// console.log(anotherString);


// trim() method in string are used removed left & right spaces
// const new1= " Rahul "
// console.log(new1);         // Rahul
// console.log(new1.trim());  //Rahul


//If user write space in url then browser are convert in %20(automatically). it Changes using the replace('%20', '-')method .

// const url="https://rahul.com/rahul%20shaw";

// console.log(url.replace('%20', '-'))

// Check string available or not using includes('write string').
// console.log(url.includes('rahul'));
// console.log(url.includes('ankit'));

//split() method are used for dividing string based on hypen,space etc.
const str1 = new String('Rahul-kumar-shaw');

console.log(str1.split('-'));
