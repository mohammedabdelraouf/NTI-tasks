function addUser(name ,  balance , usersArr){

    var user = {
        id: usersArr.length ,
        name: name, 
        balance:balance
    };

    usersArr.push(user);
    localStorage.setItem('users' , JSON.stringify(usersArr))
    showUsers(usersArr);
}

function updateBalance(userIndex , newBalance , usersArr){

    usersArr[userIndex].balance= newBalance
    localStorage.setItem('users' , JSON.stringify(usersArr))
    showUsers(usersArr)

}

function deleteUserByID(userIndex , usersArr){
    usersArr.splice(userIndex, 1)
    localStorage.setItem('users' , JSON.stringify(usersArr))
    if(users.length==0){
        tableBody.parentElement.classList.add('d-none')
    }
    else
    {
        showUsers(usersArr)
    }
}


/* Session 5 */

const nameField = document.getElementById("firstName")
const balanceField2 = document.getElementById("balanceFiled")
const tableBody = document.getElementById("div-container")

const addBtn = document.getElementById("addbtn")

let users = JSON.parse(localStorage.getItem('users'))
if (users !=null ){
    console.table(users)
    showUsers(users)
}
else{
    users =[]
}


addBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    addUser(nameField.value , balanceField2.value ,users)
    console.table(users)
})

function showUsers(usersArr){
    tableBody.parentElement.classList.remove('d-none')
    tableBody.innerText=""
    usersArr.forEach((element ,i)=>{
        // create row elements 
        let tr = document.createElement('tr')
        let name = document.createElement('td')
        name.innerText = element.name
        let balance = document.createElement('td')
        balance.innerText = element.balance
        let id = document.createElement('td')
        id.innerText = element.id
        let removeBtn =document.createElement("button")
        removeBtn.classList.add('btn' ,'btn-danger' , 'mx-2')
        removeBtn.innerText = "Remove"
        let updateBtn =document.createElement("button")
        updateBtn.classList.add('btn' ,'btn-info')
        updateBtn.innerText = "Update"
        // add eventListeners 

        removeBtn.addEventListener("click", ()=>{
            deleteUserByID(i, users)
            console.table(users)
        })

        updateBtn.addEventListener('click' , ()=>{
            updateBalance(i , balanceField2.value ,users)
            console.table(users)
        })


        // append elements in parent 
        tr.appendChild(name)
        tr.appendChild(balance)
        tr.appendChild(id)
        tr.appendChild(removeBtn)
        tr.appendChild(updateBtn)
        tableBody.appendChild(tr)

    })
}