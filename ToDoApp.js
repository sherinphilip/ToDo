//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterTodo = document.querySelector(".filter-todo");


//Event Listeners
todoButton.addEventListener('click',checkNadd);
todoList.addEventListener('click', deleteNcheck);



//Functions 
function addTolist(event){
    event.preventDefault(); 
    while(todoInput.value.length != 0)
    {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement("button");    //check button
    completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");    //delete button
    trashButton.innerHTML = '<i class ="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv); //append to list
    todoInput.value =""; //clear value
    }
}
    //trashButton.addEventListener('click', deleteTask); //delete button
    //function deleteTask(){
    //  todoDiv.remove();
   //}
   //completedButton.addEventListener('click', completeTask);
   //function completeTask(){
    
      
    // }
   
   /*trashButton.addEventListener('click', deleteTask); //delete button
   function deleteTask(){
      todoDiv.remove();
   }
  completedButton.addEventListener('click', completeTask);
   function completeTask(){
  completedButton.innerHTML = "<i class="fa-solid fa-check-double"></i>";
      
  }*/
function deleteNcheck(e){
    const item = e.target;
    if(item.classList[0] === "trash-btn" ){
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "complete-btn"){
     const todo = item.parentElement;
     todo.classList.toggle('completed');
   }
}
function checkNadd(event) 
   {
     if (todoInput.value.length == 0)
      { 
         alert("Please enter a task");  	
          
      }  	
      return addTolist(event); 
    } 