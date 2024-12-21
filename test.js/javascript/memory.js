// stack ( primitive) , heap (non primitive)

let myyoutubeName =" ayushsrivastava"
let anothername = myyoutubeName
anothername = " chai"
console.log(myyoutubeName);
console.log(anothername);

 let userOne = {
     email: "user@google.com",
     upi: "user@ybl"
    
 }
  let userTwo = userOne
   userTwo.emil = "ayush@gmil.com"

   console.log(userOne.email);
   console.log(userTwo.email);