var todoList = []
var editedIndex = 0
if (localStorage.userTodo) {
    todoList = JSON.parse(localStorage.getItem("userTodo"))
} else {
    todoList = []
}
function addTodo() {
    if (todo.value==""||todoDescribe.value==""||todoCategory.value=="") {
        alert("Fill out all fields")
    } else {
        totalList = {
            yourTodo : todo.value,
            yourTodoCategory : todoCategory.value,
            yourTodoDescribe : todoDescribe.value,
        } ;
        todoList.push(totalList);
        console.log(todoList)
        // localStorage.setItem("userTodo", JSON.stringify(todoList))
        todo.value = ""
        todoCategory.value = ""
        todoDescribe.value = ""
        disp.innerHTML=""
        displayList()
    }
}
function displayList() {
    disp.innerHTML=""
    // for (var index = 0; index < todoList.length; index++) {
    //         disp.innerHTML += `
    //         <h3>ToDo : ${todoList[index].yourTodo}</h3>
    //         <h3>ToDo Description : ${todoList[index].yourTodoCategory}</h3>
    //         <h3>ToDo Category : ${todoList[index].yourTodoDescribe}</h3>
    //         <button class="btn btn-danger" onclick="deleteOneList(${index})">Delete</button>
    //         <button class="btn btn-warning" onclick="editList(${index})">Edit</button>
    //         `
    //     }
    todoList.map((item,index)=>{
    disp.innerHTML += `
        <h3>ToDo : ${item.yourTodo}</h3>
        <h3>ToDo Description : ${item.yourTodoCategory}</h3>
        <h3>ToDo Category : ${item.yourTodoDescribe}</h3>
        <button class="btn btn-danger" onclick="deleteOneList(${index})">Delete</button>
        <button class="btn btn-warning" onclick="editList(${index})">Edit</button>
    `
})
}
function editList(listIndex) {
    console.log(listIndex)
    editedIndex = listIndex
    updateDiv.style.display ="block"
    input1.value = todoList[listIndex].yourTodo
    input2.value = todoList[listIndex].yourTodoCategory
    input3.value = todoList[listIndex].yourTodoDescribe
}
function deleteOneList(listIndex) {
    var confirmDel = confirm("Are you sure you want to delete this ToDo ?")
    if (confirmDel==true) {
        todoList.splice(listIndex,1)
        console.log(todoList)
        displayList()
    }
}
function updateList() {
    console.log(editedIndex)
    todoList[editedIndex] = {
        yourTodo:input1.value,
        yourTodoCategory:input2.value,
        yourTodoDescribe:input3.value,
    };
    displayList()
    updateDiv.style.display ="none"
}
function deleteAllTodo() {
    var confirmDel = confirm("Are you sure you want to delete this ToDo ?")
    if (confirmDel==true) {
        todoList.splice(0)
        console.log(todoList)
    }
    disp.innerHTML = ""
}
function logOut() {
        var confirmDel = confirm("Are you sure you want to log out?")
        if (confirmDel==true) {
            location.replace("index.html")
        }
    }
function checkProfile() {
    window.location="localDashboard.html";
}