const form =document.getElementById("form");
const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const email=document.getElementById("email");
const password=document.getElementById("password");


// Check Required Function
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value===''){
            alert(`${getFieldName(input)} cannot be empty`);
        }
    });
}
// Check Email
function checkEmail(input){
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(input.value)){
        alert(`*"Looks like this is not an email"*`);
    
    }
}
// Get Field Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)}

// Even listener
form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([firstName,lastName,email,password]);
    checkEmail(email);
})
console.log(firstName);