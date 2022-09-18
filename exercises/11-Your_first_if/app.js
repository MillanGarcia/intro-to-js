var total = prompt('How many km are left to go?');

// Your code below:
function answer(value){
    if(value>100){
        console.log("We still have a bit of driving left to go");
    }else if(value>50 && value<=100){
        console.log("We'll be there in 5 minutes");
    }else if(value>0 && value<=50){
        console.log("I'm parking. I'll see you right now");
    }else {
        console.log("Error")
    }
}
answer(total);