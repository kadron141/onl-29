'use strict'

const TODOS_KEY = 'todos';

const createButton = (text, className) => {
    const button = document.createElement('button');
    const buttonText = document.createTextNode(text);
    button.className = className;
    button.append(buttonText);

    return button;
}

const saveTodos = (todos) => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

const onAddTodoButton = () => {
    if (userInput) {
        const oldTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
        const newTodo = { id: (new Date).valueOf(), label: userInput, isComplete: false };
        const todosToSave = oldTodos ? [newTodo, ...oldTodos] : [newTodo];
        saveTodos(todosToSave);

        todosWrapper.replaceChildren();

        todosToSave.forEach(todo => {
            todosWrapper.append(createTodo(todo));
        })

        todoInput.value = '';
        userInput = '';
    } else {
        alert('Введите текст задачи!');
    }
}

const onTodoWrapperClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const action = event.target.id.split('-')[0];
        const todoId = event.target.id.split('-')[1];
        const todoWrapper = document.getElementById(`todo-${todoId}`);
        const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));

        if (action === 'complete') {
            const completeButton = document.getElementById(`complete-${todoId}`);

            todoWrapper.className += ' complete';
            completeButton.disabled = true;

            const todosToSave = savedTodos.map(todo => {
                if (todo.id === +todoId) {
                    return {
                        ...todo,
                        isComplete: true,
                    }
                }

                return todo;
            });

            saveTodos(todosToSave);
        } else {
            const todosToSave = savedTodos.filter(todo => todo.id !== +todoId);

            todoWrapper.remove();
            saveTodos(todosToSave);
        }
    }
}

const createTodo = (todo) => {
    const todoWrapper = document.createElement('div');
    const todoText = document.createTextNode(todo.label);

    const completeButton = createButton('complete', 'button ok');
    completeButton.id = `complete-${todo.id}`;
    completeButton.disabled = todo.isComplete;

    const deleteButton = createButton('delete', 'button delete');
    deleteButton.id = `delete-${todo.id}`;

    todoWrapper.className = todo.isComplete ? 'todo-wrapper complete' : 'todo-wrapper';
    todoWrapper.id = `todo-${todo.id}`;

    todoWrapper.append(completeButton);
    todoWrapper.append(todoText);
    todoWrapper.append(deleteButton);

    return todoWrapper;
}

const initialPrint = (todosWrapper) => {
    const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));

    if (savedTodos) {
        savedTodos.forEach(todo => {
            todosWrapper.append(createTodo(todo));
        })
    }
}

const todosContainer = document.getElementById('todos-container');
const todosWrapper = document.createElement('div');
const addTodoButton = document.getElementById('add-todo');
const deleteAllButton = document.getElementById('delete-all');
const todoInput = document.getElementById('todo-input');
let userInput = '';

todosWrapper.className = 'todos-wrapper';
todosContainer.append(todosWrapper);

addTodoButton.addEventListener('click', onAddTodoButton);

deleteAllButton.onclick = function () {
    todosWrapper.replaceChildren();
    localStorage.setItem(TODOS_KEY, JSON.stringify([]));
}

todosWrapper.addEventListener('click', onTodoWrapperClick);

todoInput.addEventListener('change', (e) => {
    userInput = e.target.value;
});

initialPrint(todosWrapper);

for (let i = 0; i < 100; i++) {
    console.log(i);
    //
}