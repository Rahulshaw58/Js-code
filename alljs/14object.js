// Singleton (important)
//object.create

// object literals

const mysym = Symbol("key1");

const JsUser ={
    name : "Rahul",
    "full name": "Rahul Kumar",
    mysym: "mykey1",
    age: "20",
    location: "Bhopal",
    email: "rkshaw8877@gmail.com",
    isloggedIn: false,
    lastLoggedDay: ["Monday","Saturday"]
}

console.log(JsUser.email);
//Output:- rkshaw8877@gmail.com

console.log(JsUser["email"]);
//rkshaw8877@gmail.com

console.log(JsUser["full name"]);
//Output:- Rahul Kumar

console.log(JsUser.mysym);
// Output:- mykey1
