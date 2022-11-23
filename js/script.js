const todoInput = document.querySelector('.todo-input');
const todoBtm = document.querySelector('.todo-button');


todoBtm.addEventListener('click',addList);

function addList(e){
    e.preventDefault();
    const list = document.createElement('div');
    list.classList.add('.todo');

    const newList = document.createElement('li');
    newList.innerText = todoInput.value;
    newList.classList.add('todo-item');
    list.appendChild(newList);
    todoInput.value='';
}