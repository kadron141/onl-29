import { auth } from '../../utils/utils.js';
import { USER_KEY } from '../../utils/constants.js';

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
    const loginInput = document.getElementById('login-input');
    const passwordInput = document.getElementById('password-input');
    const user = auth(loginInput.value, passwordInput.value);

    if (user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else if (!loginInput.className.includes('error') && !passwordInput.className.includes('error')) {
        loginInput.classList.add('error');
        passwordInput.className.add('error');
    }
})