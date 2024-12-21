/*****************************imediately invoke function experession (iife) **********************************/

(function chai() {
    console.log(`db connected`);
} )();


( ()=> {
    console.log(`db connected`);
} )();


( (name)=> {
    console.log(`db connected`);
} )('ayush');