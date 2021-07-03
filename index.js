const inputBox=document.querySelector(".inputField input");
const addBtn=document.querySelector(".inputField button");
const todoList=document.querySelector(".todolist");
const deleteAllBtn=document.querySelector(".footer button");
inputBox.onkeyup=()=>{
    let userData= inputBox.value;//getting use entered value
    if(userData.trim()!==0){// if user value are not only space
        addBtn.classList.add('active'); // active the add button
    }
    else{
        addBtn.classList.remove('active'); //remove active to the button
    }

}
showTasks();
//if user click on the add button
addBtn.onclick=()=>{
    let userData= inputBox.value;
let getLocalStorage=localStorage.getItem("New Todo");//getting localstorage
if(getLocalStorage==null){
    listArr=[];

}
else {
    listArr=JSON.parse(getLocalStorage);
}
listArr.push(userData);//pushing user data
localStorage.setItem("New Todo",JSON.stringify(listArr));//transforming js object into a json string

showTasks();
}; 

function showTasks(){
    let getLocalStorage=localStorage.getItem("New Todo");//getting localstorage
if(getLocalStorage==null){
    listArr=[];

}
else {
    listArr=JSON.parse(getLocalStorage );
}
 const pendingNumb=document.querySelector(".pendingNumber");
 pendingNumb.textContent = listArr.length; 
 let newLiTag="";
 listArr.forEach((element,index)=>{
   newLiTag  +=` <li>${element}<span onclick="deleteTask(${index})";><i class="fa fa-trash-o"></i></span></li>`;
 } );
 todoList.innerHTML=newLiTag;
 inputBox.value="";

}
//delete

function deleteTask(index){
    let getLocalStorage=localStorage.getItem("New Todo");
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index ,1);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}
//
deleteAllBtn.onclick=()=>{
    listArr=[];
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}
