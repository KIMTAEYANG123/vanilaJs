const todoForm = document.querySelector('.todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list');


function deleteTodo(e){
    const deleteLi = e.target.parentElement;
    deleteLi.remove();
}


const todos = [];

function saveTodo(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

// li태그를 생성하여 작성한 내용을 기록 
function paintTodo(newTodo){
    const todoLi = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.innerText = newTodo;
    todoLi.appendChild(span);

    button.innerText ='X';
    button.addEventListener('click',deleteTodo)  
    todoLi.appendChild(button);

    todoList.appendChild(todoLi);

}


function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    toods.push(newTodo)
    paintTodo(newTodo);
    saveTodo();
}


todoForm.addEventListener('submit',handleTodoSubmit)
