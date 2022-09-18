// Your code here:
function milksong(){
    for (let i = 5; i >= 0; i--) {
        if(i===1){
            console.log(i+" bottle of milk on the wall, "+i+" bottle of milk.\n"+
            "Take one down and pass it around, no more bottles of milk on the wall.");
        }else if(i===0){
            console.log("No more bottles of milk on the wall, no more bottles of milk.\n"+
            "Go to the store and buy some more, 99 bottles of milk on the wall.")

        }else if(i===2){
            console.log(i+" bottles of milk on the wall, "+i+" bottles of milk.\n"+
            "Take one down and pass it around, "+(i-1)+" bottle of milk on the wall.")

        }
        else{
            console.log(i+" bottles of milk on the wall, "+i+" bottles of milk.\n"+
            "Take one down and pass it around, "+(i-1)+" bottles of milk on the wall.")
        }
        
    }
}
milksong();