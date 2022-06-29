import { MOCK_USERS, USERS_DB_KEY, USER_KEY } from './constants.js';

let editedUserId, deletedUserId;

export const getUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem(USERS_DB_KEY));

    return storedUsers ? storedUsers : MOCK_USERS;
}

export const saveUsers = (users) => {
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
}

export const auth = (login, password) => {
    const currentUsersList = getUsers();
    const user = currentUsersList.find(user => user.login === login && user.password === password);

    if (user) {
        return { isAdmin: user.isAdmin, balance: user.balance, fullName: user.fullName };
    } else {
        alert('Неправильные логин или пароль!');
    }
}

export const initializeDasboard = () => {
    const currentUsersList = getUsers();
    const dataListContainer = document.getElementById('data-list');
    dataListContainer.replaceChildren();

    currentUsersList.forEach(user => {
        const userNode = getUserAsHtml(user);
        dataListContainer.append(userNode);
    })
}

export const onEdit = (id) => {
    editedUserId = id;

    const editWindow = document.getElementById('modal-window-edit');
    editWindow.classList.remove('hidden');

    const currentUsersList = getUsers();
    const editedUser = currentUsersList.find(u => u.id === id);

    const name = editedUser.fullName.split(' ')[0];
    const surname = editedUser.fullName.split(' ')[1];

    const editNameInput = document.getElementById('edit-name');
    const editSurameInput = document.getElementById('edit-surname');

    editNameInput.value = name;
    editSurameInput.value = surname;
}

export const onEditCancel = () => {
    const editWindow = document.getElementById('modal-window-edit');
    editWindow.classList.add('hidden');
}

export const onEditSave = () => {
    const currentUsersList = getUsers();
    const editName = document.getElementById('edit-name').value;
    const editSurame = document.getElementById('edit-surname').value;
    const usersToSave = currentUsersList.map(u => {
        if (u.id === editedUserId) {
            return {
                ...u,
                fullName: `${editName} ${editSurame}`
            }
        }

        return u;
    });

    saveUsers(usersToSave);
    initializeDasboard();
    onEditCancel();
}

export const onDeleteCancel = () => {
    const deleteWindow = document.getElementById('modal-window-delete');
    deleteWindow.classList.add('hidden');
}

export const onDeleteSave = () => {
    const currentUsersList = getUsers();
    const usersToSave = currentUsersList.filter(u => u.id !== deletedUserId);

    saveUsers(usersToSave);
    initializeDasboard();
    onDeleteCancel();
}

const onDelete = (id) => {
    deletedUserId = id;

    const deleteWindow = document.getElementById('modal-window-delete');
    deleteWindow.classList.remove('hidden');

    const currentUsersList = getUsers();
    const deletedUser = currentUsersList.find(u => u.id === id);
    const deleteTextDiv = document.getElementById('delete-text');
    deleteTextDiv.innerHTML = `<span>Are you sure you want to delete <b>${deletedUser.fullName}</b>? This action cannot be undone.</span>`;
    console.log(deletedUser);
}

export const onAddCancel = () => {
    const addWindow = document.getElementById('modal-window-add');
    addWindow.classList.add('hidden');
}

export const onAddSave = () => {
    const addName = document.getElementById('add-name').value;
    const addSurame = document.getElementById('add-surname').value;
    const addLogin = document.getElementById('add-login').value;

    const newUser = {
        balance: 0,
        fullName: `${addName} ${addSurame}`,
        id: (new Date).valueOf(),
        login: addLogin,
        password: addLogin,
        isAdmin: document.getElementById('add-admin').checked,
    }

    console.log(newUser)

    const currentUsersList = getUsers();
    const usersToSave = [...currentUsersList, newUser];

    saveUsers(usersToSave);
    initializeDasboard();
    onAddCancel();
}

export const onAddUser = () => {
    const deleteWindow = document.getElementById('modal-window-add');
    deleteWindow.classList.remove('hidden');
}

export const onLogOut = () => {
    localStorage.removeItem(USER_KEY);
}

const getUserAsHtml = (user) => {
    const userWrapper = document.createElement('div');
    const userBody = document.createElement('div');
    const deleteUser = document.createElement('button');
    const editUser = document.createElement('button');

    editUser.addEventListener('click', () => { onEdit(user.id) });
    deleteUser.addEventListener('click', () => { onDelete(user.id) });

    userWrapper.className = 'user-wrapper';

    userBody.id = `username_${user.id}`;
    userWrapper.id = `user_${user.id}`;
    deleteUser.id = `delete-user_${user.id}`;
    editUser.id = `edit-user_${user.id}`;

    userBody.append(document.createTextNode(user.fullName));
    userWrapper.append(userBody);
    editUser.append(document.createTextNode('Edit'));
    userWrapper.append(editUser);
    deleteUser.append(document.createTextNode('X'));
    userWrapper.append(deleteUser);

    return userWrapper;
}



