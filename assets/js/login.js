var email = document.getElementById("email-register")
var user = document.getElementById("user-register")
var pass = document.getElementById("pass-register")
var pass2 = document.getElementById("pass2-register")
var kiemtra = false;
email.addEventListener("keyup",function(){
    var form = email.parentElement
    var email_value = email.value
    var error = form.getElementsByClassName("error")[0]
    var check = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email_value.match(check)){
        error.innerHTML = "Email hợp lệ"
        error.style.color = "green"
        kiemtra = true
    }
    else{
        error.innerHTML = "Email không hợp lệ"
        error.style.color = "red"
        kiemtra = false
    }
    
    if(email_value == ""){
        error.innerHTML = ""
        error.style.color = "#fff"
        kiemtra = false
    }
})
var kiemtra1=false
user.addEventListener("keyup",function(){
    var form = user.parentElement
    var user_value = user.value
    var error = form.getElementsByClassName("error")[0]
    var check = /^[a-zA-Z0-9\-]{6,12}$/
    if(user_value.match(check)){
        error.innerHTML = "Username hợp lệ"
        error.style.color = "green"
        kiemtra1 = true
    }
    else{
        error.innerHTML = "Username không hợp lệ. Username chứa 6-12 ký tự và không chứa khoảng trắng"
        error.style.color = "red"
        kiemtra1 = false
    }
    
    if(user_value == ""){
        error.innerHTML = ""
        error.style.color = "#fff"
        kiemtra1 = false
    }
})
var kiemtra2 = false
pass.addEventListener("keyup",function(){
    var form = pass.parentElement
    var pass_value = pass.value
    var error = form.getElementsByClassName("error")[0]
    var check = /^[a-zA-Z0-9\-]{1,12}$/
    if(pass_value.match(check)){
        error.innerHTML = "Mật khẩu hợp lệ"
        error.style.color = "green"
        kiemtra2 = true
    }
    else{
        error.innerHTML = "Mật khẩu không hợp lệ. Mật khẩu chứa 1-12 ký tự và không chứa khoảng trắng"
        error.style.color = "red"
        kiemtra2 = false
    }
    
    if(pass_value == ""){
        error.innerHTML = ""
        error.style.color = "#fff"
        kiemtra2 = false
    }
})
var kiemtra3=false
pass2.addEventListener("keyup",function(){
    var form = pass2.parentElement
    var pass2_value = pass2.value
    var pass_value = pass.value
    var error = form.getElementsByClassName("error")[0]
    var check = /^[a-zA-Z0-9\-]{1,12}$/
    if(pass2_value != pass_value){
        error.innerHTML ="Mật khẩu xác nhận không đúng"
        error.style.color ="red"
        kiemtra3 = false
    }
    else{
        error.innerHTML ="Mật khẩu xác nhận hợp lệ"
        error.style.color ="green"
        kiemtra3 = true
    }
    if(pass2_value == ""){
        error.innerHTML = ""
        error.style.color = "#fff"
        kiemtra3 = false
    }
})