// in js everything are objects 
// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects
// creating object method 1
// js objects are mutable,i.e they are addressed by reference not value .

let obj1={};

obj1.name="chiz1";
obj1.SURNAME="chiz2";
obj1.EMAIL="chiz3";
console.table(obj1);

// -------------------------------------------------------------------------------------------------------------------------------------
// creating object method 2(using new keyword)

let obj2 = new Object();

obj2.name= "username";
obj2.email="xyz@gmail.com";
obj2.password="hahahahaha";

console.table(obj2);

// ---------------------------------------------------------------------------------------------------------------------------------------
// we can nest as many object as we want..

let obj3= {
    1:"one",
    2:"two",
    obj4: {
        4:"four",
        5:" five"
    },
    6:"six"
}

console.table(obj3);


// ---------------------------------------------------------------------------------------------------------------------------------------------------

 // object methods 

let obj4 = {
    name:"james",
    surname:"hetfield",
    fullName: function(){
        console.log(this.name+" "+ this.surname) ;
    },

};
console.table(obj4);

// ---------------------------------------------------------------------------------------------------------------------------------------------------
