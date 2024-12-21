//*******************************loops called as itteration ***********************************************/


// for loop 

/*

for (let index = 0; index <=10; index++) {
    const element = index;
    if (element == 5){
     console.log( "5 is best no.")
    }
    console.log(element);
    
}

*/
/*                  table writefrom loop                      

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value: ${i}`);
for (let j = 0; j < 10; j++) {
   // console.log(`innewr loop value ${j} and inner loop ${i}`);
    

   console.log( i + "*" + j + "=" + i*j);

}
}
*/



/*
let myArray = ["flash","batman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    
    const element = myArray[index];
    console.log(element);
    
}
*/






//                                   key words 


//break and continue
/*
for (let index = 0; index < 20; index++) {
    if(index ==5){
        console.log(`detected 5`)
        break;
    }


    console.log(`value of i is ${index}`);
    
}



for (let index = 0; index < 20; index++) {
    if(index ==5){
        console.log(`detected 5`)
        continue;
    }


    console.log(`value of i is ${index}`);
    
}


*/


//******************************************while and do-while *****************************************************
/*
let index = 0
while (index < 10) {
    console.log(`value of inde is & {index}`);
  index = index+ 2
    
}


let myArray = ["flash", "batman", "ironman"]

let arr  = 0
while (arr < myArray.lenght){
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
} 

*/


//             do while */
  

/*
let score = 1
do {
    console.log(`score is ${score}`);
    score ++
    
} while (score <= 10);



*/



// speial loop for array 


// for of loop , for in loop etc



// maps 
  
/*

 const map = new Map()
 map.set('in',"india")
 map.set('usa', "unitesstate")

 console.log(map);



 // for of loop in maps 

 for ( const [key,value] of map){

 console.log(key);
 }




 const myObject = {
    js: "javascript",
    cpp: " c++"
 }

 for( const key in myObject){
    console.log(`${key} shortcutis for ${myObject[key]}`);
 }

*/


 //  FOR EACH LOOP
 // FOR IN LOOP ETC
 /*

 const coding = ["js", "c++", "ruby"]

const values = coding.forEach( (item) =>  {

    console.log(item);
    return item


} )
console.log(values);

*/

// *******************************************filter *********************************************************
/*
const mynums = [1, 2, 3, 4, 5,]

const newnums = mynums.filter( (num) => num > 4 )
console.log(newnums)

*/


// *******************************************map**************************************************************
/*
const mynums = [1, 2, 3, 4, 5,]

const newnums = mynums.map( (num) => num + 11)

console.log(newnums)

*/


// *********************************************chainng************************************

/*
const mynums = [1, 2, 3, 4, 5,]

const newnums = mynums
.map ((num) => num *10)
.map ((num) => num + 2)
.filter((num) => num >= 40)
console.log(newnums)


*/



//************************************reduce***************************************** */

/*

const shoppingcart = [
    {
        itemname: "pay course",
        price: " 999"
    },
    {
        itemname: "mobile",
        price: "777"
    },
    {
        itemname: "java",
        price: "666"
    },
]

const pricetopay = shoppingcart.reduce((acc,item) => acc + item.
price , 0 )
console.log(pricetopay);

*/