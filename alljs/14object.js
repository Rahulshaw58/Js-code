// Singleton (important)
//object.create

// object literals

const mysym = Symbol("key1");

const JsUser ={
    name : "Rahul",
    "full name": "Rahul Kumar",
   [mysym]: "mykey1",//If you used as a type string then you used
    age: "20",
    location: "Bhopal",
    email: "rkshaw8877@gmail.com",
    isloggedIn: false,
    lastLoggedDay: ["Monday","Saturday"]
}

// console.log(JsUser.email);
//Output:- rkshaw8877@gmail.com

// console.log(JsUser["email"]);
//rkshaw8877@gmail.com

// console.log(JsUser["full name"]);//best practice.
//Output:- Rahul Kumar

//1.
// console.log(JsUser.mysym);
// Output:- mykey1
// console.log(typeof JsUser.mysym);
// string

//2.
// console.log(JsUser[mysym]);
// Output:-mykey1

// console.log(typeof JsUser[mysym]);
//string

// JsUser.email="rahul4523@google.com"
// Object.freeze(JsUser)
// JsUser.email ="rahul@mocrosoft.com"
//  console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello user");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`);
}
// console.log(JsUser.greeting);
//Output :- [Function (anonymous)]

console.log(JsUser.greeting());
//Hello Js user

//console.log(JsUser.greeting2());
//Hello Js user, Rahul
//undefined

