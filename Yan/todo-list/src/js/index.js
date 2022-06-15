'use strict'

const TODOS = [
    {
        id: 0,
        label: 'Помыть полы',
        isComplete: false,
    },
    {
        id: 1,
        label: 'Протереть пыль',
        isComplete: false,
    },
    {
        id: 2,
        label: 'Почитать книгу',
        isComplete: false,
    },
    {
        id: 3,
        label: 'Погулять',
        isComplete: false,
    },
    {
        id: 4,
        label: 'Помыть полы',
        isComplete: false,
    },
    {
        id: 5,
        label: 'Протереть пыль',
        isComplete: false,
    },
    {
        id: 6,
        label: 'Почитать книгу',
        isComplete: false,
    },
    {
        id: 7,
        label: 'Погулять',
        isComplete: false,
    },
    {
        id: 8,
        label: 'Помыть полы',
        isComplete: false,
    },
    {
        id: 9,
        label: 'Протереть пыль',
        isComplete: false,
    },
    {
        id: 10,
        label: 'Почитать книгу',
        isComplete: false,
    },
    {
        id: 11,
        label: 'Погулять',
        isComplete: false,
    },
]

let userInput = '';

const createButton = (text, className) => {
    const button = document.createElement('button');
    const buttonText = document.createTextNode(text);
    button.className = className;
    button.append(buttonText);

    return button;
}

const todosContainer = document.getElementById('todos-container');
const todosWrapper = document.createElement('div');
todosWrapper.className = 'todos-wrapper';
todosContainer.append(todosWrapper);

const deleteAllButton = document.getElementById('delete-all');
deleteAllButton.onclick = function () {
    todosWrapper.replaceChildren();
}

const todoInput = document.getElementById('todo-input');
todoInput.addEventListener('change', (e) => {
    userInput = e.target.value;
})

const addTodoButton = document.getElementById('add-todo');
addTodoButton.addEventListener('click', function () {
    if (userInput) {
        const todos = Object.values(todosWrapper.childNodes);
        const newTodo = createTodo({ id: (new Date).valueOf(), label: userInput, isComplete: false })
        todos.unshift(newTodo);
        todosWrapper.replaceChildren();

        todos.forEach(todo => {
            todosWrapper.append(todo);
        })

        todoInput.value = '';
        userInput = '';
    } else {
        alert('Введите текст задачи!');
    }
});



todosWrapper.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const action = event.target.id.split('-')[0];
        const todoId = event.target.id.split('-')[1];
        const todoWrapper = document.getElementById(`todo-${todoId}`);

        if (action === 'complete') {
            const completeButton = document.getElementById(`complete-${todoId}`);
            const deleteButton = document.getElementById(`delete-${todoId}`);

            todoWrapper.className += ' complete';
            completeButton.disabled = true;
            deleteButton.disabled = true;
        } else {
            todoWrapper.remove();
        }
    }
})

const createTodo = (todo) => {
    const todoWrapper = document.createElement('div');
    const todoText = document.createTextNode(todo.label);

    const completeButton = createButton('complete', 'button ok');
    completeButton.id = `complete-${todo.id}`;
    completeButton.disabled = todo.isComplete;

    const deleteButton = createButton('delete', 'button delete');
    deleteButton.disabled = todo.isComplete;
    deleteButton.id = `delete-${todo.id}`;

    todoWrapper.className = todo.isComplete ? 'todo-wrapper complete' : 'todo-wrapper';
    todoWrapper.id = `todo-${todo.id}`;

    todoWrapper.append(completeButton);
    todoWrapper.append(todoText);
    todoWrapper.append(deleteButton);

    return todoWrapper;
}


TODOS.forEach(todo => {
    todosWrapper.append(createTodo(todo));
})

