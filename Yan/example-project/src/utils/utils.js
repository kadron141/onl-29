import { MOCK_USERS, USERS_DB_KEY } from './constants.js';

let editedUserId;

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

const getUserAsHtml = (user) => {
    const userWrapper = document.createElement('div');
    const userBody = document.createElement('div');
    const deleteUser = document.createElement('button');
    const editUser = document.createElement('button');

    editUser.addEventListener('click', () => { onEdit(user.id) });

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



