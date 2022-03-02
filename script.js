const inputBox=document.querySelector(".input_field input");
const addBtn=document.querySelector(".input_field button");
const todoList=document.querySelector(".todoList");
const deleteBtn=document.querySelector(".footer button");
 const pendingNumb=document.querySelector(".pendingNumb");
//event listeners

//functions
addBtn.onclick = () =>{
    let getLocalStorage=localStorage.getItem("newTodo");
    if (getLocalStorage == null){
        listArr=[];
    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
    let userData=inputBox.value;
    if (userData==""){
        alert("Please enter a task");
    }
    else{
    listArr.push(userData);}

    localStorage.setItem("newTodo",JSON.stringify(listArr));
    showTask();

};

//to add task inside list
function showTask(){
     let getLocalStorage=localStorage.getItem("newTodo");
    if (getLocalStorage == null){
        listArr=[];
    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
   
    newLitag='';
   
    pendingNumb.textContent=listArr.length;
    listArr.forEach((element, index) => {
        newLitag += `<li>${element}<button onclick="deleteTask(${index})">X</button></li>`;
    });
    todoList.innerHTML=newLitag;
    inputBox.value='';
    }
    showTask();

//delete inside the list
function deleteTask(index){
    let getLocalStorage=localStorage.getItem("newTodo");
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("newTodo",JSON.stringify(listArr));
    showTask();
}

//deleteall
deleteBtn.onclick=() =>{
listArr=[];
localStorage.setItem("newTodo",JSON.stringify(listArr));
showTask();
}