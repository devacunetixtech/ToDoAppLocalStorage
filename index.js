var registerLog = []
var userIndex = 0
if (localStorage.userlog) {
    registerLog = JSON.parse(localStorage.getItem("userlog"))
} else {
    registerLog = []
}
// var userIsFound = false
function userLogin(){
    let regexForEmail = /^[\w]+[@][a-z]+[.][\w]+([.][\w]+)?$/
    let regexForPassword = /^([\w]{4,10})([.]?)$/
    let test = regexForEmail.test(userLogMail.value)
    let passtest = regexForPassword.test(userLogPassword.value)
    console.log(test)
    // console.log(passtest)
    if (!test || !passtest) {
        console.log("Enter a correct email")
        errPhoneNumber.innerText="Enter a correct email"
        errEmail.innerText ="Password more/less than 8 characters"
        errPhoneNumber.style.colour="red"
        errEmail.style.colour="red"
        userLogMail.style.border="2px solid red"
        userLogPassword.style.border="2px solid red"
        userLogMail.classList.add('is-invalid')
        userLogPassword.classList.add('is-invalid')
    } else {
        console.log(registerLog);
        var email = userLogMail.value
        var password = userLogPassword.value
        // for (let index = 0; index < registerLog.length; index++) {
        //     if (registerLog[index].userMail == email && registerLog[index].userPass == password) {
        //         userIndex = index
        //         userIsFound=true;
        //         break
        //     }
        // }   
        let userIsFound = registerLog.find((item,index)=>item.userMail==email&&item.userPass==password)
        if (userIsFound) {
                // console.log(registerLog[userIndex]);
                localStorage.setItem("currentUser", JSON.stringify(registerLog[userIndex]));
                window.location="localDashboard.html";
        } else {
                response.innerHTML = "<div class='alert alert-danger text-center'>Invalid Details</div>"
        }
        userLogMail.value=""
        userLogPassword.value=""
    }
}
