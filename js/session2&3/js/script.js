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
// var arr = ["html" , -1 , false , 15 , "css"] 

// console.log(arr)
// var  x = arr.findIndex((element)=> element == "bootstrap");
// console.log(x)
// if(x ==-1){
//     console.log("not found")
//     arr.push("bootstrap");
// }
// console.log("after")
// console.log(arr);
// *************************************************************************//

// var usersArr = [

//     {
//         fName : 'Moahammed' ,
//         balance: 10000, 
//         id:1
//     },
//     {
//         fName :'ahmed' ,
//         balance: 10000, 
//         id:2
//     },
//     {
//         fName : 'mahomoud' ,
//         balance: 10000, 
//         id:3
//     }

// ]

// users.forEach((value , i, arr)=>{
//     console.log();
//     if( value[ "fName"] == 'Zain')
//     {
//         console.log("found");
//         console.log(value["fName"] + " " + value["lName"]);
//     }
// })

// ***************************************************************************//


function addUser(name ,  balance , usersArr){

    var user = {
        id: usersArr.length ,
        name: name, 
        balance:balance
    };

    usersArr.push(user);

    showUsers(usersArr);
}

function updateBalance(userId , newBalance , usersArr){

    // usersArr.findIndex((element)=> element["id"] == userId)
    usersArr.forEach(element => {
        if(element["id"] == userId)
        {
            element['balance'] = newBalance;
            return
        }
        
    });
}

function deleteUserByID(userId , usersArr){
    // usersArr.findIndex((element)=> element["id"] == userId)
    usersArr.forEach((element , i , arr ) => {
        if(element["id"] == userId)
        {
            usersArr = usersArr.splice(i,1)
            return
        }
        
    });
}

/* Session 5 */
const divContainer = document.getElementById("div-container")

const addBtn = document.getElementById()

function showUsers(usersArr){
    usersArr.forEach((element ,i)=>{
        let div = document.createElement('tr')
        let name = document.createElement('td')
        name.innerText = element.fName
        let balance = document.createElement('td')
        balance.innerText = element.balance
        let id = document.createElement('td')
        id.innerText = element.id
        
        div.appendChild(name)
        div.appendChild(balance)
        div.appendChild(id)
         
        divContainer.appendChild(div)

    })
}


/**session 5 end */
// var users = []
// var n =parseInt(prompt("enter number of users"));
// //users.findIndex((element)=>)
// for(var j = 0 ; j < n ; j++)
// {
//     addUser(prompt(`enter user ${j+1} name`)  , prompt(`enter user ${j+1} balance`) , users)
// }

// console.table(users);


// const delbtn = document.getElementById("Delete")
// const inputF = document.getElementById("id")
// const inputF2 = document.getElementById("balance")
// delbtn.addEventListener("click" ,()=>{
//     var x= inputF.value
//     deleteUserByID(x , users)
//     console.table(users)
// });

// const updateBalancebtn = document.getElementById("update")

// updateBalancebtn.addEventListener("click", ()=>{
//     var id = inputF.value
//     var newBalance = inputF2.value
//     updateBalance(id , newBalance ,users) 
//     console.table(users)
// })

// **************************************************************

// let d = new Date()

// let day = d.getDay()

// switch (day)
// {
//     case 0:
//     console.log("sun");
//     break;
//     case 1:
//     console.log("mon");
//     break;
//     case 2:
//     console.log("tue");
//     break;
//     case 3:
//     console.log("wed");
//     break;
//     case 4:
//     console.log("thu");
//     break;
//     case 5:
//     console.log("fri");
//     break;
//     case 6:
//     console.log("sat");
//     break;
//     default :
//     console.log("undefined");
// }
/************************************************************ */

// let listItems = document.getElementsByTagName('li')
// function handleMouseMove(element,flag){
//     for (var i = 0 ; i < listItems.length ;i++)
//     {
//         listItems[i].style.color="black"
//     }
//     element.style.color = "red" ;
    
// }

// ////////////////////****************************** */

const div = document.getElementById("div-id")

div.addEventListener("scroll" , (e)=>{
    console.log(e);
    if (e.target.scrollTop > 200)
    {

        div.style.backgroundColor ='red';
    }
    else if (e.target.scrollTop < 200)
    {

        div.style.backgroundColor ='aqua';
    }
})