

//Your code above ^^^
function sing(){
    let song="";
    for (let index = 0; index < 12; index++) {
        if(index===4){
            song+="whisper words of wisdom, ";
        }else if(index===10){
            song+="there will be an answer, ";
        }else if(index === 11){
            song+="let it be";
        }else {
            song+="let it be, ";
        }
    }
    return song;
}
console.log(sing());