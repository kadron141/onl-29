'use strict'

import { onAddTodoButton, onTodoWrapperClick, initialPrint } from './utils.js';
import { TODOS_KEY } from './constants.js';

const todosContainer = document.getElementById('todos-container');
const todosWrapper = document.createElement('div');
const addTodoButton = document.getElementById('add-todo');
const deleteAllButton = document.getElementById('delete-all');
const todoInput = document.getElementById('todo-input');
let userInput = '';

todosWrapper.className = 'todos-wrapper';
todosContainer.append(todosWrapper);

addTodoButton.addEventListener('click', () => {
    onAddTodoButton(userInput, todosWrapper, todoInput);
    userInput = '';
});

deleteAllButton.addEventListener('click', () => {
    todosWrapper.replaceChildren();
    localStorage.setItem(TODOS_KEY, JSON.stringify([]));
});

todosWrapper.addEventListener('click', onTodoWrapperClick);

todoInput.addEventListener('change', (e) => {
    userInput = e.target.value;
});

initialPrint(todosWrapper);