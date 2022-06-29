import { TODOS_KEY } from './constants.js';

export const createButton = (text, className) => {
    const button = document.createElement('button');
    const buttonText = document.createTextNode(text);
    button.className = className;
    button.append(buttonText);

    return button;
}

export const saveTodos = (todos) => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

export const createTodo = (todo) => {
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

export const onAddTodoButton = (userInput, todosWrapper, todoInput) => {
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
    } else {
        alert('Введите текст задачи!');
    }
}

export const onTodoWrapperClick = (event) => {
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

export const initialPrint = (todosWrapper) => {
    const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));

    if (savedTodos) {
        savedTodos.forEach(todo => {
            todosWrapper.append(createTodo(todo));
        })
    }
}