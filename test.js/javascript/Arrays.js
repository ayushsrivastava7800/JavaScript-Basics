/****************************************************Arrays********************************************************** */

//const myArray= [1, 2, 3, 4, 5]
//console.log(myArray[0]);
//console.log(myArray);

//const myHeros = ["spiderman", "ironman"]
 //console.log(myHeros)

 //const myArray2 = new Array(1,2,3,4, 5, 6, 7)
 //console.log(myArray2)

 // *************************************************array method********************************************* 
  /*myArray.push(5)
  myArray.push(7)
  myArray.pop()
   
  myArray.unshift(9)
  myArray.shift()

 console.log(myArray.include(9));
 console.log(myArray.indexof(4));
  console.log(myArray)
*/

// slice , splice
 /*console.log("A", myArray);
 const myn1 = myArray.slice(1,3)

 //console.log(myn1);
 console.log("B", myArray)

 const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log("c", myArray)
*/


  //const  marvel_heros = ["ironman" , " apiderman"]
  //const dc_heros = ["flash", "batman"]
   
  //marvel_heros.push(dc_heros)
  //console.log(marvel_heros)
  
  //marvel_heros.concat(dc_heros)
   //console.log(marvel_heros)



//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros)

//const all_heros = [...dc_heros,...marvel_heros]
//console.log(all_heros)

// concat and ... work to mergearray but famouse is ...

const another_array = [1, 2, 3, 4, [9, 8,[6, 8]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)




console.log(Array.from("ayush"));
//console.log(Array.from({name: "ayush"}))   //  interesting  //  creating array from keys // for interview


let score1 = 100
let score2 = 200
let score3 = 300 

//console.log(Aarry.of(score1, score2, score3));
