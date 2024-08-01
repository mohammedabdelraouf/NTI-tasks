const contactForm = document.getElementById("contactForm")
const nameField = document.getElementById("nameField")
const emailField = document.getElementById("emailField")
const subjectField = document.getElementById("subjectField")
const message = document.getElementById("message")



/* create some elements*/
let alarm = document.createElement('div')
alarm.classList.add('text-danger' , 'fs-6')
alarm.innerText = "this field is required !"



contactForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(nameField.value == "" )
    {
        nameField.parentElement.appendChild(alarm)
    }
})
