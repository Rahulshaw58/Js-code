
// Stack :- 
//        stack memory are used to stored primitive data types.  stack given copy So, no changes in original data.

// Heap :-
    //   Heap memory are used to store non-primitive data types. if you change in reference then change in original values.

let name1="Rahul";

let name2= name1;
 name2="aayush"

// console.log(name1)
// console.log(name2)

// if you changes in name2 then change No Changes in name because it is primitive.
// Only changes in copy.


let user1={
    email: "rahul24@gmaind.com",
    upi: "2389@ybl"
}

let user2=user1

user2.emaail= "dipak3636@gos.com";

console.log(user1.email);
console.log(user2.email);

//console.log("hello");
// Non-Primitive data types in pass reference So, if you changes in user2 then automatically changes in user1. Because user2 point the user1 data.

  // THAT'S ALL THANK YOU.