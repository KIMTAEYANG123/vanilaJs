const todoForm = document.querySelector('.todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list');
const TODOS_KEY = 'todos';

// 투두리스트 삭제 함수
function deleteTodo(e){
    const deleteLi = e.target.parentElement;
    todos = todos.filter( item => (Number(deleteLi.className) !== item.id))
    deleteLi.remove();
    saveTodo()
}

let todos = [];

// 로컬스토리지에 등록
function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// li태그를 생성하여 작성한 내용을 기록 
function paintTodo(newTodo){
    const todoLi = document.createElement('li');
    todoLi.className = newTodo.id;
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj)
    paintTodo(newTodoObj);
    saveTodo();
}
todoForm.addEventListener('submit',handleTodoSubmit)


//로컬스토리지에 값을 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    todos = parseToDos;
    parseToDos.forEach(paintTodo)
}


