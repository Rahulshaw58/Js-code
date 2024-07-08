const score =400;
// console.log(score);

const balance = new Number(100)
// console.log(balance);

//Convert in string using toString() method 
//Check lenght of number using toString().length method.
// console.log(balance.toString().length);

//Precision values control
// console.log(balance.toFixed(2));
 
// precision roundup value using toPrecision(Total digit of number) method.
// 
const num1=4577.69842;

// console.log(num1.toPrecision(4)); // output:- 4578

// large number aarangement by default in us.

const num= 1000000;
console.log(num.toLocaleString());
// output:- 1,000,000

// Large number aarange in Indian.
const num2= 1000000;
console.log(num.toLocaleString('en-IN'));

