const bhojpuri =["pawan","kheshari","Nilkamal"]
const bollywod =["SunnyDeol","Ajay",]

bhojpuri.push(bollywod)
// console.log(bhojpuri);
// [ 'pawan', 'kheshari', 'Nilkamal', [ 'SunnyDeol', 'Ajay' ] ]

// console.log(bhojpuri[3][1]);
//Ajay

// bhojpuri.concat(bollywod);
// console.log(bhojpuri);
//[ 'pawan', 'kheshari', 'Nilkamal', [ 'SunnyDeol', 'Ajay' ] ]
// console.log(bhojpuri[3][1]);
// const allheros = bhojpuri.concat(bollywod);
// console.log(allHeros);
//[
//     'pawan',
//     'kheshari',
//     'Nilkamal',
//     [ 'SunnyDeol', 'Ajay' ],
//     'SunnyDeol',
//     'Ajay'
//   ]

const all_new_heros = [...bhojpuri, ...bollywod]

console.log(all_new_heros);

// [
//     'pawan',
//     'kheshari',
//     'Nilkamal',
//     [ 'SunnyDeol', 'Ajay' ],
//     'SunnyDeol',
//     'Ajay'
//   ]



