const todoInput = document.querySelector('.todo-input');
const todoBtm = document.querySelector('.todo-button');
const checkLilst = document.querySelector('.todo-list')


todoBtm.addEventListener('click',addList);

function addList(e){
    e.preventDefault();
    const list = document.createElement('div');
    list.classList.add('todo');

    const newList = document.createElement('li');
    newList.innerText = todoInput.value;
    save(todoInput.value)
    newList.classList.add('todo-item');
    list.appendChild(newList);
    todoInput.value='';

    
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class= "fas fa-check"></i>';
    completedBtn.classList.add('complete-btn');
    list.appendChild(completedBtn);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class= "fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    list.appendChild(trashBtn);

    checkLilst.appendChild(list)
}
function save (todo){
    let todos;
    if (localStorage.getItem('todos')===null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem(todos, JSON.stringify(todos))
}
