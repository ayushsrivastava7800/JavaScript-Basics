// this key word
/*
const user = {
    username : "ayush",
    price: 999,
    welcomeMessage: function(){                                  // this keyword reffer current context
    console.log(`${this.username}, welcome to website`);

    }
}
user.welcomeMessage()

user.username = "sam"             // context changeasayush to sam bcz currnt context is sam
user.welcomeMessage()

console.log(this);
*/


//function chai()
//{
    // let username = "ayush"
   //  console.log(this.username)
//}
//chai()





// const chai = () => {
    //let username = "ayush"
   //  console.log(this.username)
//}
//chai()


//      () => {}    syntax of arrow function



/*
const addtwo  =  (num1, num2)   => {
    return num1 + num2
}
console.log(addtwo(2 ,5))

*/



//const addtwo  =  (num1, num2)   =>  num1 + num2
console.log(addtwo(2 ,5))




const addtwo  =  (num1, num2)   =>  (num1 + num2)
console.log(addtwo(2 ,5))




