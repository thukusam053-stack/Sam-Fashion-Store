function registerUser(){

let password = document.getElementById("password").value;

let confirmPassword = document.getElementById("confirmPassword").value;

if(password !== confirmPassword){

document.getElementById("registerMessage").innerHTML =
"Passwords do not match.";

document.getElementById("registerMessage").style.color="red";

return;

}

document.getElementById("registerMessage").innerHTML =
"Registration Successful! Welcome to Sam Fashion Store.";

document.getElementById("registerMessage").style.color="green";

}