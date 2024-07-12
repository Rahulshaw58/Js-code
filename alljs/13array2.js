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


const another_array = [1, 2, 3, [4,5, 6], 7, [6, 7, [4, 5]]];

const real= another_array.flat(Infinity);
console.log(real);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]
