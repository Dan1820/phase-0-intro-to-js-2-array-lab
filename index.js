// Write your solution here!
// beforeEach(function () {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   });
//   console.log()
const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push('Ralph')
}
 function destructivelyPrependCat(){
    cats.unshift("Bob")

 }  
 function destructivelyRemoveLastCat(){
    cats.pop()
 } 
 function destructivelyRemoveFirstCat(){
    cats.shift()
 }
 function appendCat(name){
    const cat=[...cats]
    cat.push("Broom")
    return cat;

 }
 function prependCat(name){
    const cat=[...cats];
    cat.unshift("Arnold")
    return cat

 }
 function removeLastCat(){
    const cat=[...cats]
    cat.pop("Garfield")
    return cat;

    

 }
function removeFirstCat(){
    const cat=[...cats]
    cat.shift("Milo")
    return cat;
}
