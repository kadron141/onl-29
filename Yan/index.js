'use strict'

//input = ["red", "green", "red", "blue", "blue"] => 2

const LANGUAGES = [
    {
        id: 'js',
        aliases: ['js', 'javascript', 'es', 'ts']
    },
    {
        id: 'python',
        aliases: ['pt', 'py', 'python']
    }
]

const users = [];

for (let i = 0; i < 3; i++) {
    const userName = prompt('name');
    const userLanguage = prompt('language');

    users.push({
        userName,
        userLanguage,
    })
}

const languageToCompare = users[0].userLanguage.toLowerCase();
let result = true;

for (let i = 1; i < users.length; i++) {
    let isLangMatches = false;

    for (let j = 0; j < LANGUAGES.length; j++) {
        if (
            LANGUAGES[j].aliases.includes(languageToCompare) &&
            LANGUAGES[j].aliases.includes(users[i].userLanguage.toLowerCase())) {
            isLangMatches = true;
            break;
        }
    }

    if (!isLangMatches) {
        result = false;
        break;
    }
}

console.log(users);
console.log(result);