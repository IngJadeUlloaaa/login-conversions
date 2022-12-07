function ir(){
    var name = "Admin";
    var pass = "Admin12345";

    if(document.form.password.value == pass && document.form.login.value == name){
        alert("Oe profesor Santos este trabajo me quedo SALVAJE!!!!!!!");
        window.location = "opera.html";
    }
    else{
        alert("Name = Admin\nPassword = Admin12345");
    }
}