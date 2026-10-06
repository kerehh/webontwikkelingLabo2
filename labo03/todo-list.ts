
import rl from "readline-sync"

interface Todo{
    task : string,
    checked : boolean,
}

const todos:Todo[] = [
    {task: "gras afrijden", checked: true},
    {task: "tv kijken", checked: false},
    {task: "auto wassen", checked: true}
]

const menuOptions:string[] = ['todos bekijken', "todo checken/unchecken", "todo toevoegen"]

function showMenu(){
    const answer = rl.keyInSelect(menuOptions)
    return answer
}

function showTodos(){
    const lists:string = todos.map(el=>` - [${el.checked?"X":" "}] ${el.task}`).join("\n")
    console.clear()
    console.log(lists);
}

function toggleTodo(){
    const chosenTodoIndex = rl.keyInSelect(todos.map(el=>`[${el.checked?"X":" "}] ${el.task}`))
    if (chosenTodoIndex!==-1) {
        todos[chosenTodoIndex].checked = !todos[chosenTodoIndex].checked
        showTodos()
    }
}

function AddTodo(){
    const newTask = rl.question("geef me een nieuwe todo")
    todos.push({
        task: newTask,
        checked: false
    })
}

let running:boolean = true
console.clear()
do{
    const choice = showMenu()
    switch(choice){
        case -1 : running = false; break;
        case 0 : showTodos(); break;
        case 1 : toggleTodo(); break;
        case 2 : AddTodo(); break;
    }
}while(running)