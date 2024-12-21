/**********************************objects******************************************************* */

//object literal

//const mySum = Symbol("key1")    

/*

const JsUser = {
    name : "ayush",
    age: 22,
    loaction: "rebareli",
    [mySum]: "myKey1",
}

console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser[mySum])

 const mySum = Symbol("key1")   ///     take symbol actas key and print //
   [mySum]: "myKey1",
   console.log(JsUser[mySum])


JsUser.loaction = "raebareli"
Object.freeze(JsUser)
jsUser.loaction = "lucknow"
console.log(JsUser);




JsUser.greating = function(){
    console.log('hello');
}

JsUser.greatingtwo = function(){
    console.log('hello 2, ${this.name}');
}

console.log(JsUser.greating());
console.log(JsUser.greatingtwo());


*/

/************************************************part2 objects*********************************************** */

//  singleton

//const tinderUser = new Object()
const tinderUser = {}

const tinderUserID = "123abc"
tinderUser.name = "ayush"
tinderUser.isloggedin = false

//console.log(tinderUser);

const regularUser = {
    email: "ayu@12.com",
    fullname: {
        userfullname:{
            firstname: "ayush",
            lastname: "srivastava"
        }
    }
}
//console.log(regularUser.fullname)

const Object1 = {1: "a", 2: "b"}
const Object2 = {3: " c", 4:"d"}

const Object3 = Object.assign(Object1, Object2)
//console.log(Object3)

User[1].emailconsole.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLogged'));


/***************************objewct DSTRUCTURING********************* */

const course = {
    coursename: "j in hindi",
    price: "999",
    courseInstructor:"ayush"
}

const {courseInstructor: Instructor} = course
console.log(courseInstructor);

/**********************************api***********************************************************************/


//valuefrom backend haveto write

/*   /// its json
{
    "name":  "ayush",
    "course":"js",
    "price": "free"

}

{
    {},
    {},
    {},
}

*/

