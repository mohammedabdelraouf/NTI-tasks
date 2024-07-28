function looping(startNum , endNum , breakNum , continueNum){

    if(startNum == undefined || endNum == undefined || 
        breakNum ==undefined  || continueNum == undefined )
    {
        console.log("please enter valid values")
        return
    }

    for(var i =startNum ; i <= endNum ; i++ )
    {

        if(i == continueNum) {
            continue;
        }
        else if (i == breakNum)
        { 
            console.log(`I will break at ${i}`);
            break; 

        }
        else{
            console.log(i)
        }
    }

}



// var start = prompt("enter start")

// var end = prompt("enter end")

// var breakNum = prompt("enter breakNum")

// var continueNum = prompt("enter continueNum")

// looping(start , end ,breakNum, continueNum)

// ************************************************************************//
var arr = ["html" , -1 , false , 15 , "css"] 

console.log(arr)
var  x = arr.findIndex((element)=> element == "bootstrap");
console.log(x)
if(x ==-1){
    console.log("not found")
    arr.push("bootstrap");
}
console.log("after")
console.log(arr);