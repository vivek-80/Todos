// selectors

const todo_input = document.querySelector('.todo-in');
const todo_button = document.querySelector('.todo-btn');
const todo_lst = document.querySelector('.todo-lst'); 

// Event Listeners
todo_button.addEventListener('click', addTodo);
todo_lst.addEventListener('click', deleteCheck);
todo_lst.addEventListener('click',completed_tasks);
//Functions

function addTodo(event){
    // prevent form from submitting
    // return the function if the text-field is empty:
    if (todo_input.value===""){
        alert("Please add Todos");
        return
    }
    event.preventDefault();
    // Todo div
    const todo_div= document.createElement("div");
    todo_div.classList.add("todo");
    // todo_div.id.add('todo_id');
    // Todo list
    const new_todo= document.createElement('li');
    new_todo.innerText= todo_input.value;
    new_todo.classList.add("todo-item");
    todo_div.appendChild(new_todo);
    // check mark button
    const check_btn= document.createElement("button");
    check_btn.innerHTML='<i class="fas fa-check"></i>';
    check_btn.classList.add('chk-btn');
    todo_div.appendChild(check_btn);
    // check trash button
    const trash_btn= document.createElement('trash_btn');
    trash_btn.innerHTML= "<i class='fas fa-trash'></i>";
    trash_btn.classList.add('trash-btn');
    todo_div.appendChild(trash_btn);
    // append to list
    todo_lst.appendChild(todo_div);
    // clearInput value
    todo_input.value="";
}
function deleteCheck(e){
    const item= e.target;
    // delete todo
    if (item.classList[0]==="trash-btn"){
        const todo= item.parentElement;
        // animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    // check
    if (item.classList[0]==="chk-btn"){
            const todo= item.parentElement;
            todo.classList.toggle('completed');
    }
    }

}
function completed_tasks(e){
    const item= e.target;
    const todo= item.parentElement;
    todo.classList.add('completed_tasks')
    
}

// var taskCompleted=function(){
//     console.log("Complete Task...");

// //Append the task list item to the #completed-tasks
// var listItem=this.parentNode;
// completedTasksHolder.appendChild(listItem);
//             bindTaskEvents(listItem, taskIncomplete);

// }