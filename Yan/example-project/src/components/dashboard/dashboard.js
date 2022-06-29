'use strict'

import { USER_KEY } from "../../utils/constants";
import { initializeDasboard, onEditCancel, onEditSave, onDeleteCancel, onDeleteSave } from '../../utils/utils.js';

const search = decodeURIComponent(window.location.search);
console.log(search.split('=')[1])


const cancelEdit = document.getElementById('edit-cancel');
cancelEdit.addEventListener('click', onEditCancel);

const saveEdit = document.getElementById('edit-save');
saveEdit.addEventListener('click', onEditSave);

const cancelDelete = document.getElementById('delete-cancel');
cancelDelete.addEventListener('click', onDeleteCancel);

const deleteEdit = document.getElementById('delete-save');
deleteEdit.addEventListener('click', onDeleteSave);

if (JSON.parse(localStorage.getItem(USER_KEY))) {
    initializeDasboard();
} else {
    console.log('no user');
}
