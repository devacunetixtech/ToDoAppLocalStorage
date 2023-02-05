var registerLog = []
    if (localStorage.userlog) {
        registerLog = JSON.parse(localStorage.getItem("userlog"))
    } else {
        registerLog = []
    }
    function userRegister() {
        if (newFullname.value =="" || newUserPassword.value=="" || newUsermail.value=="" || newFullname.value=="" || userNumber.value=="") {
            alert("Fill in all details correctly !!!!!")
        } else {
            regButton.innerHTML = "Registering.....";
            var userFullName = newFullname.value;
            var userName = newUsername.value;
            var userPass = newUserPassword.value;
            var userMail = newUsermail.value;
            var userPhoneNumber = userNumber.value;
            var userDetails = {userFullName, userName, userPass, userMail, userPhoneNumber};
            registerLog.push(userDetails);
            localStorage.setItem("userlog",JSON.stringify(registerLog));
            alert("Hello "+ newFullname.value +" you have successfully registered on " + Date());
            location.replace("index.html");
        }
    }