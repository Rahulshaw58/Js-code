const bhojpuri =["pawan","kheshari","Nilkamal"]
const bollywod =["SunnyDeol","Ajay",]

// bhojpuri.push(bollywod)
// console.log(bhojpuri);
// [ 'pawan', 'kheshari', 'Nilkamal', [ 'SunnyDeol', 'Ajay' ] ]

// console.log(bhojpuri[3][1]);
//Ajay

// bhojpuri.concat(bollywod);
// console.log(bhojpuri);
//[ 'pawan', 'kheshari', 'Nilkamal', [ 'SunnyDeol', 'Ajay' ] ]
// console.log(bhojpuri[3][1]);

//Seprate array not show cost.
// bhojpuri.concat(bollywod);
// const allheros = bhojpuri.concat(bollywod);
// console.log(allheros);
//Output:-
//[ 'pawan', 'kheshari', 'Nilkamal', 'SunnyDeol', 'Ajay' ]

//*.spread 
const all_new_heros = [...bhojpuri, ...bollywod];
// console.log(all_new_heros);
//Output:-
//[ 'pawan', 'kheshari', 'Nilkamal', 'SunnyDeol', 'Ajay' ]


// const another_array = [1, 2, 3, [4,5, 6], 7, [6, 7, [4, 5]]];
// const real= another_array.flat(Infinity);
// console.log(real);
//Output:-
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

// check array or not .
// console.log(Array.isArray("Rahul"));
// Output:-false

// convert in array.
// console.log(Array.from("Rahul"));
//Output:- [ 'R', 'a', 'h', 'u', 'l' ]

// have to tell the what kind of to converting values, key etc. Otherwise output is output will be empty.
// console.log(Array.from({name: "Rahul"}));// Interesting.
// output:- [].

let s1=100;
let s2=200;
let s3=300;
// convert in array given variable.
console.log(Array.of(s1, s2,s3));
//Output :- [ 100, 200, 300 ]