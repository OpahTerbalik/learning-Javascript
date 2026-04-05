const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {

    let todolistHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todolistHTML += html;
    }
    console.log(todolistHTML);

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

    function addTodo() {
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value
        todoList.push(name);
        console.log(todoList);

        inputElement.value = '';

        renderTodoList();
    
}


    /* for (let a = 1; a <= 5; a++) {
        console.log(a);
    } */
    
    /* array of string */

/* const toDoList = [
    'wash dishes',
    'make dinner',
    'watch youtube'
];

for (let index = 0; i < toDoList.length; i++) {
    const value = toDoList[i];
    console.log(value);
} */


/* const nums = [1, 1, 3];

let total = 0;

for (let i = 0; i < nums.length; i++){
    const num = nums[i];
    total += num;
}

console.log(total);

const numsDouble = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDouble.push(num * 2);
}

console.log(numsDouble); */