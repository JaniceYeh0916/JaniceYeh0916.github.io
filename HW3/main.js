var submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function () {
    if (document.getElementById("email").value === "" || document.getElementById("password").value === ""){
        alert ("Waring!");
    }
    else{
        if(validateEmail()){
            alert ("Welcome to TimeTree~");
        }else{
            alert ("This is a invalid email."+"\n"+"Please enter again!");
        }
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

var fbBtn = document.getElementById("facebook");
var appleBtn = document.getElementById("apple");

fbBtn.onclick = function () {
    alert ("Server busy, try again later.");
}

appleBtn.onclick = function () {
    alert ("Server busy, try again later.");
}




