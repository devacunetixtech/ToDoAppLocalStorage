var registerLog = []
var editedIndex = 0
if (localStorage.userlog) {
    registerLog = JSON.parse(localStorage.getItem("userlog"))
} else {
    registerLog = []
}
        
function displayProfile() {
    for (var index = 0; index < registerLog.length; index++) {
    userDashboard.innerHTML = `
    <span><button onclick="goHome()" class="btn btn-danger" id="home" style="position:fixed;">HOME</button></span> d
    
    <div class=" m-auto col-10 col-md-4 col-lg-4 mb-5">
        <img id="cardImg" src="acunetix.jpg" class="card-img-top m-auto my-3 w-100">
        <div class="card-body">
            <div class="border border-success">
                <h6 class="card-text text-center">USER DETAILS</h6>
                <p class=""><b>Username : </b>${registerLog[index].userName}</p>
                <p><b>E-mail : </b>${registerLog[index].userMail}</p>
                <p><b>Contact Number : </b>${registerLog[index].userPhoneNumber}</p>
                <p><b>Acct Date & Time Creation : </b>${Date()}</p>
                <div id="updateDiv" style="display:none;">
                    <input type="text" placeholder="Update your username" id="input1">
                    <input type="text" placeholder="Update your email" id="input2"><br>
                    <input type="text" class="mb-2" placeholder="Update your Contact Number" id="input3">
                    <input type="password" class="mb-2" placeholder="Update your Password" id="input4">
                    <button onclick="updateProfile(${index})" class="btn btn-warning">UPDATE</button>
                </div>
                <button id="editButt" onclick="editProfile(${index})" class="btn btn-warning">EDIT PROFILE</button>
                <button onclick="logMeOut()" class="btn btn-danger">LOG-OUT</button>
            </div>
            
        </div>    
    </div>
    `
    }
}
displayProfile();
function editProfile(listIndex) {
    console.log(listIndex)
    editedIndex = listIndex
    editButt.style.display="none"
    updateDiv.style.display ="block"
    input1.value = registerLog[listIndex].userName
    input2.value = registerLog[listIndex].userMail
    input3.value = registerLog[listIndex].userPhoneNumber
    input4.value = registerLog[listIndex].userPass
}
function updateProfile() {
    console.log(editedIndex)
    var toVerify = confirm("Proceed to save ?")
    if (toVerify) {
        registerLog[editedIndex] = {
        userName:input1.value,
        userMail:input2.value,
        userPhoneNumber:input3.value,
        userPass:input4.value,
      };
        localStorage.setItem("userlog",JSON.stringify(registerLog));
        displayProfile()
        updateDiv.style.display ="none"
    }
}
function logMeOut(){
    var verify = confirm("Are you sure you want to log out ?")
    if (verify) {
        window.location="index.html"
    }
}
function goHome(){
    var verify = confirm("You will be directed back home?")
    if (verify) {
        window.location="localTodoPro.html"
    }
}