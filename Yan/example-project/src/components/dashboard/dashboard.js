'use strict'

import { USER_KEY } from "../../utils/constants";
import {
    initializeDasboard,
    onEditCancel,
    onEditSave,
    onDeleteCancel,
    onDeleteSave,
    onAddUser,
    onAddCancel,
    onAddSave,
    onLogOut,
} from '../../utils/utils.js';

const search = decodeURIComponent(window.location.search);
console.log(search.split('=')[1])

const cancelEdit = document.getElementById('edit-cancel');
cancelEdit.addEventListener('click', onEditCancel);

const saveEdit = document.getElementById('edit-save');
saveEdit.addEventListener('click', onEditSave);

const cancelDelete = document.getElementById('delete-cancel');
cancelDelete.addEventListener('click', onDeleteCancel);

const saveDelete = document.getElementById('delete-save');
saveDelete.addEventListener('click', onDeleteSave);

const addUser = document.getElementById('add-user-btn');
addUser.addEventListener('click', onAddUser);

const cancelAdd = document.getElementById('add-cancel');
cancelAdd.addEventListener('click', onAddCancel);

const saveAdd = document.getElementById('add-save');
saveAdd.addEventListener('click', onAddSave);

const logOut = document.getElementById('log-out');
logOut.addEventListener('click', onLogOut);

if (JSON.parse(localStorage.getItem(USER_KEY))) {
    initializeDasboard();
} else {
    console.log('no user');
}
