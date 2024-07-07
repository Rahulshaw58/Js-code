// comparison 

// console.log(2>1);    //true
// console.log(2>=1);   // true
// console.log(2<1); //false
// console.log(2==1);  //false
// console.log(2!=1);  //ture

// console.log("2" >1);  //ture because automatic conversion in number.
// console.log("02" >1);  // ture

// console.log(null >0);  //false
// console.log(null == 0);  // false
// console.log(null >=0); //true

//The reasion is that an equalitycheck == and comparisons > < >= <= work differently.
// Comparison convert null to a number , treating it as 0.
// That's why(3) null>=0 is ture and (1) null>0 is false.

// console.log(undefined >= 0);  // false
// console.log(undefined == 0);  //false
// console.log(undefined < 0);  //false

// avoid this type of conversion.