const contactForm = document.getElementById("contactForm")
const nameField = document.getElementById("nameField")
const emailField = document.getElementById("emailField")
const subjectField = document.getElementById("subjectField")
const message = document.getElementById("message")



/* create some elements*/



function checkEmpty(e){

    for (var element of e.target.elements){
        if(element.value.trim() == ""){
            element.parentElement.nextElementSibling.innerText = "this field is required !"

        }
    }
    // if(nameField.value == "" )
    //     {   
    //         nameField.parentElement.nextElementSibling.innerText = "this field is required !"

    //     }
    //     if(emailField.value == "" )
    //     {   
    //         emailField.parentElement.nextElementSibling.innerText = "this field is required !"

    //     }
    //     if(subjectField.value == "" )
    //     {
    //         subjectField.parentElement.nextElementSibling.innerText = "this field is required !"
    //         // subjectField.parentElement.parentElement.appendChild(alarm)
    //     }
    //     if(message.value == "" )
    //     {
    //         message.parentElement.nextElementSibling.innerText = "this field is required !"

    //     }
}

contactForm.addEventListener('input' ,(e)=>{

    switch(e.target.id){
        case 'nameField':
        case 'emailField':
        case 'subjectField':
    }

});

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e);
    checkEmpty(e);
});


