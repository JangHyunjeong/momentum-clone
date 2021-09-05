const toDoForm = document.querySelector('#toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#toDoList');
const TODOS_KEY = "toDos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //JSON.stringigy : number -> string
    //JSON.parse : string -> object 
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id) );
    saveToDos();
}

function paintTodo(newTodoObj){
    const li =  document.createElement('li');
    const span =  document.createElement('span');
    const button = document.createElement('button');
    button.innerText = "X";
    li.id = newTodoObj.id;
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodoObj.text;
    toDoList.appendChild(li);
    button.addEventListener('click',deleteTodo);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo =  toDoInput.value;
    toDoInput.value = '';
    newTodoObj = {
        text: newTodo,
        id : Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit',handleTodoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);

/*function sayHello(item){
    console.log(`this is turn of ${item}`);
}*/

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    //console.log(parsedTodos);
    //parsedTodos.forEach(sayHello);
    //parsedTodos.forEach((item) => console.log(`this is turn of ${item}`));
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}